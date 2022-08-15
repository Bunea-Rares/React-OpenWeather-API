const Time = ({ time }) => {
  return (
    <div className="h4">
      <p>
        {new Date(time * 1000).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Time;
