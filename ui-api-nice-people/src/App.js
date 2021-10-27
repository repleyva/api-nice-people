import "./App.css";
import "./index.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import News from "./components/News";
import { useEffect, useState } from "react";
import { helpHttps } from "./helpers/helpHttps";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState(false);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttps();
  const API_KEY_WEATHER = "7811643fbf7e9082211e1353c932fab0";
  const base_url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY_WEATHER}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const request = await api.get(base_url_weather);
      setLoading(false);
      setWeather(request);
      return request;
    };
    if (search !== null && search !== "") fetchData();
  }, [base_url_weather]); // cuando search cambie entonces se ejecuta el efecto

  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <div className={"App"}>
      <Search
        existData={(weather && !weather.error) || news}
        handleSearch={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : weather ? (
        weather.error ? (
          <Error/>
        ) : (
          <Weather weather={weather} />
        )
      ) : (
        ""
      )}

      {news && <News />}
    </div>
  );
}

export default App;
