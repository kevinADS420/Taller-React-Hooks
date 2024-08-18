import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <>
            <div className='Container-Header'>
                <div>
                    <h2 className='Title'>
                        Practicando Hooks 
                    </h2>
                </div>
                <div className='Container-list'>
                    <ul className='List'>
                        <Link className='Menu' to='/'> Inicio </Link>
                        <Link className= "Menu" to='/calculator'>Calculadora</Link>
                        <Link className= "Menu" to='/Bakground'>Bakground Aleatorio</Link>
                        <Link className= "Menu" to='/record'>Registro</Link>
                        <Link className='Menu' to='/ListaTareas'> Lista Tareas</Link>
                    </ul>
                </div>
            </div>
        </>
    );
};