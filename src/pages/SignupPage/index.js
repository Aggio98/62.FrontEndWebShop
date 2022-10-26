import React from "react";
import { SignupForm } from "../../components/Formfields";
import "./style.css";

function SignupPage() {
  return (
    <div className="SignupForm">
      <SignupForm />
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

export { SignupPage };
