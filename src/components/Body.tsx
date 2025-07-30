import { useState } from "react";
import { useEffect } from "react";
import { getCurrentMonth } from "../utils/dateFilter";
import { filterListByMonth } from "../utils/dateFilter";
import { categories } from "../data/categories";
import { items } from "../data/items";

import type { Item } from "../types/Item";

import TableArea from "./TableArea";
import InfoArea from "./InfoArea";
import FormArea from "./FormArea";

const Body = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newList = list;
    newList.push(item);
    setList(newList)
  }

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    filteredList.forEach((item) => {
      if (categories[item.category].expense) totalExpense += item.value;
      else totalIncome += item.value;
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
  }, []);
  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    filteredList.forEach((item) => {
      if (categories[item.category].expense) totalExpense += item.value;
      else totalIncome += item.value;
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [filteredList]);
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <div className="mx-auto max-w-245 mb-10">
      <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />
      <TableArea list={filteredList} />
      <FormArea categories={categories} addItem={handleAddItem}/>
    </div>
  );
};

export default Body;
