import { CSSProperties, useState } from "react"
import "./style.css"
import DefaultEditor from "../DefaultEditor"

interface IEditorTabsProps extends Pick<CSSProperties, "width" | "height"> {
    files: Record<string, {
        value: string,
        language: string
    }>,
}

export default function EditorTabs({ files, width = "100%", height = "100%" }: IEditorTabsProps) {
    const [fileSelectedIndex, setFileSelectedIndex] = useState(0)
    const filesArray = Object.entries(files).map(([name, values]) => ({ name, ...values }))

    const file = filesArray[fileSelectedIndex]

    return (
        <div className="tabs_wrapper top" style={{ width, height }}>
            <div className="tabs_button_container top">
                {filesArray.map(({ name }, index) => (
                    <button
                        key={index}
                        className={index === fileSelectedIndex ? "selected" : "unselected"}
                        onClick={() => setFileSelectedIndex(index)}
                    >
                        {name}
                    </button>
                ))}
                <div className="top_border"></div>
            </div>
            <div className="tabs_element_container">
                <DefaultEditor
                    language={file.language}
                    value={file.value}
                />
            </div>
        </div>
    )
}