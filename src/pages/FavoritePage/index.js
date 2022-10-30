import { Productcard } from "../../components";
import { Rating } from "../../components";
import "./style.css";

const FaviouratePage = ({ addToFaviourte, favProducts, products }) => {
  const realFavProducts = products.filter((product) => {
    if (favProducts.includes(product.id)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="fav-page">
      <h2>Favorites</h2>
      <div className="fav-product-list">
        {!realFavProducts
          ? "No faviourate product choosen, go back to shop to choose your faviourate"
          : realFavProducts.map((product) => {
              return (
                <Productcard
                  id={product.id}
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  img={product.mainImage}
                  description={product.description}
                  favProducts={favProducts}
                  addToFaviourte={addToFaviourte}
                />
              );
            })}
      </div>
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
