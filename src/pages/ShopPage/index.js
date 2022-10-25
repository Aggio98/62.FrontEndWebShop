import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Productcard } from "../../components";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/products");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        {!products
          ? "loading..."
          : products.map((product) => {
              return (
                <div>
                  <Productcard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.mainImage}
                    description={product.description}
                  />
                  <Link>
                    <Link to={`/products/${product.id}`}>
                      <p>Show Details</p>
                    </Link>
                  </Link>
                </div>
              );
            })}
        ;
      </div>
    </div>
  );
};

export { ShopPage };
