import "./style.css";
import { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const inputEmailEvent = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const inputPasswordEvent = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const inputNameEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  // Step by step
  // 1- Create form control
  // 2- On every key stroke, save to a useState
  // 3- On submit, make a post request
  // 4-Follow form control documentation:  https://medium.com/byte-sized-react/controlled-forms-in-react-68e59362a119
  // Follow post request autehntication:  https://blog.logrocket.com/understanding-axios-post-requests/

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   alert("A name was submitted: " + this.state.value);
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      const res = await axios.post("http://localhost:4000/signup", userData);

      console.log(res, "this is res");
    } catch (e) {
      setError(e.response.data);
    }
  };

  return (
    <div className="SignupForm">
      {/* <p>
        User Name:{" "}
        <input
          type="text"
          onChange={inputEmailEvent}
          placeholder="Name"
          value={email}
        />{" "}
      </p>
      <p>
        Password:{" "}
        <input
          type="text"
          onChange={inputPasswordEvent}
          placeholder="Name"
          value={password}
        />{" "}
      </p> */}

      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="text" value={name} onChange={inputNameEvent} />
        </label>
        <label>
          email:
          <input type="text" value={email} onChange={inputEmailEvent} />
        </label>
        <label>
          password:
          <input type="text" value={password} onChange={inputPasswordEvent} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { SignupForm };
