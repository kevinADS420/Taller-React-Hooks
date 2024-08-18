import React, { useState } from "react";
import './Init.css'

export const Init = () => {
        const [inputName, setInputName] = useState('');
        const [name, setName] = useState('Usuario');
        const handlesetName = () => { setName(inputName) };


    return (
        <>
        <section className="section">
            <div className="Container">
                <div>
                    <h3>Ingresa tu nombre completo</h3>
                </div>
                <div className="container-input">
                    <input className="input" onChange={(event) => setInputName(event.target.value)} type="text" />
                </div>
                <div className="container-button">
                    <button className="button" onClick={handlesetName}> Saludar </button>
                </div>
                <div className="Container-title">
                    <h1> Bienvenido {name}</h1>
                </div>
            </div>
        </section>
        </>
    )
}