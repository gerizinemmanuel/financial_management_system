type Props = {
  title: string;
  value: number;
  properties?: string;
};

const ResumeItem = ({ title, value, properties }: Props) => {
  return (
    <div className="">
      <h1 className="font-bold mb-1 text-center text-gray-500">{title}</h1>
      <p className={`text-center font-bold ${properties ? properties : ""}`}>
        {value.toLocaleString("pt-pt", {
          style: "currency",
          currency: "MZN",
        })}
      </p>
    </div>
  );
};

export default ResumeItem;
