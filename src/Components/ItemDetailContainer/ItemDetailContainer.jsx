import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductFromDB = (id) => {
    const productRef = doc(db, "Products", id)

    getDoc(productRef)
      .then(response => {
      const product = {
        id: response.id,
        ...response.data()
      }

      setProduct(product);
      setIsLoading(false);
    })
    
  }
  

  useEffect(() => {
    setIsLoading(true);
    getProductFromDB(id);
    
    
  }, []);
  return (
  <>
    {isLoading ? <h1>Cargando Producto...</h1> : <ItemDetail {...product}/>}
  </>);
};
