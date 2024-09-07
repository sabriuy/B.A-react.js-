import React from "react";
import '../imagenes/img productos/aluminio.jpg'
import '../imagenes/img productos/chapa.jpg'

function Productos (props){
   
    return (
       <div className="producto">
          <img className="producto-imagen" src={require(`../imagenes/img productos/${props.imagen}.jpg`)} />
          <p className="producto-titulo">{props.nombre}</p>
            <h2 className="precio">{props.precio}</h2>
            <button className="producto-ver">Agregar al carrito</button>
       </div> 
    )
}

export default Productos