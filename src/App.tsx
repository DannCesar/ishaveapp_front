import { Routes } from "./routes/index.routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
