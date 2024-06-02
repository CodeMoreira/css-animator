import { useEffect, useState } from "react"
import { useAnimation } from "../../../../hooks/useAnimation"
import TextInput from "../../../inputs/TextInput"

interface IStyleInput {
    index: number
}

export default function StyleInput({ index }: IStyleInput) {
    const { defaultStyle, setDefaultStyle } = useAnimation()
    const [value, setValue] = useState(defaultStyle[index])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDefaultStyle(
                prev => prev.map((innerCssValue, innerIndex) => {
                    if (innerIndex === index) {
                        return value
                    }
                    return innerCssValue
                })
            )
        }, 500);

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <TextInput
            value={value}
            onChange={setValue}
        />
    )
}