import React from 'react';
import Data from "./data"
import VacationSpotComponent from './VacationSpotComponent'
function App() {
  const mappedSpots = Data.map(spot => {
    return <VacationSpotComponent
      key={spot.id}
      place={spot.place}
      price={spot.price}
      timeToGo={spot.timeToGo} />
  })
  return (
    <div>
      {mappedSpots}
    </div>
  );
}

export default App;
