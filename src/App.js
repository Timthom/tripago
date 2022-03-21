
import { useState } from "react";
import "./App.css";
import TripList from './components/TripList'

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide trips!</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;

//Det första vi gör är att installera ett npm-paket globalt
//Det heter json-server i terminalen skriver ni: npm i -g json-server får ni error skriv sudo före kommandot
/**
 * I rooten av projectet skapar ni en mapp som döps till data i den mappen skapar ni en fil ni döper till
 * db.json
 *  i den filen klistrar ni in er data:
 * 
 * Data till db.json 
 * 
 * 
 * 
 * {
  "trips": [
    {
      "title": "2 Night Stay in Venice",
      "price": "£195"
    },
    {
      "title": "3 Night Stay in Paris",
      "price": "£295"
    },
    {
      "title": "4 Night Stay in London",
      "price": "£345"
    },
    {
      "title": "3 Night Stay in New York",
      "price": "£325"
    },
    {
      "title": "3 night stay in Copenhagen",
      "price": "£95"
    }
  ]
}


Nu kan ni i terminale köra följande kommando
json-server --watch ./data/db.json

då ska ni få enpointen till ert api 

eftersom json-servern kör här får ni öppna ett nytt fönster där ni kan köra sedvanliga terminalkommando
npm start etc...


 */