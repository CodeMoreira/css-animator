import { useAnimation } from "../../hooks/useAnimation"
import playIcon from  "../../assets/play-icon.svg"
import pauseIcon from  "../../assets/pause-icon.svg"
import TimeLine from "./TimeLine"
import "./style.css"

export default function Controls() {
    const { play, setPlay } = useAnimation()

    return (
        <div className="comtrols_wrapper">
            {/* Play / Pause button */}
            <button onClick={() => setPlay(!play)}>
                <img width={24} src={play ? pauseIcon : playIcon} alt="play icon" />
            </button>
            {/* Play / Pause button */}

            <TimeLine />
        </div>
    )
}