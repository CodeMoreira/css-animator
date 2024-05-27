import { useAnimation } from "../../hooks/useAnimation"
import playIcon from  "../../assets/play-icon.svg"
import pauseIcon from  "../../assets/pause-icon.svg"
import TimeLine from "./TimeLine"
import "./style.css"
import { convertMsToString } from "../../utils/convertMsToString"
import { convertTimeToString } from "../../utils/convertTimeToString"

export default function Controls() {
    const { play, setPlay, currentTimePercentage, time } = useAnimation()

    const baseTimeValue = Math.floor(currentTimePercentage * time)
    const currentTimeInMs = convertMsToString(baseTimeValue % 1000)
    const currentTimeInSec = convertTimeToString(Math.floor(baseTimeValue / 1000) % 60)
    const currentTimeInMin = convertTimeToString(Math.floor(baseTimeValue / 1000 / 60) % 60)

    return (
        <div className="comtrols_wrapper">
            {/* Play / Pause button */}
            <button onClick={() => setPlay(!play)}>
                <img width={24} src={play ? pauseIcon : playIcon} alt="play icon" />
            </button>
            {/* Play / Pause button */}

            <TimeLine />

            <div className="show_time_container">
                <span>{currentTimeInMin}:{currentTimeInSec}:{currentTimeInMs}</span>
            </div>
        </div>
    )
}