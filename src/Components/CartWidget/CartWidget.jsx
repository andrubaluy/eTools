import { Link } from "react-router-dom";
import cartImage from "./assets/cartImage.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  let cartSize = 0;
  const { cart,totalItems } = useContext( CartContext);
  return (
    <>
        <img src={cartImage} alt="Cart" style={{ width: '30px', marginRight: '5px' }} /> 
        <span className="badge bg-secondary">{totalItems}</span>
    </>
  );
};

export default CartWidget;
