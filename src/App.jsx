import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { Cart } from "./Components/Cart/Cart";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./Context/CartContext";
import { Checkout } from "./Components/Checkout/Checkout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:category" element={<ItemListContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
