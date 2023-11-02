import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("hello this is interesting.");

    const intId = setInterval(() => {
      console.log("hello from interval");
    }, 1000);

    // CLEANUP FUNCTION, IMPORTANT FOR MEMORY LEAKS
    return () => {
      clearInterval(intId);
    };
  }, []);

  return <h1>Hello there</h1>;
};

// Same as the one above just demonstrating with eventListeners
const SecondRandomComponent = () => {
  const someFunc = () => {
    // some logic
  };

  const setupEventListener = () => {
    window.addEventListener("scroll", someFunc);
  };

  useEffect(() => {
    setupEventListener();

    // Cleanup
    return () => {
      removeEventListener("scroll", someFunc);
    };
  }, []);

  return <h1>hello there froms secondrandomcomponent</h1>;
};

export default CleanupFunction;
