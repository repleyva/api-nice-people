import "./App.css";
import "./index.css";
import "./css/news.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { useContext} from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import "weather-icons/css/weather-icons.css";
import NewsItem from "./components/NewsItem";
import NotNews from "./components/NotNews";
import AppContext from "./context/AppContext";

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
  const { weather, news, online, loading } = useContext(AppContext);

  return (
    <div className={"App"}>
      <Search />
      {online ? (
        loading ? (
          <Loader />
        ) : weather ? (
          weather.error ? (
            <Error />
          ) : (
            <div>
              <Weather />
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
