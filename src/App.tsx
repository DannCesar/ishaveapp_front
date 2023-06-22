import { Routes } from "./routes/index.routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
