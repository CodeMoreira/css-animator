import { useState } from "react"
import { useAnimation } from "../../hooks/useAnimation"
import Modal from "../Modal"
import TextInput from "../inputs/TextInput"
import PrimaryButton from "../Buttons/Primary"
import "./style.css"
import SecoundaryButton from "../Buttons/Secoundary"
import cssAnimatablePropertiesArray from "../../utils/cssAnimatableProperties.json"

export default function AddNewAttributeModal() {
    const { openAddModal, setOpenAddModal, setAnimations } = useAnimation()
    const [attribute, setAttribute] = useState("")

    const handleClose = () => {
        setOpenAddModal(false)
        setAttribute("")
    }

    const handleSave = () => {
        setAnimations(prev => ({
            ...prev,
            [attribute]: []
        }))
        handleClose()
    }

    return (
        <Modal
            title='Add new attribute'
            show={openAddModal}
            onClose={handleClose}
        >
            <TextInput
                list="browsers"
                label="Attribute"
                value={attribute}
                onChange={setAttribute}
            />
            <datalist id="browsers">
                {cssAnimatablePropertiesArray.map(propertie => (
                    <option value={propertie} />
                ))}
            </datalist>
            <div className="buttons_container">
                <SecoundaryButton
                    width="100%"
                    text="Cancel"
                    onClick={handleClose}
                />
                <PrimaryButton
                    width="100%"
                    text="Confirm"
                    onClick={handleSave}
                    disabled={!attribute || !cssAnimatablePropertiesArray.includes(attribute)}
                />
            </div>
        </Modal>
    )
}