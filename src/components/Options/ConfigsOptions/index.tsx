import Divider from "../../Divider"
import "../style.css"
import SelectAnimationInputs from "./ChooseDefaultAnimation"
import DefaultStyleInputs from "./DefaultStyleInputs"
export default function ConfigsOptions() {
    return (
        <div className="options_wrapper">
            <SelectAnimationInputs />
            <Divider vertical />
            <DefaultStyleInputs />
        </div>
    )
}