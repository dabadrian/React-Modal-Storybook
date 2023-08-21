import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal'; 

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultText, setResultText] = useState(""); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleApply = () => {

    setResultText("Aceptado");
    closeModal();
  };

  const handleCancel = () => {
    setResultText("Cancelado");
    closeModal();
  };

  return (
    <div >
      <span>Componente personalizado tipo Modal en React:</span>&nbsp;
      <button onClick={openModal}>Abrir Modal</button>
      {isModalOpen && (
        <Modal
          title="Confirmación"
          onClose={closeModal}
          onApply={handleApply}
          onCancel={handleCancel}
        >
          <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".</p>
          <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".</p>
        </Modal>
      )}
      
      <h3>Resultado: {resultText}</h3>  
    </div>
  );
};

export default App;