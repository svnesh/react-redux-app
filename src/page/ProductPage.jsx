import { useState, useEffect } from "react";

const ProductPage = () => {

  const [products, getProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try{
        const allProducts = await fetch('https://fakestoreapi.com/products');
        const data = await allProducts.json();
        getProducts(data);
      } catch(error) {
        console.log("Failed to load data", error);
      }
    }
    fetchProducts();
  }, [])

  return (
    <div>{JSON.stringify(products)}</div>
  )
}

export default ProductPage