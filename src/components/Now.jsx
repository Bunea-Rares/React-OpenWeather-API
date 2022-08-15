import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import Time from "./Time";
import Temperature from "./Temperature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature0,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
const Now = ({ unit, city }) => {
  const weather = useContext(WeatherContext);
  return (
    <div className="d-flex justify-content-between p-2 m-2">
      <div className="d-flex flex-column align-items-center justify-content-between">
        <div>
          <p className="h4">
            {weather?.weather?.current?.weather[0]?.description?.toUpperCase()}
          </p>
        </div>
        <Time time={weather?.weather?.current?.dt} />
        <Temperature unit={unit} />
        <img
          className="w-50"
          src={
            "http://openweathermap.org/img/wn/" +
            weather?.weather?.current?.weather[0]?.icon +
            "@2x.png"
          }
          alt=""
        />
        <p className="h4">{city}</p>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center ">
              <FontAwesomeIcon icon={faTemperature0} size="3x" />
            </div>
            <div className="col text-center align-items-center">
              <p>Feels Like</p>
              <p>
                {parseInt(weather?.weather?.current?.feels_like)}{" "}
                {unit === "metric" ? "°C" : "°F"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faDroplet} size="3x" />
            </div>
            <div className="col text-center align-items-center">
              <p>Humidity</p>
              <p>{parseInt(weather?.weather?.current?.humidity)}%</p>
            </div>
          </div>

          <div className="row">
            {" "}
            <div className="col d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faWind} size="3x" />
            </div>
            <div className="col text-center align-items-center">
              <p>Wind Speed</p>
              <p>{parseInt(weather?.weather?.current?.wind_speed)}km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
