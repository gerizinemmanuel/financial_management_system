import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <h1 className={`text-3xl font-bold m-0 p-0 text-white pt-8`}>{children}</h1>
  );
};

export default Title;
