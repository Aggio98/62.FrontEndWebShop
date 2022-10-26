import { NavLink } from "react-router-dom";
import "./style.css";

function ProductCard({ id, title, price, description, rating, img }) {
  return (
    <div className="card">
      <h3>
        <NavLink to={`/details/${id}`}>{title}</NavLink>
      </h3>
      <img src={img} alt={title} />
      <p>{price}</p>
      <div>{rating}</div>
      <p>{description}</p>
    </div>
  );
}
export { ProductCard };
