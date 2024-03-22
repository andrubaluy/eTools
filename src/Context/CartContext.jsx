import { createContext, useEffect, useState } from "react";

//Creamos el contexto
export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  //Add product

  const addProduct = (item, quantity) => {
    //Add product to cart

    //Copy cart to new product
    const cartCopy = [...cart];

    //Check item index. -1 not in cart, otherwise item present
    const index = cartCopy.findIndex((product) => product.id === item.id);

    if (index != -1) {
      //Item present, update quantity and subtotal
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      // Item not in cart

      // new cart object
      const newItem = {
        ...item,
        quantity,
        subTotal: item.price * quantity,
      };

      // copy current cart and add new item
      setCart([...cart, newItem]);
    }
  };

  const removeProduct = (id) => {
    // Remove product from cart
    const cartFiltered = cart.filter((item) => item.id !== id);
    setCart(cartFiltered);
  };

  const clearCart = () => {
    //set cart as empty
    setCart([]);
  };

  const handleTotalItems = () => {
    const sumTotalItems = cart.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
    setTotalItems(sumTotalItems);
  };

  const handleTotalValue = () => {
    const sumTotalValue = cart.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    );
    setTotalValue(sumTotalValue);
  };

  useEffect(() => {
    handleTotalItems();
    handleTotalValue();
  }, [cart]);

  const objectValues = {
    cart,
    addProduct,
    removeProduct,
    clearCart,
    totalItems,
    totalValue,
  };

  return (
    <CartContext.Provider value={objectValues}>{children}</CartContext.Provider>
  );
};
