// hook doit commencer par use...
import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        // toujours le corps de la réponse
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resources");
          }
          return res.json();
        })
        // toujours l'objet réponse
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        // error
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1500);
  }, []);
  return { data, setData, isPending, error };
}
