interface IDividerProps {
    vertical?: boolean
    color?: string
}

export default function Divider({ vertical, color = "secoundary100" }: IDividerProps) {
    return (
        <div
            style={{
                width: vertical ? "2px" : "100%",
                height: vertical ? "100%" : "2px",
                margin: vertical ? "0 16px" : "16px 0",
                backgroundColor: `var(--${color})`
            }}
        />
    )
}