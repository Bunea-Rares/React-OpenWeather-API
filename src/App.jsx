import Search from "./components/Search";
import SwitchTemp from "./components/SwitchTemp";
import { useState } from "react";
import { WeatherContext } from "./components/WeatherContext";
import Now from "./components/Now";
import SwitchHourDay from "./components/SwitchHourDay";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
const App = () => {
  const [city, setCity] = useState("London");
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState({});
  const [displayDay, setDisplayDay] = useState(true);
  return (
    <div>
      <WeatherContext.Provider value={{ weather, city }}>
        <nav className="d-flex align-items-center justify-content-between">
          <Search
            unit={unit}
            setCity={setCity}
            setWeather={setWeather}
          ></Search>
          <SwitchTemp unit={unit} setUnit={setUnit}></SwitchTemp>
        </nav>
        <section className="p-5 mt-3">
          <Now unit={unit} city={city}></Now>
        </section>
        <section>
          <SwitchHourDay
            displayDay={displayDay}
            setDisplayDay={setDisplayDay}
          />
          {displayDay ? (
            <Hourly unit={unit}></Hourly>
          ) : (
            <Daily unit={unit}></Daily>
          )}
        </section>
      </WeatherContext.Provider>
    </div>
  );
};

export default App;
