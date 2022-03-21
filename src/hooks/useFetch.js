import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      //Vår abortcontroller constant
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {                             //Denna kollar av abortconstanten
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
            setIsPending(false);
            setError("Could not fetch the data");
        }
        
      }
    };
    //Här kallar vi på vår funktion  i useEffect()
        fetchData();
        
    //Denna körs om vi stoppar fetch-anropet
    return () => {
      controller.abort();
    };
        
  }, [url]);

  // I en custom hook måste vi alltid returnera något värde.

  return { data, isPending, error }; //Vi kan i vårt fall förkorta returen till: return {data}
};

export default useFetch;
