import React, { useState } from 'react';
import './ListaTareas.css'

export const ListaTareas = () => {
    const [tarea, setTarea] = useState({ nombre: '', descripcion: '' });
    const [tareas, setTareas] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTarea({ ...tarea, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea.nombre && tarea.descripcion) {
            setTareas([...tareas, tarea]);
            setTarea({ nombre: '', descripcion: '' });
        } else {
            alert('Por favor, completa ambos campos.');
        }
    };

    return (
        <>
            <section className='section'>
                <div className='Container'>
                    <h1>Registro de Tareas</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre de la tarea:</label>
                            <input type="text" name="nombre" value={tarea.nombre} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Descripción de la tarea:</label>
                            <textarea name="descripcion" value={tarea.descripcion} onChange={handleChange} required />
                        </div>
                        <button type="submit">Guardar Tarea</button>
                    </form>

                    <h2>Lista de Tareas</h2>
                    <ul>
                        {tareas.map((t, index) => (
                            <li key={index}>
                                <strong>{t.nombre}:</strong> {t.descripcion}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}


