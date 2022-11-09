import{collection, getDocs, query, doc, deleteDoc, where, } from "firebase/firestore";
//import{getDoc, addDocs, updatedoc, setDoc, increment, } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firebase, { db } from './componentes/firebase';
import AppFrom from "./componente/AppForm";

function App () {
  ////////// READ ////////////
  const [idActual, setIdActual] = useState('');
  const [docsBD, setdocsBD] = useState([]);
//  const [orden, setorden] = useState();
//  const i =1 ;

////////// LECTURA A BD ////////////
const fnRead = async() =>{
//  console.log("Lectura a BD");
useEffect( () => {
},[idActual])
}

////////// LECTURA A BD ////////////
const fnDelete = async(xId) =>{
  console.log("Eliminar un registro");
}


    return (
        <div style={{width:"350 px", background:"greenyellow", padding:"10px"}}>
          <h1>sitiocopia2 (App.js)</h1>
        <AppFrom {...{idActual, setIdActual, fnRead}}/>
        
        </div>
    );
}

export default AppFrom;