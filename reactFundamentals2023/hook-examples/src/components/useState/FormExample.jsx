import React, { useState } from "react";
import "./UseStateExamples.css";

function FormExample() {
  const handleFormChange = (e) => {
    console.log(e.target.name);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const handleFormSubmit = (e) => {
    console.log(formValues);
    e.preventDefault();
  };

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    passcode: "",
  });

  return (
    <section className="card-container">
      <form>
        <h1> Login Form </h1>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleFormChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleFormChange}
        />
        <input
          name="passcode"
          type="password"
          placeholder="pin code"
          onChange={handleFormChange}
        />
        <button type="submit" onClick={handleFormSubmit}>
          {" "}
          Sign In{" "}
        </button>
      </form>
    </section>
  );
}

export default FormExample;
