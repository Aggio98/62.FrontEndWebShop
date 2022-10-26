import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Productcard } from "../../components";
import { FaviouratePage } from "../FavoritePage";
import { Link } from "react-router-dom";
import "./style.css";

const ShopPage = ({ addToFaviourte, products }) => {
  //get product data to display in product list
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const response = await axios.get("http://localhost:4000/products");
  //   console.log(response.data);
  //   setProducts(response.data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  //get caetgory data to manage the filters

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const response = await axios.get("http://localhost:4000/categories");
    console.log("this is category response", response.data);
    setCategory(response.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  //define filter options
  // const[filterByCat, setfilterByCat]=useState("")

  const [categoryId, setCategoryId] = useState("");

  const filteredProductByCat = products.filter((product) => {
    if (categoryId === "") {
      return true;
    } else if (parseInt(product.categoryId) === parseInt(categoryId)) {
      return true;
    } else {
      return false;
    }
  });

  const changeCatFilter = (event) => {
    setCategoryId(event.target.value);
  };

  //return checked and value to setfilterarray
  const [filterCategory, setFilterCategory] = useState([]);

  const generateFilterCategory = (event) => {
    if (event.target.checked === true) {
      setFilterCategory([...filterCategory, event.target.value]);
    } else if (event.target.checked === false) {
      const newList = filterCategory.filter((category) => {
        if (category !== event.target.value) {
          return true;
        }
      });
      setFilterCategory(newList);
    }
  };

  const filteredProduct = products.filter((product) => {
    if (filterCategory.length === 0) {
      return true;
    } else if (filterCategory.includes(product.categoryId.toString())) {
      return true;
    } else {
      return false;
    }
  });

  // add to faviourte lift up function
  // const addToFaviourte = (id) => {
  //   const faviourteProducts = products.map((product) => {
  //     if (product.id === id) {
  //       if (product.favourite === true) {
  //         return { ...product, favourite: false };
  //       } else {
  //         return { ...product, favourite: true };
  //       }
  //     } else {
  //       return product;
  //     }
  //   });
  //   setProducts(faviourteProducts);
  // };

  return (
    <div className="page">
      <select onChange={changeCatFilter} value={categoryId}>
        {category.map((category) => {
          return <option value={category.id}>{category.title}</option>;
        })}
        <option value="">ALL category</option>
      </select>

      {category.map((category) => {
        return (
          <div>
            <input
              type="checkbox"
              id={category.id}
              value={category.id}
              onChange={generateFilterCategory}
              checked={filterCategory.includes(category.id.toString())}
            ></input>
            <lable for={category.id}>{category.title}</lable>
          </div>
        );
      })}

      <div>
        {!products
          ? "loading..."
          : filteredProduct.map((product) => {
              return (
                <div>
                  <Productcard
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.mainImage}
                    description={product.description}
                    favourite={product.favourite}
                    addToFaviourte={addToFaviourte}
                  />
                  <Link>
                    <Link to={`/products/${product.id}`}>
                      <p>{product.title}</p>
                    </Link>
                  </Link>
                </div>
              );
            })}
        ;
      </div>
      <FaviouratePage favProducts={products} />
    </div>
  );
};

export { ShopPage };
