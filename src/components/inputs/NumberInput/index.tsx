import { ComponentProps } from "react"
import "../style.css"

interface INumberInputProps extends Omit<ComponentProps<'input'>, 'onChange'> {
    label?: string
    value: number
    onChange: (value: number) => void
}

export default function NumberInput({ label, value, onChange, width, ...props }: INumberInputProps) {
    const InputElement = () => {
        const inputId = `${label!.split(" ").join("")}`

        return (
            <label htmlFor={inputId}>{label}:</label>
        )
    }
    return (
        <div className="input_wrapper" style={{ width }}>
            {label && (
                <InputElement />
            )}
            <input
                {...props}
                id="inputId"
                type="number"
                value={value}
                onChange={e => onChange(Number(e.target.value))}
            />
        </div>
    )
}
