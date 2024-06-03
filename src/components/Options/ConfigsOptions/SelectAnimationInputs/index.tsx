import { Example_animations } from "../../../../contexts/animationProvider";
import { useAnimation } from "../../../../hooks/useAnimation";
import { example_animations } from "../../../../utils/exampleAnimations";
import PrimaryButton from "../../../Buttons/Primary";
import SecoundaryButton from "../../../Buttons/Secoundary";
import "./style.css"

export default function SelectAnimationInputs() {
    const { exampleAnimation, setExampleAnimation } = useAnimation()

    return (
        <div className="select_animation_wrapper">
            <h3>Examples</h3>
            {Object.keys(example_animations).map(animation => 
                exampleAnimation === animation ? (
                    <PrimaryButton
                        key={animation}
                        text={animation}
                        onClick={() => setExampleAnimation(animation as Example_animations)}
                    />
                ) : (
                    <SecoundaryButton
                        key={animation}
                        text={animation}
                        onClick={() => setExampleAnimation(animation as Example_animations)}
                    />
                )
            )}
        </div>
    )
}
