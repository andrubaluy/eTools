import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export const Cart = () => {

  const { cart } = useContext( CartContext );

  return (
    <h1>Cart</h1>
  )
}
