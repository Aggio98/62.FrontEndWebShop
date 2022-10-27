import React from "react";
import "./styles.css";
function Rating({ rating }) {
  return (
    <div>
      <span className={`fa fa-star ${rating > 0 ? "checked" : ""}`}></span>
      <span className={`fa fa-star ${rating > 1 ? "checked" : ""}`}></span>
      <span className={`fa fa-star ${rating > 2 ? "checked" : ""}`}></span>
      <span className={`fa fa-star ${rating > 3 ? "checked" : ""}`}></span>
      <span className={`fa fa-star ${rating > 4 ? "checked" : ""}`}></span>
    </div>
  );
}

export { Rating };
