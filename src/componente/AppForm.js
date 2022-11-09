import{collection, getDocs, query, doc, deleteDoc, where, addDoc, } from "firebase/firestore";
//import{getDoc, addDocs, updatedoc, setDoc, increment, } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firebase, { db } from './componentes/firebase';

const AppFrom=(props) => {

    const camposRegistro ={nombre:"", edad:"",genero:""}
    const [objeto , setobjeto] = useState(camposRegistro);

    const controlarEstadoCambio = (e) => {
        const{name, value} = e.target;
        setobjeto({...objeto, [name]:value });
    };
    
    const controlSubmit = (e) => {
        e.preventDefault();
        ////////////registar//////////////////
        if(props.idActual === "")
            //////console.log(props.idActual);
            if(validarForm()){
                addDoc(collection(db, 'persona'), objeto);
                console.log('Se guardo...');
                props.fnRead
            }else{
                console.log('No se guardo...');
            }
            setObjeto(camposRegisto);
    };
    ////////////////Validacion///////////////////
    const validarform = () => {
        if (objeto.nombre==="" || /^\s+$/.test(objeto.nombre)){
            alert("Escriba nombres...");
            return false;
        }
        return true;
    }
    ///////OBTENER registro por idActual/////////////////
    
    const obtenerDatosPorId = async(xId) => {
    
    };
    //console.log(objeto);

    return (
        <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
        <h1>Formulario AppForm.js</h1>
        <form onSubmit={handleSubmit}>
            <imput type="text" name="nombre" placeholder="Nombre..."
            onchange={handleStatusChange} value={objeto.nombre}  /> <br/>

            <imput type="text" name="edad" placeholder="edad..."
            onchange={handleStatusChange} value={objeto.edad}  /> <br/>

            <imput type="text" name="genero" placeholder="genero..."
            onchange={handleStatusChange} value={objeto.genero}  /> <br/>

            <button>
                {props.idActual === ""? "Guardar" : "Actualizar"}
            </button>
        </form>
        </div>
    )
}

export default AppFrom;