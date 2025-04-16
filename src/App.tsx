import MainContainer from "./views/MainContainer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
