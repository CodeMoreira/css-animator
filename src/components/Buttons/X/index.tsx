import { ComponentProps } from "react"

interface IXButtons extends ComponentProps<"button"> {
    size?: `${number}px`
}

export default function XButton({size = "24px", ...props}: IXButtons) {
    return (
        <button
            {...props}
            className="x_button"
            style={{
                fontSize: size
            }}
        >
            &times;
        </button>
    )
}