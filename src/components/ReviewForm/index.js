import { useState } from "react";
import axios from "axios";
import "./style.css";

const ReviewForm = () => {
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const inputNameEvent = (e) => {
    setName(e.target.value);
  };

  const [rating, setRating] = useState("");
  const inputRatingEvent = (e) => {
    setRating(e.target.value);
  };
  const [review, setReview] = useState("");
  const inputReviewEvent = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   alert("A name was submitted: " + this.state.value);
      const userData = {
        name: name,
        rating: rating,
        review: review,
      };
      const res = await axios.post("http://localhost:4000/signup", userData);

      console.log(res, "this is res");
    } catch (e) {
      setError(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input type="text" value={name} onChange={inputNameEvent} />
      </label>
      <label>
        rating:
        <input type="text" value={rating} onChange={inputRatingEvent} />
      </label>
      <label>
        review:
        <input type="text" value={review} onChange={inputReviewEvent} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export { ReviewForm };
