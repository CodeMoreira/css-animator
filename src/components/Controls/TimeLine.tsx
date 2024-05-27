import { useEffect, useRef } from "react"
import { useAnimation } from "../../hooks/useAnimation"
import "./style.css"

export default function TimeLine() {
    const { play, setPlay, time, currentTimePercentage, setCurrentTimePercentage } = useAnimation()
    const getTime = time / 100
    const interval = useRef<number>()

    useEffect(() => {
        if (currentTimePercentage >= 1) {
            clearInterval(interval.current)
            setPlay(false)
            setCurrentTimePercentage(0)
            console.log("Timer end", {
                interval,
                play,
                currentTimePercentage
            });
        }
    }, [currentTimePercentage])

    useEffect(() => {
        if (play) {
            console.log("Timer start");
            interval.current = setInterval(() => {
                setCurrentTimePercentage(prev => prev + 0.1)
                console.log("Timer running", {currentTimePercentage, getTime});
            }, getTime);
        }
    
        return () => clearInterval(interval.current);
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
