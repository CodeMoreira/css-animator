import React from 'react';
import "./style.css"

interface ModalProps {
  title: string;
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  show,
  onClose,
  width,
  height
}) => {
  if (!show) {
    return null
  }

  return (
    <div className="modal_wrapper">
        <div className="modal_container" style={{ width, height }}>
            <div className="modal_header">
                <h2>{title}</h2>
                <button onClick={onClose}>&times;</button>
            </div>
            {children}
        </div>
        <div className="modal_backdrop" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
