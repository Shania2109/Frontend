import React from "react";

const MascotasDetalle = (props) =>{
    return(
        <div className="row">
          <div className="col s12 m6">
          <div className="card">
          <div className="card-image">
          <img src={"Mascotas.png"}/>
          <span className="card-title">{ props.mascotica.nombre} 
          </span>
          
        </div>
        
        <div className="card-content">
          
        
        <p> Tipo: {props.mascotica.Tipo} </p>
        <p> Raza: { props.mascotica.Raza} </p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default MascotasDetalle