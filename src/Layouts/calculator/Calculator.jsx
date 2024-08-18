import React, { useState } from 'react';
import './Calculadora.css'

export const Calculator = () => {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState()
    const [resultado, setResultado] = useState()

    const sumar = () => {
        setResultado(parseFloat(num1) + parseFloat(num2) )
    }

    const restar = () => {
        setResultado(parseFloat(num1) - parseFloat(num2) )
    }

    const multiplicar = () => {
        setResultado(parseFloat(num1) * parseFloat(num2) )
    }

    const dividir = () => {
        setResultado(parseFloat(num1) / parseFloat(num2) )
    }

    return (
        <>
            <section className='section-calculadora'>
            <div className='container-operaciones'>
                <h1> Calculadora </h1>
                <div className='container-inputs'>
                    <p>Ingresa los numero a operar</p>
                    <div className='inputs'>
                        <input className='input' type="number" value={num1} onChange={(value) => setNum1(value. target.value) } name="" id="1" />
                        <input  className='input' type="number" value={num2} onChange={(value) => setNum2(value.    target.value) } name="" id="2" />
                    </div>
                </div>
                <div className='operaciones'>
                    <button className='button' onClick={sumar}> sumar </button>
                    <button className='button' onClick={restar}> Restar </button>
                    <button className='button' onClick={multiplicar} > Multiplicar </button>
                    <button className='button' onClick={dividir}> Dividir </button>
                </div>
                <div className='container-resultado'>
                    <h2> El resultado es: {resultado} </h2>
                </div>
            </div>
            </section>
        </>
    );
};

export default Calculator;