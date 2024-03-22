import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalValue, removeProduct, clearCart } = useContext(CartContext);

  const handleDeleteButton = (item) => {
    Swal.fire({
      icon: "question",
      title: `¿Estas seguro? Se va a eliminar: <br> ${item.name}  (${item.quantity}) `,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        removeProduct(item.id);
        Swal.fire({
          icon: "success",
          title: "Producto eliminado",
        });
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
        icon: "question",
        title: `¿Estas seguro? <br> Se va a vaciar el carrito `,
        showCancelButton: true,
        showConfirmButton: true,
      }).then((resp) => {
        if (resp.isConfirmed) {
            clearCart();
          Swal.fire({
            icon: "success",
            title: "Carrito Vacio",
          });
        }
      });
  }


  return (
    <div className="container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>El carrito esta vacio.</p>
      ) : (
        <div className="row">
          {cart.map((product) => (
            <div className="card mb-3" key={product.id}>
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={product.img}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      Precio: ${product.price.toFixed(2)}
                    </p>
                    <p className="card-text">Cantidad: {product.quantity}</p>
                    <p className="card-text">
                      <strong>Subtotal:</strong> ${product.subTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteButton(product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="container mb-5">
          <p>
            <strong>Total del carrito:</strong> ${totalValue.toFixed(2)}
          </p>
          <div className="row">
            <br />
            <span className="col-sm-2">
              <button className="btn btn-secondary" onClick={handleClearCart}>Vaciar Carrito</button>
            </span>
            <span className="col-sm-2"></span>
            <span className="col-sm-2"></span>
            <span className="col-sm-2"></span>
            <span className="col-sm-2"></span>
            <span className="col-sm-2">
              <Link to="/Checkout">
                <button className="btn btn-primary">Checkout</button>
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
