import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export const Modal = ({onClose, onApply, onCancel, title,children}) => {

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

  return (
    <>
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

    </>
  )
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

Modal.defaultProps = {
  title: 'Confirmación',
  children: '<p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".</p><p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".</p>'
  
}