import { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SearchIcon from "@mui/icons-material/Search";

export function BottomBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const pathToIndex = {
    "/mainpage": 0,
    "/search": 1,
    "/favorites": 2,
    "/yourbooks": 3,
  };

  useEffect(() => {
    const index = pathToIndex[location.pathname];
    if (index !== undefined) {
      setValue(index);
    }
  }, [location.pathname, pathToIndex]);

  function handleNavigation(newValue) {
    setValue(newValue);
    if (newValue === 0) navigate("/mainpage");
    if (newValue === 1) navigate("/search");
    if (newValue === 2) navigate("/favorites");
    if (newValue === 3) navigate("/yourbooks");
  }

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="Your books"
          icon={<LocalLibraryIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
