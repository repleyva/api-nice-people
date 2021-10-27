import { Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const InputSearch = ({ handleSearch }) => {
  const [query, setQuery] = useState(null);
  return (
    <div className="search-container">
      <nav className="search-nav">
        <SearchIcon className="search-icon" />
        <InputBase
          fullWidth
          placeholder="Write the name of a city..."
          inputProps={{ className: "input-search" }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </nav>
      <Button className="btn" onClick={() => handleSearch(query)}>
        Search
      </Button>
    </div>
  );
};

export default InputSearch;
