import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../../components";
import "./style.css";

const DetailsPage = () => {
  const params = useParams();
  const [items, set_item] = useState(null);

  const getDetails = async () => {
    const res = await axios.get(`http://localhost:4000/products/${params.id}`);
    console.log("this is the product detail", res.data);
    set_item(res.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="page">
      {!items ? (
        "Loading..."
      ) : (
        <div key={items.id}>
          <DetailCard
            title={items.title}
            img={items.mainImage}
            rating={items.rating}
            price={items.price}
            description={items.description}
            category={items.category.title}
          />
        </div>
      )}
    </div>
  );
};

export { DetailsPage };
