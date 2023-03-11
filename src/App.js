import AppRouter from "./router/AppRouter";
import them from "./components/globalstyles/them";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    <ThemeProvider theme={them}>
      <AppRouter />;
    </ThemeProvider>
  );
}

export default App;
