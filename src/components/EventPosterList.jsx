import React from "react";
import EventPoster from "./EventPoster";
import EventData from "./EventData";

function App() {
  return (
    <div>
      {EventData.map((event, index) => (
        <EventPoster key={index} {...event} />
      ))}
    </div>
  );
}

export default App;
