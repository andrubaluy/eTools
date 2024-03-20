import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {

  return (
    <div className="border ">
      <div className="card w-25 mx-auto">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" width="300px"/>
          <p className="card-text"> {description} </p>
          <p>Precio: $ {price} </p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  )
}
