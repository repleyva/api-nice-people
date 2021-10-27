import "./App.css";
import "./index.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import News from "./components/News";
import { useEffect, useState } from "react";
import { helpHttps } from "./helpers/helpHttps";

function App() {
  const [weather, setWeather] = useState(false);
  const [news, setNews] = useState(false);
  const [search, setSearch] = useState(null);
  let api = helpHttps();
  const API_KEY_WEATHER = "7811643fbf7e9082211e1353c932fab0";
  const base_url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY_WEATHER}`;

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get(base_url_weather);
      console.log(request);
      setWeather(request);
      return request;
    };
    if (search !== null) fetchData();
  }, [base_url_weather]); // cuando search cambie entonces se ejecuta el efecto

  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <div className={"App"}>
      <Search existData={weather || news} handleSearch={handleSearch} />
      {weather && <Weather weather={weather} />}
      {news && <News />}
    </div>
  );
}

export default App;
