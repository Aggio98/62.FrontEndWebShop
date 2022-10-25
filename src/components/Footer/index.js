import "./style.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer () {
	return (
		<div className="footercontainer">
			<div>
				<h2>
					<span style={{ color: "white" }}>The</span>
					<span style={{ color: "#8568ff" }}>Shop</span>
				</h2>
			</div>
			<div style={{ color: "white" }}>
				Categories
				<div className="footerText">
					<p>Laptops & Computers</p>
					<p>Cameras & Photography</p>
					<p>Smart Phones & Tablets</p>
					<p>Video Games & Consoles</p>
					<p>Waterproof Headphones</p>
				</div>
			</div>

			<div style={{ color: "white" }}>
				My account
				<div className="footerText">
					<p>My Account</p>
					<p>Discount</p>
					<p>Returns</p>
					<p>Order History</p>
					<p>Order Tracking</p>
				</div>
			</div>

			<div style={{ color: "white" }}>
				Follow Us
				<div className="spacing">
					<BsFacebook />
					<BsInstagram />
					<BsTwitter />
				</div>
			</div>
		</div>
	);
}

export {Footer}