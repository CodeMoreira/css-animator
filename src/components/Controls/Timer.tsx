import { convertMsToString } from "../../utils/convertMsToString"
import { convertTimeToString } from "../../utils/convertTimeToString"
import { useAnimation } from "../../hooks/useAnimation"

export default function Timer() {
    const { currentTimePercentage, time } = useAnimation()

    const baseTimeValue = Math.floor(currentTimePercentage * time)
    const currentTimeInMs = convertMsToString(baseTimeValue % 1000)
    const currentTimeInSec = convertTimeToString(Math.floor(baseTimeValue / 1000) % 60)
    const currentTimeInMin = convertTimeToString(Math.floor(baseTimeValue / 1000 / 60) % 60)

    return (
        <span>{currentTimeInMin}:{currentTimeInSec}:{currentTimeInMs}</span>
    )

}