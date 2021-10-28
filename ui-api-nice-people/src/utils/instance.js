const API_KEY_WEATHER = "7811643fbf7e9082211e1353c932fab0";
const API_KEY_NEWS = "c122610c243d419fab021fda2ace3bf9";

export const endpoint_weather = (search) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY_WEATHER}`;
  return url;
};

export const endpoint_news = (search) => {
  let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY_NEWS}`;
  return url;
};
