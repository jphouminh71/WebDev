import { useState } from "react";

export const useFetchCustomHook = (defaultUrl) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  let url = defaultUrl;

  const setUrlEndpoint = (newUrl = "NO ENDPOINT") => {
    url = newUrl;
  };

  const sendApiCall = async () => {
    try {
      const response = await fetch(url);
      let unpackedResponse = await response.json();
      setData(unpackedResponse);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return { isLoading, isError, data, sendApiCall, setUrlEndpoint };
};
