import { React } from "react";

function Categorylist({ categories, id }) {
  return (
    <div>
      <li>
        {categories.map((category, id) => {
          return <li key={id}>{category}</li>;
        })}
      </li>
    </div>
  );
}

export { Categorylist };
