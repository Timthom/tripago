import { useState /*, useEffect, useCallback*/ } from "react";
import useFetch from "../hooks/useFetch";

//Styles
import "./TripList.css";

function TripList() {
  /*Nu behöver vi inte denna koden eftersom vi hämtar den från vår useFetch-hook
  const [trips, setTrips] = useState([]);
  */
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips, isPending, error } = useFetch(url);
  //Nu behöver vi inte denna koden längre
  /*  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  }, [url]); */
  //Eller denna
  //Med useEffect och en tom array så körs bara den en gång
  //tills något ändras/uppdateras
  /*  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  console.log(trips); */
  //Med useState = evig loop

  /*  fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => setTrips(json)) */

  return (
    //Nu skulle vi behöva ändra vår data från trips till data
    //Fast vi kan också namnge det i vår konstant där vi kallar på useFetch() Såhär: {data: trips}
    <section className="trip-list">
      <h2>Trip List</h2>
      {isPending && <p>Loading trips...</p>}
      {error && <p className="red">{error}</p>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          Europeans Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips ")}>
          All Trips
        </button>
      </div>
    </section>
  );
}

export default TripList;
