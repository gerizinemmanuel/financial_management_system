import type { Item } from "../../types/Item";
import { categories } from "../../data/categories";

import { formatDate } from "../../utils/dateFilter";

import TableColumn from "./TableColumn";
type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  const bgCategory = `${categories[item.category].color}`;
  console.log(bgCategory);
  return (
    <tr>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <div
          className={`inline-block py-1.25 px-2.5 rounded-[5px] text-white`}
          style={{ backgroundColor: bgCategory }}
        >
          {categories[item.category].title}
        </div>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn
        properties={
          categories[item.category].expense ? "text-red-700" : "text-green-700"
        }
      >
        {item.value.toLocaleString("pt-pt", {
          style: "currency",
          currency: "MZN",
        })}
      </TableColumn>
    </tr>
  );
};

export default TableItem;
