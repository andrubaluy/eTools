import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedProducts } from "../../utils/seedProducts";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = ( category ) => {
    
    //Reference to our collection from the database
    // const myProducts = category
    //   ? collection(db, "Products", where("category", "==", category))
    //   : collection(db, "Products");

    const myProducts =  collection(db, "Products");
    //Get documents from data base
    getDocs(myProducts).then((response) => {
      // Get docuemnts from firebase
      const prodList = response.docs.map((doc) => {
        //convert doc to readable object
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });
      //Set products to our state ( similar to our setProducts when bringing them from Async Mock)
      setProducts(prodList);
      //Products loaded an ready to show. Hide loader.
      setIsLoading(false);
    });
  };

  useEffect(() => {
    //Set loader
    setIsLoading(true);
    getProductsDB(category);
    //! usar una sola vez y borrar la funcion de aca
    //  seedProducts();    
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
