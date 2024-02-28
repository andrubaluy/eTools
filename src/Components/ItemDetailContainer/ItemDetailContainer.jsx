import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProduct(id)
    .then((result) => {
        setProduct(result);
        setIsLoading(false);
    })
    
    
  }, []);
  return (
  <>
    {isLoading ? <h1>Cargando Producto...</h1> : <ItemDetail {...product}/>}
  </>);
};
