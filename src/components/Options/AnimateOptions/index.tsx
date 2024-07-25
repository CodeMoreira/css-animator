import { Fragment, useEffect, useRef, useState } from "react"
import { useAnimation } from "../../../hooks/useAnimation"
import InputsSection, { FrameSelected } from "./InputsSection";
import TimeTrack from "./TimeTrack";
import "../style.css"
import "./style.css"

export default function AnimateOptions() {
    const { 
        play,
        setCurrentTimePercentage,
        currentTimePercentage,
        setAnimations,
        animations,
        setOpenAddModal,
    } = useAnimation()

    const timeLineContainerRef = useRef<HTMLDivElement>(null)
    const animationsArray = Object.entries(animations)
    const [frameSelected, setFrameSelected] = useState<FrameSelected>(null)

    useEffect(() => {
        const frameSelectedData = frameSelected ? animations?.[frameSelected.attr]?.[frameSelected.index] ?? null : null

        if (frameSelectedData && !play) {
            setCurrentTimePercentage(Number((frameSelectedData.percentage / 100).toFixed(2)))
        }
    }, [play, frameSelected, animations])

    useEffect(() => {
        const onKeyUp = ({ key }: KeyboardEvent) => {
            if (key === "Delete" && frameSelected) {
                setAnimations(prev => ({
                    ...prev,
                    [frameSelected.attr]: prev[frameSelected.attr].filter((_, index) => index !== frameSelected.index)
                }))
                setFrameSelected(null)
            }

            if (key == "Escape" && frameSelected) {
                setFrameSelected(null)
            }
        }

        window.addEventListener("keyup", onKeyUp)

        return () => window.removeEventListener("keyup", onKeyUp)
    }, [frameSelected])

    return (
        <div className="options_wrapper">
            <div className="options_container">
                <div className="animation_timeline_wrapper">

                    <div className="animation_attribute_names">
                        {animationsArray.map(([ attribute ]) => (
                            <Fragment key={attribute}>
                                <div className="attribute_container">
                                    <p title={attribute}>{attribute}</p>
                                </div>
                                <div className="attribute_divider"></div>
                            </Fragment>
                        ))}
                        <button className="attribute_button" onClick={() => setOpenAddModal(true)}>
                            + add
                        </button>
                    </div>

                    <div className="animation_timeline_container" ref={timeLineContainerRef}>
                        <div className="line" style={{ left: `${Math.floor(currentTimePercentage * 100)}%` }}></div>

                        {animationsArray.map(([ attribute, keyframes ]) => (
                            <Fragment key={`track-${attribute}`}>
                                <TimeTrack
                                    attribute={attribute}
                                    keyframes={keyframes}
                                    frameSelected={frameSelected}
                                    setFrameSelected={setFrameSelected}
                                    timeLineContainerRef={timeLineContainerRef}
                                />
                                <div className="attribute_divider"></div>
                            </Fragment>
                        ))}
                    </div>

                    <div className="animation_attribute_delete_wrapper">
                        {animationsArray.map(([ attribute ]) => (
                            <Fragment key={attribute}>
                                <button
                                    title="delete"
                                    className="attribute_delete_button"
                                    onClick={() => {
                                        setAnimations(prev => {
                                            const newObj = { ...prev }

                                            delete newObj[attribute]

                                            return newObj
                                        })
                                    }}
                                >
                                    &times;
                                </button>
                                <div className="attribute_divider"></div>
                            </Fragment>
                        ))}
                    </div>
                </div>

                <InputsSection frameSelected={frameSelected} setFrameSelected={setFrameSelected} />
            </div>
        </div>
    )
}
