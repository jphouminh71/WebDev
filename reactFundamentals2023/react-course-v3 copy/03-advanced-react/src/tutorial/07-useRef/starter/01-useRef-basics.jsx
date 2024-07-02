import { useEffect, useRef, useState } from "react";

// Once in awhile theres a very specific use case for this
// Its like UseState but it doesn't not re-render on every state change.
const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null); // acts a container, its a DOM node.
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    if (!isMounted.current) {
      // This trick lets us trigger certain code to NOT run on initial render.
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
