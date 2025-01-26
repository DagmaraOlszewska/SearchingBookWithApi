import { Box } from "@mui/material";
import { BottomBar } from "./BottomBar";

export function Layout({ children, backgroundColor }) {
  return (
    <Box
      sx={{
        backgroundColor: { backgroundColor },
        marginBottom: "56px",
        height: "calc(100vh - 56px)",
        overflow: "auto",
      }}
    >
      <Box sx={{ width: "90%", margin: "0 auto", paddingTop: "1rem" }}>
        {children}
        <BottomBar />
      </Box>
    </Box>
  );
}
