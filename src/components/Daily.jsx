import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const Daily = ({ unit }) => {
  const weather = useContext(WeatherContext);
  const data = weather.weather.daily;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let i = 0;
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        {data?.map((data) => {
          return (
            <div className="text-center" key={data.dt}>
              <p>{days[new Date(data?.dt * 1000).getDay()]}</p>
              <p>
                Day: {" " + parseInt(data?.temp.day)}{" "}
                {unit === "metric" ? "°C" : "°F"}
              </p>
              <p>
                Night: {" " + parseInt(data?.temp.night)}{" "}
                {unit === "metric" ? "°C" : "°F"}
              </p>
              <img
                src={
                  "http://openweathermap.org/img/wn/" +
                  data?.weather[0]?.icon +
                  "@2x.png"
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Daily;
