import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function Productcard({
  id,
  title,
  price,
  description,
  rating,
  img,
  favourite,
  addToFaviourte,
  cartQuestion,
  addToCart,
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h3>
        <NavLink to={`/details/${id}`}>{title}</NavLink>
      </h3>

      <img src={img} alt={title} width="100px" heigh="150px" />
      <p>{price}</p>
      <div>{rating}</div>
      <p>{description}</p>
      <button
        onClick={() => {
          addToFaviourte(id);
          // console.log(typeof addToFaviourte);
        }}
      >
        {favourite ? "my favourite" : "add to favourite"}
      </button>
      <button
        onClick={() => {
          addToCart(id);
          console.log(addToCart);
        }}
      >
        {cartQuestion ? "In The Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export { Productcard };
