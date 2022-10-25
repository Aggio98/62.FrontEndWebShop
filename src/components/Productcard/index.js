import React from "react";

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
    <div>
      <h3>{title}</h3>
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
