import "./style.css";

const DetailCard = ({
  title,
  img,
  rating,
  category,
  price,
  description,
  id,
  favourite,
  addToFaviourte,
}) => {
  return (
    <div className="details">
      <h3>{title}</h3>
      <img src={img} alt={title} style={{ width: 200 }} />
      <p>{rating}</p>
      <h4>Category: {category}</h4>
      <p>€{price}</p>
      <p>{description}</p>
      <button onClick={() => console.log("Add to cart!")}>
        Add to Cart
      </button>{" "}
      <button onClick={() => addToFaviourte(id)}>
        Favorite
        {favourite ? "my faviourate" : "add to faviroute"}
      </button>
    </div>
  );
};

export { DetailCard };
