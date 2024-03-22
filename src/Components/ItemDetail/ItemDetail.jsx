import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {

  const { addProduct } = useContext( CartContext );

  const onAdd = ( quantity ) => { 
    
    const product = {
      id,
      price,
      name,
      img
    }
    addProduct( product , quantity);

    Swal.fire({
      icon: "success",
      title: "Producto agregado exitosamente al carrito",
      showConfirmButton: false,
      timer: 1500,
      position: "top-end"
    })
   }

  return (
    <div className="border ">
      <div className="card w-25 mx-auto">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" width="300px"/>
          <p className="card-text"> {description} </p>
          <p>Precio: $ {price.toFixed(2)} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}
