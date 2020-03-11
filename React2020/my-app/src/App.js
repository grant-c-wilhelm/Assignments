import React from 'react';
// import Data from "./data"
// import VacationSpotComponent from './VacationSpotComponent'
import FriendListComponent from './FriendListComponent';
function App() {
  // const mappedSpots = Data.map(spot => {
  //   return <VacationSpotComponent
  //     key={spot.id}
  //     place={spot.place}
  //     price={spot.price}
  //     timeToGo={spot.timeToGo} />
  // })
  return (
    <div>
      {/* {mappedSpots} */}
      <FriendListComponent/>
    </div>
  );
}

export default App;
