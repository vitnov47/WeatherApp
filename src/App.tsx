import AppLayout from "./components/Layout";
import { WeatherProvider } from "./context/weatherContext";
function App() {
  return (
    <WeatherProvider>
      <AppLayout />
    </WeatherProvider>
  );
}
export default App;
