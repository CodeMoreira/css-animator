import { ComponentProps } from "react";
import "./style.css"
import "../style.css"

interface ISecoundaryButtonProps extends ComponentProps<'button'> {
    text: string
    width?: string
    height?: string
}

export default function SecoundaryButton({ text, width, height, ...props }: ISecoundaryButtonProps) {
    return (
        <button {...props} style={{ width, height }} className="secoundary_button">
            {text}
        </button>
    )
}
