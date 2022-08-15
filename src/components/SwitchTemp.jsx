const SwitchTemp = ({ unit, setUnit }) => {
  const handleClick = () => {
    unit === "metric" ? setUnit("imperial") : setUnit("metric");
  };

  return (
    <button className="btn" onClick={handleClick}>
      {unit === "metric" ? (
        <>
          <span className="font-weight: bolder">°C</span> / <span>°F</span>
        </>
      ) : (
        <>
          <span>°C</span> / <span className="font-weight: bolder">°F</span>
        </>
      )}
    </button>
  );
};

export default SwitchTemp;
