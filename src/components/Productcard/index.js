import React from "react";

function Productcard({ title, price, description, rating, img }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title} width="100px" heigh="150px" />
      <p>{price}</p>
      <div>{rating}</div>
      <p>{description}</p>
    </div>
  );
}

export { Productcard };
