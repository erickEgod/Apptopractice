import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext"

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

  const productsFetch= async()=>{
    try {
      const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    } catch (error) {
        console.error("Ha ocurrido un error:", error);
    }
  };

  useEffect(()=>{
    productsFetch();
  },[]);

  

  return (
    <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
  )
}
