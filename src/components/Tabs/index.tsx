import { CSSProperties, useState } from "react"
import "./style.css"

interface ITabsProps extends Pick<CSSProperties, "width" | "height"> {
    tabs: Record<string, JSX.Element>
}

export default function Tabs({ tabs, width = "100%", height = "100%" }: ITabsProps) {
    const [fileSelected, setFileSelected] = useState(0)
    const tabsArray = Object.entries(tabs).map(([name, element]) => ({ name, element }))

    return (
        <div className="tabs_wrapper" style={{ width, height }}>
            <div className="tabs_button_container">
                {tabsArray.map(({ name }, index) => (
                    <button
                        className={index === fileSelected ? "selected" : "unselected"}
                        onClick={() => setFileSelected(index)}
                    >
                        {name}
                    </button>
                ))}
                <div className="top_border"></div>
            </div>
            <div className="tabs_element_container">
                {tabsArray[fileSelected].element}
            </div>
        </div>
    )
}