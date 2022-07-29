import { useEffect, useState } from "react";
import "./App.css";
import Forecasts from "./Forecasts/Forecasts";
import Header from "./Header";
import { url, key as apiKey, forecasts } from "./utils/Constans";

const App = () => {
  const [data, setData] = useState([]);
  const [key, setKey] = useState("");

  const getLocKey = (locationKey) => {
    setKey(() => locationKey);
  };

  const getForecasts = async () => {
    const result = await fetch(
      `${url}${forecasts}${key}?apikey=${apiKey}&metric=true`
    );
    let temp = await result.json();
    setData(() => temp);
    setKey("");
  };

  useEffect(() => {
    if (key !== "") getForecasts();
  }, [key]);

  return (
    <div className="container">
      <Header onForecasts={getLocKey} />
      {/* TODO Add Content Component */}
      {/* Showing Data from Header's Request */}
      <Forecasts data={data} />
    </div>
  );
};

export default App;
