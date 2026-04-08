export const transformToWeekday = (day: number): string => {
  const week = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
  };
  return week[day];
};
