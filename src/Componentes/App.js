import React from 'react';
import './App.css';
import axios from 'axios';
import MascotasLista from './Mascotas/MascotasLista';
import MascotasDetalle from './Mascotas/MascotasDetalle';
import MascotasForm from './Mascotas/MascotasForm';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mascotas : [],
      mascotaActual : {}
    }
    this.actualizarMascota = this.actualizarMascota.bind(this)
  }

  componentDidMount(){
    const url = 'http://localhost:4000/mascotas'
    axios.get(url)
    .then((respuesta)=>{
      //actualizar estado
      this.setState({
        mascotas: respuesta.data
      })
      this.setState({
        mascotaActual: respuesta.data[0]
      })
    })
    .catch((error=>{console.log(error)}))
  }

  //Asignar el estado:Mascotas Actual
  actualizarMascota(mascota){
    this.setState(
      {
        mascotaActual:mascota
      }
    )
  }

  borrarMascota({_id:id}){
    console.log(id);
    const url=`http://localhost:4000/mascotas/${id}`;
       axios.delete(url)
       .then( (respuesta)=> {   
         this.setState({
               mascotas: respuesta.data
         })
         
     })
         .catch( (error) => {console.log(error)}  )
  };
  

  render(){
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">
        <nav>
       <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Mascota CRM</a>
      </div>
      </nav>
        </div>
      </div>
      <div className="row">
      <div className="col s3">
         <MascotasLista 
          lista={ this.state.mascotas }
          actualizarMascota={ this.actualizarMascota } borrarMascota = {this.borrarMascota} />
        </div>
      <div className="col s9">
          <MascotasDetalle mascotica= { this.state.mascotaActual } />
        </div>
      </div>
      <div className="row">
      <div className="col s12">
          <MascotasForm />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
