import { useAnimation } from "../../../../hooks/useAnimation";
import TextAreaInput from "../../../inputs/TextAreaInput";
import "./style.css"
export default function AnimationEncoded() {
    const { encodedAnimation, setEncodedAnimation } = useAnimation()

    return (
        <div className="save_set_animation_wrapper">
            <h3>Animation Encoded</h3>
            <TextAreaInput
                value={encodedAnimation}
                onChange={setEncodedAnimation}
            />
        </div>
    )
}
