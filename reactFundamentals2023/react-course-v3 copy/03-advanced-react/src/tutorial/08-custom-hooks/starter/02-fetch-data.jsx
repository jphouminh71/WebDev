import { useEffect, useState } from "react";
import { useFetchCustomHook } from "./useFetchCustomHook";
const url = "https://api.github.com/users/QuincyLarson";

// Ultimately what we want is to set the user
// after we have gotten the data back

// If child state changes then it will trigger re-render it looks like

// Things that should only be done once
// 1. Setting the URL
// 2. Calling the api

// AFTER those are done
// 1. set the user.

const FetchData = () => {
  // Setup all the hooks
  const { isLoading, isError, user, sendApiCall, setUrlEndpoint } =
    useFetchCustomHook("");

  useEffect(() => {
    setUrlEndpoint(url);
    sendApiCall();
  }, []);

  // order matters
  // don't place user JSX before loading or error
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error... {body}</h2>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
