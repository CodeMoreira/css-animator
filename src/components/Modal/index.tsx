import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(modalRef.current);
    return () => {
        document.body.removeChild(modalRef.current)
    };
  }, []);

  useEffect(() => {
    if (show) {
      const modal = document.createElement('div');
      modalRef.current = modal;
      document.body.appendChild(modal);
      setIsMounted(true);
    } else {
      if (modalRef.current) {
        document.body.removeChild(modalRef.current);
        setIsMounted(false);
      }
    }
  }, [show]);

  if (!isMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal_wrapper">
        <div className="modal_container" style={{ width, height }}>
            <div className="modal_header">
                <h2>{title}</h2>
                <button onClick={onClose}>&times;</button>
            </div>
            {children}
        </div>
        <div className="modal_backdrop" onClick={onClose}></div>
    </div>,
    modalRef.current
  );
};

export default Modal;