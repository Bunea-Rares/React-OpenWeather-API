import { useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const Hourly = ({ unit }) => {
  const [page, setPage] = useState(1);
  const weather = useContext(WeatherContext);
  const data = weather.weather.hourly;
  let i = 1;
  const page1 = data?.slice(0, 8);
  const page2 = data?.slice(8, 16);
  const page3 = data?.slice(16, 24);
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        {page === 1 &&
          page1?.map((data) => {
            return (
              <div className="text-center" key={i}>
                <p>{i++}:00</p>
                <p>
                  {parseInt(data?.temp)} {unit === "metric" ? "°C" : "°F"}
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
        {page === 2 &&
          page2?.map((data) => {
            return (
              <div className="text-center" key={i}>
                <p>{i++ + 8}:00</p>
                <p>
                  {parseInt(data?.temp)} {unit === "metric" ? "°C" : "°F"}
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
        {page === 3 &&
          page3?.map((data) => {
            return (
              <div className="text-center" key={i}>
                <p>{i++ + 16}:00</p>
                <p>
                  {parseInt(data?.temp)} {unit === "metric" ? "°C" : "°F"}
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
      <div>
        <nav aria-label="Page navigation ">
          <ul className="pagination">
            <li className="page-item">
              {" "}
              <button
                className="page-link text-dark"
                onClick={() => setPage(1)}
              >
                1
              </button>
            </li>
            <li className="page-item">
              {" "}
              <button
                className="page-link text-dark"
                onClick={() => setPage(2)}
              >
                2
              </button>
            </li>
            <li className="page-item">
              {" "}
              <button
                className="page-link text-dark"
                onClick={() => setPage(3)}
              >
                3
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Hourly;
