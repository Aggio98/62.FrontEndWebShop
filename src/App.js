import { Route, Routes } from "react-router-dom";
import { NavBar, Banner, Footer } from "./components";
import {
  ShopPage,
  HomePage,
  DetailsPage,
  LoginPage,
  SignUpPage,
} from "./pages";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
