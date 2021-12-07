import React from "react";
import axios from "axios";

class MascotasForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
        }

        submitNuevaMascota( event ){
            event.preventDefault();
            //hacer la peticios via axios
            axios.post('http://localhost:4000/mascotas' , {
                nombre: this.refs.nombre.value,
                Tipo: this.refs.Tipo.value,
                Raza: this.refs.Raza.value
            }
            ).then( respuesta => console.log(respuesta.data) )
            .catch( error => console.log(error))
        }

    render(){
        return(
      <div className="row">
          <h4 className="center">Nueva Mascota</h4>
         <form className="col s12"  onSubmit={this.submitNuevaMascota.bind(this) }>
            <div className="row">
            <div className="input-field col s6">
            <i className="material-icons prefix">pets</i>
            <input id="nombre" ref="nombre" type="text" />
            <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field col s6">
            <input id="Tipo" ref="Tipo"  type="text" />
            <label htmlFor="Tipo">Tipo</label>
        </div>
    </div>
    <div className="input-field col s6">
            <i className="material-icons prefix">pets</i>
            <input id="Raza" ref="Raza" type="text" />
            <label htmlFor="Raza">Raza</label>
        </div>
        <div className="input-field col s6">
             <button className="btn-floating btn-large waves-effect waves-light red" type="submit" name="action"><i className="material-icons">send</i></button>
       </div>
        </form>
      </div>
      
        )
    }
}

export default MascotasForm