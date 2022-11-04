import { useState } from "react";
import AppFrom from "./componente/AppForm";

function App () {
  ////////// READ ////////////
  const [idActual, setIdActual] = useState('');
  const [docsBD, setdocsBD] = useState([]);
//  const [orden, setorden] = useState();
//  const i =1 ;

////////// LECTURA A BD ////////////
const fnRead = () =>{
  console.log("Lectura a BD");
}

////////// LECTURA A BD ////////////
const fnDelete = () =>{
  console.log("Eliminar un registro");
}


    return (
        <div style={{background:"greenyellow" , width:"350px"}}>
        <AppFrom {...{idActual, setIdActual, fnRead}}/>
        </div>
    );
}

export default AppFrom