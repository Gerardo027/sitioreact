import React, { useState } from 'react';

const AppFrom=(props) => {

    const camposRegistro ={nombre:"", edad:"",genero:""}
    const [objeto , setobjeto] = useState(camposRegistro);

    const controlarEstadoCambio = (e) => {
    };
    
    const controlSubmit = (e) => {
        
    };
    return (
        <div style={{background:"orange"}}>
            Formulario AppForm.js
        </div>
    )
}

export default AppFrom