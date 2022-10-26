import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar, Banner, Footer } from "./components";
import {
  ShopPage,
  HomePage,
  DetailsPage,
  SignupPage,
  LoginPage,
  FaviouratePage,
} from "./pages";

function App() {
  //get the token from login component throung lifeup function

  const [token, setToken] = useState("");

  const sendToken = (userToken) => {
    if (!userToken) {
      console.log("no token received yet");
    } else {
      setToken(userToken);
      console.log("this is my user token", token);
    }
  };

  // get product data on app level

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/products");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // call back function to add faviroute to the data

  const addToFaviourte = (id) => {
    console.log("this is id", id);
    const faviourteProducts = products.map((product) => {
      if (product.id === id) {
        if (product.favourite === true) {
          return { ...product, favourite: false };
        } else {
          return { ...product, favourite: true };
        }
      } else {
        return product;
      }
    });
    setProducts(faviourteProducts);
  };

  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/shop"
          element={
            <ShopPage addToFaviourte={addToFaviourte} products={products} />
          }
        />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage sendToken={sendToken} />} />
        <Route path="/favorites" element={<FaviouratePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
