import React from "react";

const MascotasLista = ( props ) =>{
    return(
    <ul className="collection with-header">
        <li className="collection-header #e57373 red lighten-2 "><h5 className="white-text text-darken-2">Mascotas<i className="small material-icons">pets</i></h5></li> 
        {
            props.lista.map( (elemento) => {
                return (
                    <li
                    className="collection-item "
                    key={ elemento._id}
                    onClick= { props.actualizarMascota.bind(this, elemento)  } 
                    >
                    { elemento.nombre} 

                    <a href="#!" className="secondary-content ">
                        <i class="material-icons "><box-icon name='info-circle' type='solid'onClick={ props.actualizarMascota.bind(this , elemento   ) } ><i className="material-icons">brush</i></box-icon ></i>
                        
                        <box-icon name='trash'onClick={ props.borrarMascota.bind(this,elemento)}><i className="material-icons">delete</i></box-icon></a>
                    </li>

                )
            })
        }
    </ul>
    
            
    )
}

export default MascotasLista