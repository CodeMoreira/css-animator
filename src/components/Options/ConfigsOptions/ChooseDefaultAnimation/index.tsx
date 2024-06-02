import { Example_animations } from "../../../../contexts/animationProvider";
import { useAnimation } from "../../../../hooks/useAnimation";
import { example_animations } from "../../../../utils/exampleAnimations";
import SecoundaryButton from "../../../Buttons/Secoundary";
import "./style.css"

export default function SelectAnimationInputs() {
    const { setExampleAnimation } = useAnimation()

    return (
        <div className="select_animation_wrapper">
            <h3>Examples</h3>
            {Object.keys(example_animations).map(animation => (
                <SecoundaryButton
                    text={animation}
                    onClick={() => setExampleAnimation(animation as Example_animations)}
                />
            ))}
        </div>
    )
}
