import "./style.css"
import Donnation_pix from "../../../../assets/donnation_pix.png"
import PrimaryButton from "../../../Buttons/Primary";
import Modal from './../../../Modal';
import { useState } from "react";

export default function Donnation() {
    const [showModal, setShowModal] = useState(false)
    
    const copyPastePix = "00020126580014br.gov.bcb.pix0136f9a35dbf-b32e-4f21-94de-d99189f3eaae5204000053039865802BR5922GABRIEL MOREIRA MATTOS6009SAO PAULO62580520SAN2024060306291089850300017br.gov.bcb.brcode01051.0.063040022"
    const BRL_donation_link = "https://donate.stripe.com/6oE4iT72I0xnczSeUU"
    const USD_donation_link = "https://donate.stripe.com/28o4iTbiY93T57q145"

    return (
        <div className="donnation_wrapper">
            <h3>Donnation</h3>
            <PrimaryButton text="Pix" width="100%" onClick={() => setShowModal(true)} />
            <PrimaryButton text="BRL Donnation" width="100%" onClick={() => window.open(BRL_donation_link, "_blank")} />
            <PrimaryButton text="USD Donnation" width="100%" onClick={() => window.open(USD_donation_link, "_blank")} />
            <Modal
                title="Pix Donnation"
                show={showModal}
                onClose={() => setShowModal(false)}
            >
                <div className="pix_container">
                    <img src={Donnation_pix} alt="Donnation pix qr code" height="300px" />
                    <PrimaryButton text="Copy/Paste pix" width="100%" onClick={() => navigator.clipboard.writeText(copyPastePix)}/>
                </div>
            </Modal>
        </div>
    )
}
