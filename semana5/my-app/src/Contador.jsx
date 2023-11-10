import React, { useState } from 'react';

const Contador = () => {
    const [contador, setcontador] = useState(0)

    const aumentarContador =()=>{
        setcontador(contador+1);
    }

    const disminuirContador =()=>{
        if(contador>0){
            setcontador(contador-1);
        }
    }
  return (
    <div>
        <h2>{contador}</h2>
        <button onClick={aumentarContador}>Haz clic aqui para aumentar</button>
        <button onClick={disminuirContador}>Haz clic aqui para disminuir</button>    
    </div>
  )
}

export default Contador