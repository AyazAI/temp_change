import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function toCelsius(fahrenheit, setTemperature) {
  let res = ((fahrenheit - 32) * 5) / 9;
  setFahrenhite(res);
}

function toFahrenheit(celsius, setTemperature) {
  let res = (celsius * 9) / 5 + 32;
  setCelcius(res);
}

function convertTemperature(temp, scale, setTemperature) {
  if (scale === "f") {
    toFahrenheit(temp, setTemperature);
  } else if (scale === "c") {
    toCelsius(temp, setTemperature);
  } else {
    console.log("No scale mentioned");
  }
}

function TemperationConverter({ value, scale, setTemperature }) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) =>
          convertTemperature(e.target.value, scale, setTemperature)
        }
      />
    </div>
  );
}

function App() {
  const [temperature, setTemperature] = useState(0);
  const [fahrenheit, setFahrenhite] = useState(0);
  const [celcius, setCelcius] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <TemperationConverter
        value={celcius}
        scale="f"
        setFahrenhite={setFahrenhite}
      />
      <TemperationConverter
        value={fahrenheit}
        scale="c"
        setCelcius={setCelcius}
      />
    </div>
  );
}

export default App;
