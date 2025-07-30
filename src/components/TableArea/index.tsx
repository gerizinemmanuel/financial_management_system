import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import type { Item } from "../../types/Item";

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
  return (
    <div className="p-5 bg-white shadow-[0px_0px_5px_#ccc] rounded-[10px] mt-5">
      <table className="w-full">
        <thead className="">
          <tr className="">
            <TableHeader properties="w-[20%]">Data</TableHeader>
            <TableHeader properties="w-[15%]">Categoria</TableHeader>
            <TableHeader properties="w-[50%]">Título</TableHeader>
            <TableHeader properties="w-[15%]">Valor</TableHeader>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return <TableItem item={item} key={list.indexOf(item)} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableArea;
