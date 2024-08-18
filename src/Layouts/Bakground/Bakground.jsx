import React, { useState } from 'react';
import './Bakground.css'

export const Bakground = () => {

  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const generarColorAleatorio = () => {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(color);
  };

  return (
    
    <div className='card' style={{ backgroundColor: backgroundColor}}>
      <button className='button1' onClick={generarColorAleatorio} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generar Color Aleatorio
      </button>
    </div>
  );
}
export default Bakground;