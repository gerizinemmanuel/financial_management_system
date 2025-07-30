import type { Item } from "../types/Item";

export const getCurrentMonth = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split("-");

  console.log("primeira list: ", list);
  console.log("data de hoje:", date);
  const newList = list.filter(
    (item) =>
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
  );

  console.log("lista filtrada: ", newList);
  return newList;
};

export const formatDate = (date: Date): string => {
  const monthDay = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    weekDays[date.getDay()] +
    ", " +
    addZeroBefore(monthDay) +
    "/" +
    addZeroBefore(month) +
    "/" +
    year
  );
};

const addZeroBefore = (num: number): string =>
  num < 10 ? `0${num}` : `${num}`;

export const getMonthName = (index: number): string => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return months[index];
};

export const getFormattedMonth = (month: string): string => {
  const year = month.split("-")[0];
  const monthIndex = parseInt(month.split("-")[1]) - 1;

  const monthName = getMonthName(monthIndex);

  return `${monthName} de ${year}`;
};
