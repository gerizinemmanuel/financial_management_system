import type { Category } from "../../types/Category";
import type { Item } from "../../types/Item";

import Input from "./Input";
import FormItem from "./FormItem";
import ErrorMsg from "./ErrorMsg";
import { useEffect, useState } from "react";
import { itemize } from "../../utils/itemUtils";

type Props = {
  categories: Category;
  addItem: (item: Item) => void;
};

const FormArea = ({ categories, addItem }: Props) => {
  const today = new Date().toISOString().split("T")[0];
  const [dateField, setDateField] = useState(today);
  const [categoryField, setCategoryField] = useState("");
  const [isFilled, setIsFilled] = useState({
    date: true,
    title: true,
    category: true,
    value: true,
  });
  const [formData, setFormData] = useState({
    id: 0,
    date: dateField,
    category: categoryField,
    title: "",
    value: "",
  });

  useEffect(() => {
    setFormData({ ...formData, date: dateField });
  }, [dateField]);

  useEffect(() => {
    setFormData({ ...formData, category: categoryField });
  }, [categoryField]);

  const handleAddItem = () => {
    let hasErrors = false;

    if (!formData.date) {
      setIsFilled((prev) => ({ ...prev, date: false }));
      hasErrors = true;
    }
    if (!formData.category) {
      setIsFilled((prev) => ({ ...prev, category: false }));
      hasErrors = true;
    }
    if (!formData.title) {
      setIsFilled((prev) => ({ ...prev, title: false }));
      hasErrors = true;
    }
    if (!formData.value) {
      setIsFilled((prev) => ({ ...prev, value: false }));
      hasErrors = true;
    }
    if (!hasErrors) addItem(itemize(formData));
  };
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">Adicionar Item </h1>
      <div className="flex gap-10">
        <FormItem>
          <label htmlFor="date">Data</label>
          <Input
            id="date"
            type="date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
          {!isFilled.date && <ErrorMsg>Por favor, escolhe uma data.</ErrorMsg>}{" "}
        </FormItem>
        <FormItem>
          <label htmlFor="categories">Categoria</label>
          <select
            name="categoryField"
            value={categoryField}
            id="categories"
            className="bg-gray-200 rounded-[8px] h-10 p-1.5"
            onChange={(e) => {
              setCategoryField(e.target.value);
              setIsFilled((prev) => ({ ...prev, category: true }));
            }}
          >
            <option value="" disabled>
              Clica para escolher
            </option>
            {Object.entries(categories).map(([key, category]) => {
              // console.log(key);
              return (
                <option key={key} value={key}>
                  {category.title}
                </option>
              );
            })}
          </select>
          {!isFilled.category && (
            <ErrorMsg>Por favor, escolhe uma categoria.</ErrorMsg>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="title">Título</label>
          <Input
            id="title"
            type="text"
            placeholder="Introduz o título do movimento"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              setIsFilled((prev) => ({ ...prev, title: true }));
            }}
          />
          {!isFilled.title && (
            <ErrorMsg>Por favor, introduz o Título.</ErrorMsg>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="value">Valor</label>
          <Input
            id="value"
            type="number"
            placeholder="Introduz a quantia"
            onChange={(e) => {
              setFormData({ ...formData, value: e.target.value });
              setIsFilled((prev) => ({ ...prev, value: true }));
            }}
          />
          {!isFilled.value && <ErrorMsg>Por favor, introduz o valor.</ErrorMsg>}
        </FormItem>
      </div>
      <button
        className="mt-5 py-2 px-8 bg-[darkblue] rounded-[16px] font-bold text-white cursor-pointer"
        onClick={handleAddItem}
      >
        Adicionar
      </button>
    </div>
  );
};

export default FormArea;
