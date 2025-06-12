import { useState, useEffect } from "react";
import SingleProductPage from "./SingleProductPage";
import { getProducts } from "../store/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

// const testProduct = [
//   {
//   id: 1,
//   title: "Lorem ipsum dolor sit amet consectetur",
//   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur blanditiis quaerat iste. Doloribus fugit consectetur",
//   price: 250.00,
//   image: "http://dummy.test.img"
//   },
//   {
//   id: 2,
//   title: "Lorem ipsum dolor sit amet consectetur",
//   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur blanditiis quaerat iste. Doloribus fugit consectetur",
//   price: 250.00,
//   image: "http://dummy.test.img"
//   },
//   {
//   id: 3,
//   title: "Lorem ipsum dolor sit amet consectetur",
//   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur blanditiis quaerat iste. Doloribus fugit consectetur",
//   price: 250.00,
//   image: "http://dummy.test.img"
//   },
//   {
//   id: 4,
//   title: "Lorem ipsum dolor sit amet consectetur",
//   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur blanditiis quaerat iste. Doloribus fugit consectetur",
//   price: 250.00,
//   image: "http://dummy.test.img"
//   },
//   {
//   id: 5,
//   title: "Lorem ipsum dolor sit amet consectetur",
//   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur blanditiis quaerat iste. Doloribus fugit consectetur",
//   price: 250.00,
//   image: "http://dummy.test.img"
//   },
// ]

const ProductPage = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  
  useEffect(() => {
    async function fetchProducts() {
      try{
        dispatch(getProducts());
        // const allProducts = await fetch('https://fakestoreapi.com/products');
        // const data = await allProducts.json();
        // getProducts(data);
      } catch(error) {
        console.log("Failed to load data", error);
      }
    }
    fetchProducts();
  }, [])

  return (
    <div className="flex flex-row flex-wrap items-center gap-8 p-4 m-4">
      {
        products.map((item) => (
          <SingleProductPage key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default ProductPage