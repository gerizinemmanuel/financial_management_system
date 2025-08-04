import type { Category } from "../../types/Category";
import type { Item } from "../../types/Item";

import Input from "./Input";
import FormItem from "./FormItem";
import { useState } from "react";

type Props = {
  categories: Category;
  addItem: (item: Item) => void;
};

const FormArea = ({ categories, addItem }: Props) => {
  const [hasErrors, setHasErrors] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    title: "",
    value: "",
  });
  const handleAddItem = () => {
    if (!hasErrors) addItem(item);
  };
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">Adicionar Item</h1>
      <div className="flex gap-10">
        <FormItem>
          <label htmlFor="date">Data</label>
          <Input
            id="date"
            type="date"
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
            }}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="categories">Categoria</label>
          <select
            name="category"
            id="categories"
            className="bg-gray-200 rounded-[8px] h-10 p-1.5"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="" disabled selected>
              Clica para escolher
            </option>
            {Object.entries(categories).map(([key, category]) => {
              return <option value={key}>{category.title}</option>;
            })}
          </select>
        </FormItem>
        <FormItem>
          <label htmlFor="title">Título</label>
          <Input
            id="title"
            type="text"
            placeholder="Introduz o título do movimento"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </FormItem>
        <FormItem>
          <label htmlFor="value">Título</label>
          <Input
            id="value"
            type="text"
            placeholder="Introduz a quantia"
            onChange={(e) =>
              setFormData({ ...formData, value: e.target.value })
            }
          />
        </FormItem>
      </div>
      <button
        className="mt-5 py-2 px-8 bg-[darkblue] rounded-[16px] font-bold text-white cursor-pointer"
        onClick={() => handleAddItem}
      >
        Adicionar
      </button>
    </div>
  );
};

export default FormArea;
