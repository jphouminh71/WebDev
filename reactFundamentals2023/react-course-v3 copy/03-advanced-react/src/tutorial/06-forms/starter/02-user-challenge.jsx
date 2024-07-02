import { useState } from "react";
import { data } from "../../../data.js";

const Person = (props) => {
  const { id, name, removeUserFunc } = props;

  const handleButtonClick = () => {
    removeUserFunc(id);
  };

  return (
    <div>
      <h2> {name} </h2>
      <button className="btn " onClick={handleButtonClick}>
        {" "}
        Remove User{" "}
      </button>
    </div>
  );
};

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data); // setting the existing users as default

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name);
  };

  const addUser = (newUsername) => {
    console.log("Attempting to add: " + newUsername);

    setUsers((prev) => {
      const newUser = { id: -1, name: newUsername }; // Only bug in here is that we are setting a valid ID, probably would be a guid
      return [...prev, newUser];
    });
  };

  const removeUser = (id) => {
    setUsers((prev) => {
      return users.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={handleOnChange}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          Add User
        </button>
      </form>
      {users.map((currUser) => {
        return (
          <Person
            id={currUser.id}
            key={currUser.name}
            name={currUser.name}
            removeUserFunc={removeUser}
          />
        );
      })}
    </div>
  );
};
export default UserChallenge;
