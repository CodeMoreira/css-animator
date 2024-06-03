import Divider from "../../Divider"
import "../style.css"
import Credits from "./Credits"
import Donnation from "./Donnation"

export default function SupportOptions() {
    return (
        <div className="options_wrapper">
            <Donnation />
            <Divider vertical />
            <Credits />
        </div>
    )
}