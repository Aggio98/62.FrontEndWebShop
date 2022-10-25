import { NavLink } from "react-router-dom"
import "./style.css"
import { BsCart, BsPerson, BsHeart } from "react-icons/bs";

const NavBar = ()=>{
    return(
        <div className='navbar-container'> 
            <div className="big-box">
                <h2>
					<span>The</span>
					<span style={{ color: "white" }}>Shop</span>
				</h2>
                    <NavLink to="/home" className='links' >Home</NavLink>
                    <NavLink to="/shop" className='links' >Shop</NavLink>
                    <NavLink to="/details/:id" className='links' >Details</NavLink>
                    <form>
                        <input type="text"/>
                        <button type="submit">Search</button>
                    </form>
            </div>
            <div className="rightnav">
                <BsPerson />
                <BsCart />
                <BsHeart />
            </div>
        </div>
    )
}

export { NavBar }