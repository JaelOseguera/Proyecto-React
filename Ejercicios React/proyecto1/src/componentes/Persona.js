//seccion de importacion de componentes
import React from "react";

export default function Persona(props){

    console.log(props);

    return(
        <div>
            <h2>Datos Personales</h2>
            <table>
                <tbody>
                    <tr> <td>Nombre:      </td><td> {props.personainfo.nombre}       </td> </tr>
                    <tr> <td>Apellidos:   </td><td> {props.personainfo.apellido}     </td> </tr>
                    <tr> <td>edad:        </td><td> {props.personainfo.edad}         </td> </tr>
                    <tr> <td>nacionalidad:</td><td> {props.personainfo.nacionalidad} </td> </tr>
                    <tr> <td>genero:      </td><td> {props.personainfo.genero}       </td> </tr>
                    <tr> <td>
                        <button onclick={ () => props.fnsaludar(props.personainfo.nombre) } >Saludar</button>      
                    </td> </tr>
                </tbody>
            </table>
        </div>
    )
}

export function Intereses(){

    return(
<div>
<h2>Estos son intereses</h2>

</div>

    )
}