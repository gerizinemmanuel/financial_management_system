import type { Category } from "../../types/Category";
import type { Item } from "../../types/Item";

import Input from "./input";
import FormItem from "./FormItem";

type Props = {
  categories: Category;
  addItem: (item:Item)=> void;
}


const FormArea = ({ categories, addItem }: Props) => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold p-5">Adicionar Item</h1>
      <div className="flex gap-10">
        <FormItem>
          <label htmlFor="date">Data</label>
          <Input id="date" type="date"/>
        </FormItem>
        <FormItem>
          <label htmlFor="categories">Categoria</label>
          <select name="category" id="categories" className="bg-gray-200 rounded-[8px] h-10 p-1.5">
            <option value="" disabled selected >Clica para escolher</option>
            {
              Object.entries(categories).map(([key, category])=>{
                return <option value={key}>{category.title}</option>
              })
            }
          </select>
        </FormItem>
        <FormItem>
          <label htmlFor="title" >Título</label>
          <Input id="title" type="text" placeholder="Introduz o título do movimento" />
        </FormItem>
        <FormItem>
          <label htmlFor="amount">Título</label>
          <Input id="amount" type="text" placeholder="Introduz a quantia" />
        </FormItem>
      </div>
      <button className="mt-5 py-2 px-8 bg-[darkblue] rounded-[16px] font-bold text-white cursor-pointer">Adicionar</button>
    </div>

  );
};

export default FormArea;
