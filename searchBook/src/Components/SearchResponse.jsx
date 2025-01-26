import Grid from "@mui/material/Grid2";
import { ResponseField } from "./ResponseField";

export function SearchResponse({ response }) {
  console.log(response);
  return (
    <Grid container>
      {response &&
        response.map((response, index) => (
          <Grid key={index} size={{ xs: 12 }} sx={{ margin: "0" }}>
            <ResponseField response={response} index={index} />
          </Grid>
        ))}
    </Grid>
  );
}
