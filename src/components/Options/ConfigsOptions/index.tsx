import Divider from "../../Divider"
import "../style.css"
import SelectAnimationInputs from "./SelectAnimationInputs"
import DefaultStyleInputs from "./DefaultStyleInputs"
import AnimationEncoded from "./AnimationEncoded"

export default function ConfigsOptions() {
    return (
        <div className="options_wrapper">
            <AnimationEncoded />
            <Divider vertical />
            <SelectAnimationInputs />
            <Divider vertical />
            <DefaultStyleInputs />
        </div>
    )
}