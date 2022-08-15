import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const Temperature = ({ unit }) => {
  const context = useContext(WeatherContext);
  return (
    <div className="h4">
      <p>
        {parseInt(context?.weather?.current?.temp)}
        {unit === "metric" ? "°C" : "°F"}
      </p>
    </div>
  );
};

export default Temperature;
