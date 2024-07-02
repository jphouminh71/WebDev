import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: " + email);
    console.log("Name: " + name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2> Controlled Forms</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name:{" "}
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email:{" "}
          </label>
          <input
            type="text"
            id="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-block">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};
export default ControlledInputs;
