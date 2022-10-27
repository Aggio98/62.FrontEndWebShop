import { Productcard } from "../../components";
import "./style.css";

const FaviouratePage = ({ favProducts, products }) => {
  const realFavProducts = products.filter((product) => {
    if (favProducts.includes(product.id)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <h2>Favorites</h2>
      {!realFavProducts
        ? "No faviourate product choosen, go back to shop to choose your faviourate"
        : realFavProducts.map((product) => {
            return (
              <Productcard
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.mainImage}
                favProducts={favProducts}
                description={product.description}
              />
            );
          })}
    </div>
  );
};

export { FaviouratePage };

// {!products
//     ? "loading..."
//     : filteredProduct.map((product) => {
//         return (
//           <div>
//             <Productcard
//               id={product.id}
//               key={product.id}
//               title={product.title}
//               price={product.price}
//               img={product.mainImage}
//               description={product.description}
//               favourite={product.favourite}
//               addToFaviourte={addToFaviourte}
//             />
