import type { Category } from "../../types/Category";

type Props = Record<string, Category>;

const FormArea = ({ categories }: Props) => {
  return (
    <div>
      <select name="" id=""></select>
      <input className="border-2" type="text" placeholder="Introduz um texto" />
    </div>
  );
};

export default FormArea;
