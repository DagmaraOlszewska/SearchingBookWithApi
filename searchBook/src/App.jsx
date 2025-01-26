import "./App.css";
import {
  responsiveFontSizes,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { SearchPage } from "./Pages/SearchPage";
import BookDetails from "./Pages/BookDetails";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#FFEF85",
      },
      action: {
        active: "#FFEF85", // Kolor aktywnych ikon (niezaznaczonych)
        hover: "#B54", // Kolor tła podczas najechania myszką
        selected: "#B54", // Kolor tła zaznaczonego elementu
        disabled: "#B54", // Kolor ikon/tekstów wyłączonych
        disabledBackground: "#B54", // Tło wyłączonych przycisków
      },
      background: {
        default: "#B54", // Kolor tła aplikacji
        paper: "#283E30", // Kolor tła kart (np. dla Card, AppBar)
      },
      text: {
        primary: "#FBFADA", // Kolor głównego tekstu
        secondary: "#ADBC9F", // Kolor drugorzędnego tekstu (np. opisy)
      },
    },
  });

  theme = responsiveFontSizes(theme);

  const router = createBrowserRouter([
    {
      path: "/mainpage",
      element: <MainPage />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/favorites",
      element: <MainPage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/yourbooks",
      element: <MainPage />,
    },
    {
      path: "/details/:id",
      element: <BookDetails />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
