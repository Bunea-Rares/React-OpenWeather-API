const SwitchHourDay = ({ displayDay, setDisplayDay }) => {
  return (
    <button
      className="btn-lg m-4 btn btn-dark"
      onClick={() => {
        displayDay ? setDisplayDay(false) : setDisplayDay(true);
      }}
    >
      {displayDay ? "Hourly" : "Daily"}
    </button>
  );
};

export default SwitchHourDay;
