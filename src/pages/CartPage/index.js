import { Productcard } from "../../components";
import "./style.css";

const CartPage = ({ addItem }) => {
  const cartItem = addItem.filter((product) => {
    if (product.cartQuestion === true) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <h2>Cart</h2>
      {!cartItem
        ? "No faviourate product choosen, go back to shop to choose your faviourate"
        : cartItem.map((product) => {
            return (
              <Productcard
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.mainImage}
                description={product.description}
              />
            );
          })}
    </div>
  );
};

export { CartPage };
