import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../css/weather.css";
import { conversor } from "../helpers/conversor";
import { getIcon, icons } from "../helpers/getIcon";

const Weather = () => {

  const { weather } = useContext(AppContext);

  let temp = conversor(weather.main.temp, "F");
  let temp_max = conversor(weather.main.temp_max, "F");
  let temp_min = conversor(weather.main.temp_min, "F");
  const icon = getIcon(icons, weather.weather[0].id);

  return (
    <div className="weather-container">
      <figure className="weather">
        <h1 className="icon-weather">
          <i className={`wi ${icon}`}></i>
        </h1>
        <div className="info__weather">
          <h3>Today</h3>
          <h1>
            {weather.name}, {weather.sys.country}
          </h1>
          <h4>Temp: {temp}°C</h4>
          <h4>Temp max: {temp_max}°C</h4>
          <h4>Temp min: {temp_min}°C</h4>
          <h4> {weather.weather[0].description}</h4>
        </div>
      </figure>
    </div>
  );
};

export default Weather;
