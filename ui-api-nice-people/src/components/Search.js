import { Typography } from "@mui/material";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../css/search.css";
import InputSearch from "./InputSearch";

const Search = () => {
  const { weather } = useContext(AppContext);
  return (
    <div className={`search `}>
      <div className={`search ${!weather && "search-center"}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Search;
