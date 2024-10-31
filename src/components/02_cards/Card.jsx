import { useState } from "react"
import "../02_cards/card.css"

export const Card = ({name, image, description, price, handleAddProduct, handleRemoveProduct}) => {
    const [added, setAdded] = useState(false)
    
    const addButton =()=>{
      handleAddProduct();
      setAdded(true);
    };
    const removeButton =()=>{
      handleRemoveProduct();
      setAdded(false);
    };

  return (
    <>
    <div className="tarjeta">
        <img src={image} alt={name} className="tarjeta-imagen"/>
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{name}</h3>
            <p className="tarjeta-descripcion">{description}</p>
            <p className="tarjeta-precio">{price}</p>
        
            {added ?<button type="button" className="boton-quitar" onClick={removeButton}>Quitar</button> 
            :<button type="button" className="boton-agregar" onClick={addButton}>Agregar</button> }
        </div>
    </div>
    </>
  )
}
