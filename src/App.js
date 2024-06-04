import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;












// the issue you're facing is likely 
// due to the asynchronous nature of setText in React. When 
// you call setText, it schedules an update to the state, but the update doesn't 
// happen immediately. Therefore, when you log text right after setText, it logs the old state value instea
// d of the new one.

// To see the updated state, you can use the useEffect hook to log the state whe
// never it changes. Here's how you can modify your code:
