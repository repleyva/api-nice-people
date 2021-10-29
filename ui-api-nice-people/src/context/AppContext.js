import { createContext, useEffect, useState } from "react";
import { helpHttps } from "../helpers/helpHttps";
import { endpoint_api } from "../utils/instance";
/* import { endpoint_news, endpoint_weather } from "../utils/instance"; */

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState(true);
  const base_url = endpoint_api(search);
  /* const base_url_news = endpoint_news(search); */

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
			const request = await helpHttps().get(base_url);
      setLoading(false);
			const json = JSON.parse(request)
			const weatherRes = JSON.parse(json.results[0].weather);
			const newsRes = JSON.parse(json.results[1].news);
      setWeather(weatherRes);
      if (newsRes !== null && newsRes.data.length !== 0) {
        newsRes.data.forEach((el) => {
          let new_el = {
            author: el.author,
            title: el.title,
            desc: el.description,
            url: el.url,
            image: el.image,
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
  }, [base_url, search]); // cuando search cambie entonces se ejecuta el efecto

  const handleSearch = (query) => {
    setSearch(query);
    setNews([]);
    setWeather(null);
  };

  const data = {
    weather,
    news,
    search,
    handleSearch,
    online,
    loading,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
