import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setUser(jsonResponse);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // These are the different states that the page can land
  // depending on the outcome of the fetch data

  if (isLoading) {
    return <h2> Loading... </h2>;
  }
  if (isError) {
    return <h2> There was an error... </h2>;
  }

  // important to place these here because we are confident that it is defined.
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <h2>Fetch Data </h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
