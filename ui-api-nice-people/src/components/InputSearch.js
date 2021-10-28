import { Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import History from "./History";

const InputSearch = ({ handleSearch }) => {
  const [query, setQuery] = useState(null);
	const send = (e) => {
		if (e.key === "Enter") {
			handleSearch(query);
		}
	}
  return (
    <div className="search-container">
      <nav className="search-nav">
        <SearchIcon className="search-icon" />
        <InputBase
          fullWidth
          placeholder="Write the name of a city..."
          inputProps={{ className: "input-search" }}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={send}
        />
      </nav>
      <div className="buttons">
        <Button className="btn" onClick={() => handleSearch(query)}>
          Search
        </Button>
        <History />
      </div>
    </div>
  );
};

export default InputSearch;
