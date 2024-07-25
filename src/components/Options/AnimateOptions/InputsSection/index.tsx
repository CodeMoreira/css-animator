import { Dispatch, SetStateAction } from "react";
import { useAnimation } from "../../../../hooks/useAnimation";
import PrimaryButton from "../../../Buttons/Primary";
import TextInput from "../../../inputs/TextInput";
import "./style.css"

export type FrameSelected = { attr: string; index: number } | null

interface IInputsSectionProps {
    frameSelected: FrameSelected
    setFrameSelected: Dispatch<SetStateAction<FrameSelected>>
}

export default function InputsSection({ frameSelected, setFrameSelected }: IInputsSectionProps) {
    const { setAnimations, animations} = useAnimation()

    return (
        <div className="inputs_wrapper">
            {frameSelected && (
                <>
                    <span>{animations[frameSelected.attr]?.[frameSelected.index]?.percentage}%</span>
                    <TextInput
                        label="value"
                        value={animations[frameSelected.attr]?.[frameSelected.index]?.value}
                        onChange={value => {
                            setAnimations(prev => ({
                                ...prev,
                                [frameSelected.attr]: prev[frameSelected.attr].map((item, index) => {
                                    if (index !== frameSelected.index) {
                                        return item
                                    }
                                    return {
                                        ...item,
                                        value
                                    }
                                })
                            }))
                        }}
                    />
                    <PrimaryButton
                        text="Confirm"
                        onClick={() => setFrameSelected(null)}
                    />
                </>
            )}
        </div>
    )
}