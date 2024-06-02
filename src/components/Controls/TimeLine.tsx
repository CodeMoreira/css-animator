import { useEffect, useRef } from "react"
import { useAnimation } from "../../hooks/useAnimation"
import "./style.css"
import { ControlAnimation, setAnimationTime } from "../../utils/controlAnimation"

export default function TimeLine() {
    const { play, setPlay, time, currentTimePercentage, setCurrentTimePercentage } = useAnimation()
    const timer = useRef<number>()

    useEffect(() => {
        if (play && currentTimePercentage >= 1) {
            clearInterval(timer.current)
            setPlay(false)
            setCurrentTimePercentage(0)
            ControlAnimation("pause")
            setAnimationTime(0)
        }
    }, [currentTimePercentage])

    useEffect(() => {
        if (play) {
            timer.current = setInterval(() => {
                const getPercentage = (1000 / time) / 100
                setCurrentTimePercentage(prev => prev + getPercentage)
            }, 10);
        }

        return () => clearInterval(timer.current);
    }, [play])

    return (
        <div className="time_line_wrapper">
            <div className="slidecontainer">
                <input
                    className="slider"
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={currentTimePercentage}
                    onChange={e => setCurrentTimePercentage(Number(e.target.value))}
                />
            </div>
        </div>
    )
}
