import "../css/news.css";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-title">
        <h1>News New York</h1>
        <div className="separator">
          <hr />
        </div>
      </div>
      <div className="news-article-container">
        <div className="news-article">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </div>
  );
};

export default News;
