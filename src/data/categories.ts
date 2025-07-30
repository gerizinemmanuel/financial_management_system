import type { Category } from "../types/Category";

export const categories: Category = {
  food: {
    title: "Alimentação",
    color: "blue",
    expense: true,
  },
  rent: {
    title: "Renda",
    color: "brown",
    expense: true,
  },
  salary: {
    title: "Salário",
    color: "green",
    expense: false,
  },
};
