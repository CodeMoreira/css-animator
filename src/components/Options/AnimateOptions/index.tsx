import { Fragment, useEffect, useState } from "react"
import { useAnimation } from "../../../hooks/useAnimation"
import "../style.css"
import "./style.css"
import TextInput from './../../inputs/TextInput/index';
import PrimaryButton from './../../Buttons/Primary/index';

export default function AnimateOptions() {
    const { 
        play,
        setCurrentTimePercentage,
        currentTimePercentage,
        setAnimations,
        animations,
        setOpenAddModal,
    } = useAnimation()

    const animationsArray = Object.entries(animations)

    const [mousePosition, setMousePostion] = useState(0)
    const [isHoveringFrame, setIsHoveringFrame] = useState(false)
    const [draggingFrame, setDraggingFrame] = useState(false)
    const [frameSelected, setFrameSelected] = useState<{ attr: string; index: number } | null>(null)

    useEffect(() => {
        if (frameSelected && draggingFrame) {
            setAnimations(prev => ({
                ...prev,
                [frameSelected.attr]: prev[frameSelected.attr].map((item, index) => {
                    if (index === frameSelected.index) {
                        return ({
                            ...item,
                            percentage: mousePosition
                        })
                    }
    
                    return item
                })
            }))
        }
    }, [mousePosition, frameSelected])

    useEffect(() => {
        const onKeyUp = ({ key }: KeyboardEvent) => {
            if (key === "Delete" && frameSelected) {
                setAnimations(prev => ({
                    ...prev,
                    [frameSelected.attr]: prev[frameSelected.attr].filter((_, index) => index !== frameSelected.index)
                }))
                setFrameSelected(null)
                setIsHoveringFrame(false)
            }

            if (key == "Escape" && frameSelected) {
                setFrameSelected(null)
            }
        }

        window.addEventListener("keyup", onKeyUp)

        return () => window.removeEventListener("keyup", onKeyUp)
    }, [frameSelected])

    useEffect(() => {
        const frameSelectedData = frameSelected ? animations?.[frameSelected.attr]?.[frameSelected.index] ?? null : null

        if (frameSelectedData && !play) {
            setCurrentTimePercentage(Number((frameSelectedData.percentage / 100).toFixed(2)))
        }
    }, [play, frameSelected, animations])

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

                    <div
                        className="animation_timeline_container"
                        onMouseMove={({ currentTarget, screenX }) => {
                            const elementWidth = currentTarget.clientWidth
                            
                            const leftDistance = 148

                            const realPostion = screenX - leftDistance
                            const percentage = Number(((realPostion * 100) / elementWidth).toFixed())

                            if (frameSelected) {
                                const currentAttr = animations[frameSelected.attr]
                                const lastIndex = currentAttr.length - 1
                                const prevFramePercentage = frameSelected.index > 0 ? currentAttr[frameSelected.index - 1].percentage : null
                                const nextFramePercentage = frameSelected.index < lastIndex ? currentAttr[frameSelected.index + 1].percentage : 101
    
                                const checkPrev = prevFramePercentage ? percentage > prevFramePercentage : percentage >= 0

                                if (checkPrev && percentage < nextFramePercentage) {
                                    setMousePostion(percentage)
                                }
                            }
                        }}
                    >
                        <div className="line" style={{ left: `${Math.floor(currentTimePercentage * 100)}%` }}></div>

                        {animationsArray.map(([ attribute, keyframes ]) => (
                            <Fragment key={`track-${attribute}`}>
                                <div
                                    className="attribute_container"
                                    onClick={({ currentTarget, screenX }) => {
                                        const elementWidth = currentTarget.clientWidth
                            
                                        const leftDistance = 148

                                        const realPostion = screenX - leftDistance
                                        const percentage = Number(((realPostion * 100) / elementWidth).toFixed())

                                        const isCurrentMoreThanPrev = keyframes.length ? (percentage > keyframes[keyframes.length - 1].percentage) : true

                                        if (!isHoveringFrame && !frameSelected && isCurrentMoreThanPrev) {
                                            setAnimations(prev => {
                                                return {
                                                    ...prev,
                                                    [attribute]: [
                                                        ...prev[attribute],
                                                        {
                                                            percentage,
                                                            value: ""
                                                        }
                                                    ]
                                                }
                                            })
                                        }
                                    }}
                                >
                                    {keyframes.map(({ percentage }, percentageIndex) => {
                                        const isFrameSelected = frameSelected?.attr === attribute && frameSelected.index == percentageIndex

                                        return (
                                            <div
                                                key={`${percentage}-${percentageIndex}`}
                                                onMouseOver={() => setIsHoveringFrame(true)}
                                                onMouseLeave={() => setIsHoveringFrame(false)}
                                                onMouseDownCapture={() => setDraggingFrame(true)}
                                                onMouseUpCapture={() => setDraggingFrame(false)}
                                                onClick={() => setFrameSelected({ attr: attribute, index: percentageIndex })}
                                                className="attribute_keyframe"
                                                style={{
                                                    left: `${percentage}%`,
                                                    border: "1px solid transparent",
                                                    borderColor: isFrameSelected ? "blue" : "transparent"
                                                }}
                                            ></div>
                                        )
                                    })}
                                </div>
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

                <div className="inputs_wrapper">
                    {frameSelected && (
                        <>
                            <span>{animations[frameSelected.attr]?.[frameSelected.index]?.percentage}%</span>
                            <TextInput
                                label="value"
                                value={animations[frameSelected.attr]?.[frameSelected.index]?.value as string}
                                onChange={value => {
                                    setAnimations(prev => ({
                                        ...prev,
                                        [frameSelected.attr]: prev[frameSelected.attr].map((item, index) => {
                                            if (index !== frameSelected.index) {
                                                return item
                                            }
                                            return {
                                                ...item,
                                                value
                                            }
                                        })
                                    }))
                                }}
                            />
                            <PrimaryButton
                                text="Confirm"
                                onClick={() => setFrameSelected(null)}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
