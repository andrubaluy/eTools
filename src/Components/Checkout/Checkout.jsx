import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const baseData = {
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        cardholderName: '',
        expiryDate: '',
        cvv: '',
        shipping:'express',
        phone: 0
    }

    const [formData, setFormData] = useState(baseData);

    const {cart, totalValue, clearCart, totalItems} = useContext(CartContext);

    const [currentStep, setCurrentStep] = useState(1);
    const [shippingOption, setShippingOption] = useState('express');
    const [orderId, setOrderId] = useState(null);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        //Go to next step
        setCurrentStep(currentStep + 1 );
    };

    
    const handleSubmitShipping = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep + 1 );
        
    };

    const handleSubmitPayment = async (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "question",
            title: `¿Esta seguro que desea proceder con el pago? <br /> Se cobraran $${totalValue.toFixed(2)} en la tarjeta: ****${formData.cardNumber.substring(formData.cardNumber.length - 4)}`,
            showCancelButton: true,
            showConfirmButton: true,
          }).then( async (resp) => {
            if (resp.isConfirmed) {
              

         
            setCurrentStep(currentStep + 1 );

            // Handle form submission
            const newOrder = {
                buyer: formData,
                items: cart,
                totalValue,
                date: serverTimestamp() 
            };

            console.log(newOrder);
        
            // Add order to firebase
            const order = await addDoc(collection(db, "Orders"), newOrder);
        
            // Empty form
            setFormData(baseData);
                
            // Clear cart
            clearCart();
        
            // Setear el orderId
            setOrderId(order.id);

        }
    });
    };


    const handleShippingChange = (e) => {
        setShippingOption(e.target.value);
        setFormData({
            ...formData,
            shipping: e.target.value
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep - 1 );
    }

    

    if(orderId) {
        Swal.fire({
            icon: "success",
            title: "Gracias por su compra!!" ,
            showConfirmButton: true
          })
        return <h3>Numero de orden: {orderId}</h3>
    }
    
    if(totalItems === 0) {
        return <>
            <h3>No hay items en el carrito</h3>
            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
        </>
    }
  return (
    <> 
    <h2>Step {currentStep} de 4</h2>
    <div className="container" hidden={currentStep !== 1}>
            <h2>Informacion personal</h2>
            <form onSubmit={handleSubmitOrder}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input type="number" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Direccion y numero de puerta</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">Ciudad</label>
                        <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="postalCode" className="form-label">Codigo Postal</label>
                        <input type="text" className="form-control" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Continuar</button>
            </form>
        </div>
        <div className="container" hidden={currentStep !== 2}>
            <h2>Tipo de Envio (sin costo)</h2>
            <form onSubmit={handleSubmitShipping}>
                <div className="mb-3">
                    <label className="form-label">Select Shipping Option:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="shippingOption" id="standardShipping" value="standard" checked={shippingOption === 'standard'} onChange={handleShippingChange} />
                        <label className="form-check-label" htmlFor="standardShipping">
                            Estandar (5 a 15 dias habiles)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="shippingOption" id="expressShipping" value="express" checked={shippingOption === 'express'} onChange={handleShippingChange} />
                        <label className="form-check-label" htmlFor="expressShipping">
                            Express Shipping (48 a 72 Horas)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="shippingOption" id="overnightShipping" value="overnight" checked={shippingOption === 'overnight'} onChange={handleShippingChange} />
                        <label className="form-check-label" htmlFor="overnightShipping">
                            Overnight Shipping (24 Horas)
                        </label>
                    </div>
                </div>
                <button type="button" className="btn btn-secondary me-sm-4" onClick={handleBack}>Atras</button>
                <button type="submit" className="btn btn-primary">Ir al Pago</button>
            </form>
        </div>
        <div className="container"  hidden={currentStep !== 3}>
            <h2>Forma de Pago</h2>
            <form onSubmit={handleSubmitPayment}>
                <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">Numero de Tarjeta</label>
                    <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardholderName" className="form-label">Nombre del titular</label>
                    <input type="text" className="form-control" id="cardholderName" name="cardholderName" value={formData.cardholderName} onChange={handleChange} required />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="expiryDate" className="form-label">Fecha de Vencimiento</label>
                        <input type="text" className="form-control" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cvv" className="form-label">Codigo de Seguridad</label>
                        <input type="text" className="form-control" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                    </div>
                </div>
                <button type="button" className="btn btn-secondary me-sm-4" onClick={handleBack}>Atras</button>
                <button type="submit" className="btn btn-primary">Confirmar compra</button>
            </form>
        </div>
        <div className="container"  hidden={currentStep !== 4}>
            <h2>Procesando pago...</h2>
            <p>Por favor espere mientras se procesa su pago.</p>
        </div>
        </>
  )
}
