import "../css/weather.css";

const Weather = () => {
  return (
    <div className="weather-container">
      <figure className="weather">
        <img src="assets/rainy-day.png" alt="weather" />
        <div className="info__weather">
          <h3>Today</h3>
          <h1>New York</h1>
          <h4>Temperature: 17°C</h4>
          <h4>Clear sky</h4>
        </div>
      </figure>
    </div>
  );
};

export default Weather;
