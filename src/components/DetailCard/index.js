import "./style.css";

const DetailCard = (props) => {
  return (
    <div className="details">
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.title} style={{ width: 200 }} />
      <p>{props.rating}</p>
      <h4>Category: {props.category}</h4>
      <p>€{props.price}</p>
      <p>{props.description}</p>
      <button onClick={() => console.log("Add to cart!")}>
        Add to Cart
      </button>{" "}
      <button onClick={() => console.log("Add to favorite!")}>Favorite</button>
    </div>
  );
};

export { DetailCard };
