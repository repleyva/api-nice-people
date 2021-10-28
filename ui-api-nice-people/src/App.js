import "./App.css";
import "./index.css";
import "./css/news.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { useEffect, useState } from "react";
import { helpHttps } from "./helpers/helpHttps";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "weather-icons/css/weather-icons.css";
import NewsItem from "./components/NewsItem";
import NotNews from "./components/NotNews";

const renderNews = (news, title) => {
  return (
    <div>
      <div className="news-title">
        <h1>News {title}</h1>
        <div className="separator">
          <hr />
        </div>
      </div>
      <div className="news-article-container">
        <div className="news-article">
          {news.length === 0 ? (
            <NotNews />
          ) : (
            news.map((el, index) => <NewsItem el={el} key={index} />)
          )}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState(true);

  const API_KEY_WEATHER = "7811643fbf7e9082211e1353c932fab0";
  const API_KEY_NEWS = "c122610c243d419fab021fda2ace3bf9";
  const base_url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY_WEATHER}`;
  const base_url_news = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY_NEWS}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [weatherRes, newsRes] = await Promise.all([
        helpHttps().get(base_url_weather),
        helpHttps().get(base_url_news),
      ]);
      setLoading(false);
      setWeather(weatherRes);
      if (newsRes.articles.length !== 0) {
        newsRes.articles.forEach((el) => {
          let new_el = {
            author: el.author,
            title: el.title,
            desc: el.description,
            url: el.url,
            image: el.urlToImage,
          };
          // destructura lo que trae la varible news
          setNews((news) => [...news, new_el]);
        });
      }
    };
    if (navigator.onLine) {
      setOnline(true);
      if (search !== null && search !== "") fetchData();
    } else {
      setOnline(false);
    }
  }, [base_url_weather, base_url_news, search]); // cuando search cambie entonces se ejecuta el efecto

  const handleSearch = (query) => {
    setSearch(query);
    setNews([]);
  };

  return (
    <div className={"App"}>
      <Search
        existData={(weather && !weather.error) || news}
        handleSearch={handleSearch}
      />
      {online ? (
        loading ? (
          <Loader />
        ) : weather ? (
          weather.error ? (
            <Error />
          ) : (
            <div>
              <Weather weather={weather} />
              <div className="news-container">
                {renderNews(news, weather.name)}
              </div>
            </div>
          )
        ) : (
          ""
        )
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
