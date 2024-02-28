import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-around mt-2">
        <h4><img src={logo} alt="logo" height="30" />eTools Shop</h4>
        <div>
          <Link to="/">
            <button className="btn btn-outline-dark mx-2">Home</button>
          </Link>
          <Link to="/category/electricas">
            <button className="btn btn-outline-dark mx-2">Herramientas Electricas</button>
          </Link>
          <Link to="/category/organizador">
            <button className="btn btn-outline-dark mx-2">Organizadores</button>
          </Link>
          <Link to="/category/manuales">
            <button className="btn btn-outline-dark mx-2">Herramientas Manuales</button>
          </Link>
        </div>
        <Link to="/Cart">
          <CartWidget src={logo} />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
