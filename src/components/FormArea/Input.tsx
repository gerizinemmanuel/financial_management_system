import React from "react";

type Props = {
  type?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, value, id, onChange }: Props) => {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      value={value}
      id={id}
      className="bg-gray-200 rounded-[8px] h-10 px-3"
      onChange={onChange}
    />
  );
};

export default Input;
