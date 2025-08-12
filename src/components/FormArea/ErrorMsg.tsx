import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ErrorMsg = ({ children }: Props) => {
  return (
    <p className="text-red-500 text-sm pl-2">
      {children || "Este campo é obrigatório!"}
    </p>
  );
};

export default ErrorMsg;
