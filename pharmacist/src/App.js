import React from "react";
import "./App.css";
import data from "./data";
import Collapse from "./components/Collapse";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Pharmacy Dashboard</h1>
      </div>
      <br></br>
      {data.map((patient) => (
        <Collapse key={patient.name} name={patient.name}
        sex={patient.sex}
        age={patient.age}
        city={patient.city}
        symptoms={patient.symptoms}
        prescription={patient.prescription}
        meds={patient.meds} />
      ))}
    </div>
  );
}

export default App;
