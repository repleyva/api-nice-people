import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = () => {
  return (
    <nav className="search-nav">
      <SearchIcon className="search-icon" />
      <InputBase
        fullWidth
        placeholder="Write the name of a city..."
        inputProps={{ className: "input-search" }}
      />
    </nav>
  );
};

export default InputSearch;
