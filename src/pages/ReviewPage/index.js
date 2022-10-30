import React from "react";
import { ReviewForm } from "../../components/ReviewForm";
import "./style.css";

function ReviewPage() {
  return (
    <div className="ReviewPage">
      <ReviewForm />
      {/* <p>
        email address: <input type="text" placeholder="Name" />{" "}
        <button>Add</button>
      </p>
      <p>
        password:
        <input type="text" placeholder="Name" />{" "}
      </p>
      <button>Submit</button> */}
    </div>
  );
}

export { ReviewPage };
