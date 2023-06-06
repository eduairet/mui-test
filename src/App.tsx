import { useContext } from "react";
import { ApiContext, ApiData } from "./store/api-context";
import { Container, Box, Typography, Grid } from "@mui/material";
import TouchCard from "./components/TouchCard";

function App() {
  const apiCtx = useContext(ApiContext);

  return (
    <Container maxWidth="md" sx={{ padding: '2rem 1rem 4rem 1rem' }}>
      <Box>
        <Typography variant="h1">MUI Test</Typography>
      </Box>
      <Grid container columnSpacing={3} rowSpacing={8} height="100%" sx={{ mt: 2 }}>
        {apiCtx?.data.map((el: ApiData, i: number) => (
          <Grid key={`coffee-${i}`} item xs={12} sm={12} md={6} lg={4}>
            <TouchCard {...el} />
          </Grid>
        ))}
      </Grid>
    </Container >
  );
}

export default App;
