// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ProductCard } from "../../components";
// import "./style.css";

// const ShopPage = () => {
//   const [products, setProducts] = useState(null);
//   const [category, setCategory] = useState([]);
//   const [selectCategory, setselectCategory] = useState(null);

//   const getProducts = async () => {
//     const response = await axios.get("http://localhost:4000/products");
//     setProducts(response.data);
//     console.log(response.data);
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getCategories = async () => {
//     const res = await axios.get("http://localhost:4000/categories");
//     setCategory(res.data);
//     console.log(res.data);
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);

//   const getFilteredCategory = () => {
//     if (!selectCategory) {
//       return category;
//     }
//     return category.filter((item) => item.categoryId === selectCategory);
//   };

//   return (
//     <div>
//       <div>
//         <p>Checked: {selectCategory}</p>
//         {category.map((cat) => (
//           <label>
//             <input
//               type="checkbox"
//               value={selectCategory === cat.id}
//               onChange={() =>
//                 selectCategory === cat.id
//                   ? setselectCategory(null)
//                   : setselectCategory(cat.id)
//               }
//             />
//             {cat.title}
//           </label>
//         ))}
//       </div>
//       {!products ? (
//         "Loading..."
//       ) : (
//         <div className="page">
//           {products
//             .filter((product) => {
//               if (selectCategory === null) {
//                 return true;
//               }
//               return product.categoryId === selectCategory;
//             })
//             .map((product) => {
//               return (
//                 <ProductCard
//                   key={product.id}
//                   id={product.id}
//                   title={product.title}
//                   price={product.price}
//                   img={product.mainImage}
//                   description={product.description}
//                 />
//               );
//             })}
//           ;
//         </div>
//       )}
//     </div>
//   );
// };
// export { ShopPage };
