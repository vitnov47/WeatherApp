export interface Weather {
  id: string;
  date: Date;
  city: string;
  country: string;
  temp: number; // Градусы цельсия
  text: string; // Описание
  icon: string; // Иконка
  wind: number; // Ветер в км/ч
  precip: number; // Осадки в мм
  humidity: number; // Влажность в %
}
