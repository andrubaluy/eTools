import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { Cart } from "./Components/Cart/Cart";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  let helloWorld = "Hello World";
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:category" element={<ItemListContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
