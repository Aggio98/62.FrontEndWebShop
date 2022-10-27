import React from "react";
import { NavLink } from "react-router-dom";
function Productcard({
  id,
  title,
  price,
  description,
  rating,
  img,
  favourite,
  addToFaviourte,
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
        }}
      >
        {favourite ? "my favourite" : "add to favourite"}
      </button>
    </div>
  );
}

export { Productcard };
