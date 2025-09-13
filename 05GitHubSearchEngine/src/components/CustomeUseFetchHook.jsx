import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data,setData]=useState(true);
  useEffect(() => {
    if (!url) return;
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `GitHub API Fetching Failed: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  },[url]);

  return { data, loading, error };
};

export default useFetch;
