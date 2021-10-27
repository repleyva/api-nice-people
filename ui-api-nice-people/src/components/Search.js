import { Typography } from "@mui/material";
import "../css/search.css";
import History from "./History";
import InputSearch from "./InputSearch";

const Search = () => {
  return (
    <div className="search">
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
        <InputSearch />
				<History/>
      </div>
    </div>
  );
};

export default Search;