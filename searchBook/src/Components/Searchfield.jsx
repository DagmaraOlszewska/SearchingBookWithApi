import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function Searchfield({ query, setQuery }) {
  return (
    <TextField
      id="input-with-icon-textfield"
      sx={{
        width: "90%",
        position: "fixed",
        backgroundColor: "#283E30",
        zIndex: "1000",
        top: "0",
        justifyContent: "flex-end",
        height: "45px",
      }}
      placeholder="Searching..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      variant="standard"
    />
  );
}
