import { CSSProperties, useState } from "react"
import "./style.css"

interface ITabsProps extends Pick<CSSProperties, "width" | "height"> {
    tabs: Record<string, JSX.Element>
    placement?: "top" | "bottom"
}

export default function Tabs({ tabs, width = "100%", height = "100%", placement = "top" }: ITabsProps) {
    const [fileSelected, setFileSelected] = useState(0)
    const tabsArray = Object.entries(tabs).map(([name, element]) => ({ name, element }))

    return (
        <div className={`tabs_wrapper ${placement}`} style={{ width, height }}>
            {placement === "bottom" && (
                <div className="tabs_element_container">
                    {tabsArray[fileSelected].element}
                </div>
            )}

            <div className={`tabs_button_container ${placement}`}>
                {tabsArray.map(({ name }, index) => (
                    <button
                        key={name}
                        className={index === fileSelected ? "selected" : "unselected"}
                        onClick={() => setFileSelected(index)}
                    >
                        {name}
                    </button>
                ))}
                <div className="top_border"></div>
            </div>

            {placement === "top" && (
                <div className="tabs_element_container">
                    {tabsArray[fileSelected].element}
                </div>
            )}
        </div>
    )
}