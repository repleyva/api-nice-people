import { Typography } from "@mui/material";
import "../css/search.css";
import InputSearch from "./InputSearch";

const Search = ({ existData, handleSearch }) => {
  return (
    <div className={`search ${!existData && "search-center"}`}>
      <div className="title-container">
        <div className="title">
          <Typography variant="h3" className="title__text">
            News and Weather App
          </Typography>
        </div>
        <div className="subtitle">
          <Typography variant="h5" className="subtitle__text">
            Find out about the latest news of the city you want with our
            application.
          </Typography>
        </div>
      </div>
      <div className="search-cities">
        <InputSearch handleSearch={handleSearch}/>
      </div>
    </div>
  );
};

export default Search;
