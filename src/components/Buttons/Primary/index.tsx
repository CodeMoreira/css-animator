import { ComponentProps } from "react";
import "./style.css"
import "../style.css"

interface IPrimaryButtonProps extends ComponentProps<'button'> {
    text: string
    width?: string
    height?: string
}

export default function PrimaryButton({ text, width, height, ...props }: IPrimaryButtonProps) {
    return (
        <button {...props} style={{ width, height }} className="primary_button">
            {text}
        </button>
    )
}
