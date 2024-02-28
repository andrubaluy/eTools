import { Link } from "react-router-dom";
import cart from "./assets/cartImage.png";

export const CartWidget = () => {
  let cartSize = 0;
  return (
    <>
        <img src={cart} alt="cart-widget" height="30" />
        {cartSize}
    </>
  );
};

export default CartWidget;
