import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Weather } from "../types";
import {
  transformForecast,
  transformWeatherNow,
} from "../services/weatherTransformer";

interface Context {
  city: string;
  changeCity: (newCity: string) => void;
  weatherNow: Weather;
  forecast: Weather[];
  isError: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

const WeatherContext = createContext<Context | null>(null);
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const WeatherProvider = ({ children }: ProviderProps) => {
  const [city, setCity] = useState<string | null>("Москва");
  const [weatherNow, setWeatherNow] = useState<Weather>();
  const [forecast, setForecast] = useState<Weather[]>();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `/api/v1/forecast.json?q=${city}&days=7&hour=12&lang=ru&key=${API_KEY}`,
        );
        const data = await response.json();
        const cleanedWeatherNow: Weather = transformWeatherNow(data);
        const cleanedForecast: Weather[] = transformForecast(data);
        setWeatherNow(cleanedWeatherNow);
        setForecast(cleanedForecast);
        setIsError(false);
      } catch (e) {
        setIsError(true);
        console.log("Ошибка загрузки: ", e);
      }
    };
    fetchWeather();
  }, [city]);

  const changeCity = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <WeatherContext.Provider
      value={{ city, changeCity, weatherNow, forecast, isError }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("Вызов контекста вне провайдера");
  }
  return context;
};
