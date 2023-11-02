/*
- Create state value 
  - user - default value null 
- Create 2 users 
  - login - set's user equal to object with name property 
  - logout - set's user equal to null 
- in jsx use ? to display two different setups
  - h4 with "hello there, user name" and logout button 
  - h4 with "please login " and login button 
*/

import { useState } from "react";

const tempUser = {
  name: "jon",
};

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const handleClick = () => {
    setUser((prev) => {
      return prev === null ? tempUser : null;
    });
  };

  return (
    <div>
      {user === null ? (
        <LoginComponent buttonHandler={handleClick} />
      ) : (
        <WelcomeComponent buttonHandler={handleClick} props={user} />
      )}
    </div>
  );
};

const LoginComponent = ({ buttonHandler }) => {
  return (
    <div>
      <h2> Please Log in </h2>
      <button className="btn" onClick={buttonHandler}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

const WelcomeComponent = ({ name, buttonHandler }) => {
  return (
    <div>
      <h2>Hello there, {name}</h2>
      <button className="btn" onClick={buttonHandler}>
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

export default UserChallenge;
