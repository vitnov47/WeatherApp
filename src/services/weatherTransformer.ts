import type { Weather } from "../types";

export const transformWeatherNow = (item: any): Weather => {
  if (item) {
    return {
      id: crypto.randomUUID(),
      date: item.location.localtime,
      city: item.location.name,
      country: item.location.country,
      temp: item.current.temp_c,
      text: item.current.condition.text,
      icon: item.current.condition.icon,
      wind: item.current.wind_kph,
      precip: item.current.precip_mm,
      humidity: item.current.humidity,
    };
  } else {
    console.log("Ошибка ввода");
  }
};

export const transformForecast = (item: any): Weather[] => {
  if (item) {
    const ans: Weather[] = [];
    const arr = item.forecast.forecastday.slice(1);

    for (let day of arr) {
      let obj: Partial<Weather> = {};
      obj.id = crypto.randomUUID();
      obj.date = new Date(day.date);
      obj.city = item.location.name;
      obj.country = item.location.country;
      obj.temp = day.hour[0].temp_c;
      obj.text = day.hour[0].condition.text;
      obj.icon = day.hour[0].condition.icon;
      obj.wind = day.hour[0].wind_kph;
      obj.precip = day.hour[0].precip_mm;
      obj.humidity = day.hour[0].humidity;

      //console.log(obj)
      ans.push(obj as Weather);
    }

    return ans;
  }
};
