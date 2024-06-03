import { ComponentProps } from "react"
import "../style.css"

interface ITextAreaInputProps extends Omit<ComponentProps<'textarea'>, 'onChange'> {
    label?: string
    value: string
    onChange: (value: string) => void
}

export default function TextAreaInput({ label, value, onChange, ...props }: ITextAreaInputProps) {
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
            <textarea
                {...props}
                id="inputId"
                rows={11}
                cols={200}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}
