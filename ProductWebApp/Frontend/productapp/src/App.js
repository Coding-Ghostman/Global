import "./App.css";
// import Header from './components/header';
import Product from "./components/Product";
import { useState, useEffect } from "react";
import Content from "./components/Content";

function App() {
   const [Products, setProducts] = useState([]);

   useEffect(() => {
      fetch("http://127.0.0.1:5000/listProduct")
         .then((res) => res.json())
         //  .then(data=>console.log(data))
         .then((data) => setProducts(data));
   }, []);

   const listProducts = () => {
      fetch("http://127.0.0.1:5000/listProduct")
         .then((res) => res.json())
         //  .then(data=>console.log(data))
         .then((data) => setProducts(data));
   };

   const saveProductHandler = (name, description, category, supplier, price) => {
      let emp = { name: name, desription: description, category: category, supplier: supplier, price: price };
      const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(emp),
      };
      console.log("body ##", requestOptions.body);

      fetch("http://127.0.0.1:5000/addProduct", requestOptions)
         .then((response) => response.json())
         .then((data) => setProducts([...Products, data]));
   };

   return (
      <div className="App">
         <Product saveProduct={saveProductHandler} />
         <Content listProducts={Products} />
      </div>
   );
}

export default App;
