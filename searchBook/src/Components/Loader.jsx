import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export function Loader() {
  return (
    <StyledBox>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ADBC9F" />
            <stop offset="100%" stopColor="#FFEF85" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </StyledBox>
  );
}

const StyledBox = styled(Box)(() => ({
  display: "flex" /* Używamy Flexbox */,
  justifyContent: "center" /* Wyśrodkowanie w poziomie */,
  alignItems: "center" /* Wyśrodkowanie w pionie */,
  position: "fixed" /* Ustawiamy kontener w stałej pozycji */,
  top: 0 /* Zaczynamy od góry */,
  left: 0 /* Zaczynamy od lewej */,
  width: "100vw" /* Pełna szerokość okna */,
  height: "100vh" /* Pełna wysokość okna */,
  //   backgroundColor: "rgba(0, 0, 0, 0.5)" /* Lekka przezroczystość tła */,
  zIndex: "1000",
}));
