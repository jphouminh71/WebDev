import { useState } from "react";

const ToggleChallenge = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn((prev) => {
      console.log("Changing: " + prev);
      const newValue = !prev;
      return newValue;
    });
  };

  return (
    <div>
      <h1>Click the button.</h1>
      <button className="btn" onClick={handleClick}>
        {" "}
        Login{" "}
      </button>
      {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}
    </div>
  );
};

const LoginComponent = () => {
  return (
    <div>
      <h1>Please Log In.</h1>
    </div>
  );
};

const WelcomeComponent = () => {
  return (
    <div>
      <h1>Welcome In!</h1>
    </div>
  );
};

export default ToggleChallenge;
