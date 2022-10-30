import React from "react";
import { LoginForm } from "../../components/Login";
import "./style.css";

function LoginPage({ sendToken }) {
  return (
    <div className="login-page">
      <LoginForm sendToken={sendToken} className="login-form" />
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

export { LoginPage };
