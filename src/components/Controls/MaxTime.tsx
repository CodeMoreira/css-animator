import { useState } from "react"
import NumberInput from "../inputs/NumberInput"
import { convertMsToString } from "../../utils/convertMsToString"
import { convertTimeToString } from "../../utils/convertTimeToString"
import { useAnimation } from "../../hooks/useAnimation"

export default function MaxTime() {
    const { time, setTime } = useAnimation()

    const [showEditTimeInput, setShowEditTimeInput] = useState(false)

    const baseTimeValue = Math.floor(time)
    const currentTimeInMs = convertMsToString(baseTimeValue % 1000)
    const currentTimeInSec = convertTimeToString(Math.floor(baseTimeValue / 1000) % 60)
    const currentTimeInMin = convertTimeToString(Math.floor(baseTimeValue / 1000 / 60) % 60)

    const handleClose = () => {
        setShowEditTimeInput(prev => !prev)
    }

    const handleSave = () => {
        handleClose()
        if (time < 100) {
            setTime(100)
        }
    }

    if (!showEditTimeInput) {
        return (
            <span
                style={{ cursor: "pointer" }}
                onClick={() => setShowEditTimeInput(true)}
            >{currentTimeInMin}:{currentTimeInSec}:{currentTimeInMs}</span>
        )
    }

    return (
        <NumberInput
            autoFocus
            width="100px"
            min="100"
            step={1}
            value={time}
            onChange={setTime}
            onBlur={handleSave}
            onKeyDown={({ key }) => key === "Enter" && handleSave()}
        />
    )
}