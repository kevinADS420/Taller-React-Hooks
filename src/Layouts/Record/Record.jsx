import React, { useState } from 'react';

export const Record = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        usuario: '',
        correo: '',
        telefono: '',
        id: ''
    });

    const [personas, setPersonas] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value
        });
    };

    const handleSubmit = (value) => {
        value.preventDefault();
        const existe = personas.some(persona => persona.id === formData.id);
        if (existe) {
            alert('El registro con este ID ya existe.');
        } else {
            setPersonas([...personas, formData]);
            alert('Persona registrada con éxito.');
            setFormData({ nombre: '', usuario: '', correo: '', telefono: '', id: '' });
        }
    };

    return (
        <>
            <section className='section'> 
                <div className='container-registro'>
                    <h1>Registro de Persona</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre: </label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Usuario: </label>
                            <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label>Teléfono: </label>
                            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Correo: </label>
                            <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>ID: </label>
                            <input type="text" name="id" value={formData.id} onChange={handleChange} required />
                        </div>
                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </section>
        </>
    );
}


