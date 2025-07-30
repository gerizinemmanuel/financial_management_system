import type { ColumnProps } from "../../types/ColumnProps";

const TH = ({ children, properties }: ColumnProps) => {
  return (
    <th className={`py-2.5 text-left ${properties ? properties : ""}`}>
      {children}
    </th>
  );
};

export default TH;
