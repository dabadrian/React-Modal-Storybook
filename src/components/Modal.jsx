import React, { useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ onClose, onApply, onCancel, title, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleApply = () => {
    onApply();
    handleClose();
  };

  const handleCancel = () => {
    onCancel();
    handleClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
      <div className="modal-header">
        <h3 className="modal-title">{title}</h3>
        <div className="modal-title-line"></div>
        <span className="modal-close" onClick={handleClose}>x</span>
      </div>
        <div className="modal-content">
          {children}
        </div>
        <div className="modal-footer">
          
          <button className="modal-cancel-button" onClick={handleCancel}>Cancelar</button>
          <button className="modal-apply-button" onClick={handleApply}>Aplicar</button>
          <div className="modal-footer-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;