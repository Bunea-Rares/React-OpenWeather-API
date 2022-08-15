import { useEffect, useState } from "react";

import axios from "axios";
import token from "./token";

const Search = ({ setCity, unit, setWeather }) => {
  const [location, setLocation] = useState("London");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${token}`
      )
      .then((response) => {
        setLat(response.data[0].lat);
        setLon(response.data[0].lon);
      });
  }, [location]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=${token}`
      )
      .then((response) => {
        setWeather(response.data);
        setCity(location);
      });
  }, [lat, lon, location, unit, setWeather, setCity]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLocation(e.target.value);
      setInput("");
    }
  };
  return (
    <div>
      <form className="d-flex align-items-center justify-content-between">
        <div className="m-2 text-center">
          <label htmlFor="name" className="form-label text-center ">
            City
          </label>
        </div>
        <div className="">
          <input
            type="text"
            defaultValue={input}
            className="form-control"
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
