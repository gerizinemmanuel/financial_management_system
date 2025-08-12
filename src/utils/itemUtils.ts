import type { Item } from "../types/Item";

type ObjectItem = {
  id: number;
  date: string;
  category: string;
  title: string;
  value: string;
};

export const itemize = (item: ObjectItem): Item => {
  return {
    id: item.id,
    date: new Date(item.date),
    category: item.category,
    title: item.title,
    value: Number(item.value),
  };
};

export const generateID = (items: Item[]): number => {
  return items[items.length - 1].id + 1;
};
