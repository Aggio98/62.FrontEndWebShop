import React from "react";
import { NavLink } from "react-router-dom";
import { Rating } from "../Rating";
import { BsCart, BsHeart, BsHeartFill } from "react-icons/bs";
import "./style.css";
function Productcard({
  id,
  title,
  price,
  description,
  rating,
  img,
  addToFaviourte,
  favProducts,
}) {
  return (
    <div className="card">
      <div className="product-card-left-side">
        <NavLink className="link" to={`/details/${id}`}>
          <img src={img} alt={title} width="100px" heigh="150px" />
        </NavLink>
      </div>

      <div className="product-card-right-side">
        <div className="product-card-details">
          <h4 className="product-card-title">{title}</h4>
          <div className="product-info-and-action">
            <p>{price}</p>
            <Rating rating={rating} />
            <div className="product-card-icons">
              <div
                className="fav-button"
                onClick={() => {
                  addToFaviourte(id);
                }}
              >
                {favProducts.includes(id) ? <BsHeartFill /> : <BsHeart />}
              </div>
              <div className="shopping-cart">
                <BsCart />
              </div>
            </div>
          </div>
        </div>

        <p className="product-card-body">{description}</p>
      </div>
    </div>
  );
}

export { Productcard };
