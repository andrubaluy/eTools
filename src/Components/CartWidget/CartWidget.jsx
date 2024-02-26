import cart from './assets/cartImage.png'

export const CartWidget = () => {
  let cartSize = 0
  return (
    <div>
        <img src={cart} alt='cart-widget' height="30"/>
        {cartSize}
    </div>
  )
}

export default CartWidget