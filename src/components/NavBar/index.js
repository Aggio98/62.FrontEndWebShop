import { NavLink } from "react-router-dom";
import "./style.css";
import { BsCart, BsPerson, BsHeart } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="big-box">
        <h2>
          <span>The</span>
          <span style={{ color: "white" }}>Shop</span>
        </h2>
        <NavLink to="/home" className="links">
          Home
        </NavLink>
        <NavLink to="/shop" className="links">
          Shop
        </NavLink>

        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="rightnav">
        <NavLink to="/login">
          <BsPerson />
        </NavLink>
        <BsCart />
        <NavLink to="/favorites">
          <BsHeart />
        </NavLink>
      </div>
    </div>
  );
};

export { NavBar };
