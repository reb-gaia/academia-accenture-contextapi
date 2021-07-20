import React from 'react';
import { useToggle } from '../context/ToggleProvider';


function ComponenteFilho() {
  const { estadoFilho, handleClickEstadoFilho } = useToggle();

  return <div>
    <h1>Componente Filho</h1>
      <button onClick={handleClickEstadoFilho}>Clique aqui</button>
      { estadoFilho && <p>aberto</p>}
  </div>
}

export default ComponenteFilho;