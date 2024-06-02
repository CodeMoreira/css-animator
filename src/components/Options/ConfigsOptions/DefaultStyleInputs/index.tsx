import { useAnimation } from "../../../../hooks/useAnimation";
import "./style.css"
import PrimaryButton from "../../../Buttons/Primary";
import XButton from "../../../Buttons/X";
import StyleInput from "./Input";

export default function DefaultStyleInputs() {
    const { defaultStyle, setDefaultStyle } = useAnimation()

    return (
        <div className="default_style_wrapper">
            <h3>Default element style</h3>
            <div className="default_style_inputs_wrapper">
                {defaultStyle.length === 0 && (
                    <span>There is no style, add an attribute for style the element.</span>
                )}
                
                {defaultStyle.map((cssValue, index) => (
                    <div  key={cssValue} className="default_style_input_container">
                        <StyleInput index={index}/>
                        <XButton
                            title="delete"
                            onClick={() => setDefaultStyle(prev => prev.filter((_, i) => i !== index))}
                        />
                    </div>
                ))}
            </div>
            <PrimaryButton
                text="+ Add Attribute"
                onClick={() => setDefaultStyle(prev => [...prev, ""])}
            />
        </div>
    )
}