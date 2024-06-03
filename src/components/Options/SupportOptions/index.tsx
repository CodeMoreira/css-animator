import Divider from "../../Divider"
import "../style.css"
import Credits from "./Credits"
import Donation from "./Donation"

export default function SupportOptions() {
    return (
        <div className="options_wrapper">
            <Donation />
            <Divider vertical />
            <Credits />
        </div>
    )
}