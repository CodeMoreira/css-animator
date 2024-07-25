import { Dispatch, MouseEvent, RefObject, SetStateAction, useState } from "react"
import { AnimationObj } from "../../../../utils/checkAnimationJsonFormat"
import { FrameSelected } from "../InputsSection"
import convertToPercentage from "../../../../utils/convertToPercentage"
import { useAnimation } from "../../../../hooks/useAnimation"
import "./style.css"

interface IAttributeProps {
    attribute: string
    keyframes: AnimationObj[]
    frameSelected: FrameSelected
    setFrameSelected: Dispatch<SetStateAction<FrameSelected>>
    timeLineContainerRef: RefObject<HTMLDivElement>
}

export default function TimeTrack({ attribute, keyframes, frameSelected, setFrameSelected, timeLineContainerRef }: IAttributeProps) {
    const { setAnimations } = useAnimation()

    const [isDragging, setIsDragging] = useState(false)

    const onMouseDown = (event: MouseEvent<HTMLDivElement>, index: number) => {
        event.preventDefault()

        setFrameSelected({
            attr: attribute,
            index,
        })

        setIsDragging(true)

        onMouseMove(event)
    }

    const disableDragging = () => {
        setIsDragging(false)
    }

    const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (isDragging && frameSelected) {
            const { clientX } = event
            const containerOffsetLeft = timeLineContainerRef.current?.offsetLeft ?? 0
            const containerClientWidth = timeLineContainerRef.current?.clientWidth ?? 0
            const realClientX = clientX - containerOffsetLeft

            let percentage = convertToPercentage(realClientX, containerClientWidth, true)

            if (percentage < 0) {
                percentage = 0
                disableDragging()
            }

            if (percentage > 100) {
                percentage = 100
                disableDragging()
            }

            setAnimations((prev) => ({
                ...prev,
                [attribute]: prev[attribute].map((item, index) => {
                    if (index !== frameSelected.index) {
                        return item
                    }
                    return {
                        ...item,
                        percentage,
                    }
                }),
            }))
        }
    }

    return (
        <div className="attribute_container">
            {keyframes.map(({ percentage }, percentageIndex) => {
                const isFrameSelected = frameSelected?.attr === attribute && frameSelected.index == percentageIndex

                const currentDragging = isDragging && frameSelected?.attr === attribute && frameSelected.index === percentageIndex

                return (
                    <div
                        key={`${attribute}-${percentageIndex}`}
                        id={`${attribute}-${percentageIndex}`}
                        style={{
                            position: currentDragging ? "relative" : "absolute",
                            left: currentDragging ? "0" : `${percentage}%`,
                            width: currentDragging ? "100%" : "fit-content",
                            height: currentDragging ? "22px" : "fit-content",
                            transform: currentDragging ? "none" : "translateX(-50%)",
                            zIndex: currentDragging ? 2 : 1,
                            borderTop: currentDragging ? "1px solid var(--primary)" : "none",
                            borderBottom: currentDragging ? "1px solid var(--primary)" : "none",
                        }}
                        onMouseDown={(event) => onMouseDown(event, percentageIndex)}
                        onMouseMove={onMouseMove}
                        onMouseUp={disableDragging}
                        onMouseLeave={disableDragging}
                    >
                        <div
                            className="attribute_keyframe"
                            style={{
                                width: "12px",
                                height: "12px",
                                position: currentDragging ? "absolute" : "relative",
                                left: currentDragging ? `${percentage}%` : "0",
                                top: currentDragging ? "20%" : "0",
                                transform: currentDragging ? "translateX(-50%)" : "none",
                            }}
                        >
                            <div style={{
                                width: "100%",
                                height: "100%",
                                transform: "rotate(45deg)",
                                backgroundColor: "white",
                                border: "1px solid transparent",
                                borderColor: isFrameSelected ? "blue" : "transparent"
                            }}>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>    
    )
}
