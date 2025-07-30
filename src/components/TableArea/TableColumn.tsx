import clsx from "clsx";

import type { ColumnProps } from "../../types/ColumnProps";

const TableColumn = ({ children, properties }: ColumnProps) => {
  return <td className={clsx(`py-2.5 ${properties}`)}>{children}</td>;
};

export default TableColumn;
