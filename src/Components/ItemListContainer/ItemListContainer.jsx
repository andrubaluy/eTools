import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Set loader in true
    setIsLoading(true);
    getProducts().then((data) => {      
      //Checking if the category is selected
      if (category) {
        let productFilter = data.filter( (product) => product.category === category );
        setProducts(productFilter);
      } else {
        setProducts(data);
      }
      //stop loading
      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {isLoading ? (
        <h1> Cargando productos...</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
