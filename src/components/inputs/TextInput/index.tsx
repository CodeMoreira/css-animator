import { ComponentProps } from "react"
import "../style.css"

interface ITextInputProps extends Omit<ComponentProps<'input'>, 'onChange'> {
    label?: string
    value: string
    onChange: (value: string) => void
}

export default function TextInput({ label, value, onChange, ...props }: ITextInputProps) {
    const InputElement = () => {
        const inputId = `${label!.split(" ").join("")}`

        return (
            <label htmlFor={inputId}>{label}:</label>
        )
    }

    return (
        <div className="input_wrapper">
            {label && (
                <InputElement />
            )}
            <input
                {...props}
                id="inputId"
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}
