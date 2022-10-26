import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NavBar, Banner, Footer } from "./components";
import {
  ShopPage,
  HomePage,
  DetailsPage,
  SignupPage,
  LoginPage,
} from "./pages";

function App() {
  const sendToken = (userToken) => {
    if (!userToken) {
      console.log("no token received yet");
    } else {
      setToken(userToken);
      console.log("this is my user token", token);
    }
  };
  const [token, setToken] = useState("");
  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage sendToken={sendToken} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
