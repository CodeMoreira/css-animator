import { useAnimation } from "../../hooks/useAnimation"
import playIcon from  "../../assets/play-icon.svg"
import pauseIcon from  "../../assets/pause-icon.svg"
import TimeLine from "./TimeLine"
import "./style.css"
import MaxTime from "./MaxTime"
import Timer from "./Timer"
import { useEffect } from "react"
import { convertMsToString } from "../../utils/convertMsToString"

export default function Controls() {
    const { play, setPlay, currentTimePercentage } = useAnimation()

    useEffect(() => {
        const onKeyUp = ({ key }: KeyboardEvent) => {
            // space key
            if (key === " ") {
                setPlay(prev => !prev)
            }
        }

        window.addEventListener("keyup", onKeyUp)

        return () => window.removeEventListener("keyup", onKeyUp)
    }, [])

    return (
        <div className="comtrols_wrapper">
            {/* Play / Pause button */}
            <button onClick={() => setPlay(!play)}>
                <img width={24} src={play ? pauseIcon : playIcon} alt="play icon" />
            </button>
            {/* Play / Pause button */}

            <TimeLine />

            <div className="show_time_container">
                <span>{convertMsToString(Math.floor(currentTimePercentage * 100))}%</span> | <Timer /> / <MaxTime />
            </div>
        </div>
    )
}