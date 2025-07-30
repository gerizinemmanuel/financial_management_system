import { getFormattedMonth } from "../utils/dateFilter";
import ResumeItem from "./ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const year = parseInt(currentMonth.split("-")[0]);
  const month = parseInt(currentMonth.split("-")[1]);

  const handlePreviousMonth = () => {
    const currentDate = new Date(year, month - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    const currentDate = new Date(year, month - 1, 1);

    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  return (
    <div className="bg-white shadow-[0px_0px_5px_#ccc] rounded-[10px] p-5 mt-[-40px] flex items-center">
      <div className="flex-1 flex items-center">
        <div
          className="w-10 text-[25px] cursor-pointer"
          onClick={handlePreviousMonth}
        >
          ⬅️
        </div>
        <div className="flex-1 text-center">
          {getFormattedMonth(currentMonth)}
        </div>
        <div
          className="w-10 text-[25px] cursor-pointer"
          onClick={handleNextMonth}
        >
          ➡️
        </div>
      </div>
      <div className="flex-2 flex justify-between px-10">
        <ResumeItem title={"Receitas"} value={income} />
        <ResumeItem title={"Despesas"} value={expense} />
        <ResumeItem
          title={"Balanço"}
          value={income - expense}
          properties={`${income - expense > 0 ? "text-green-700" : ""}${
            income - expense < 0 ? "text-red-700" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default InfoArea;
