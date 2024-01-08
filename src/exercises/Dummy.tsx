import React from "react";

type Props = {
  children: React.ReactNode;
  name: string;
};

const Dummy: React.FC<Props> = ({ children, name }) => {
  return (
    <>
      <div>{children}</div>
      <div>{name}</div>
    </>
  );
};

export default Dummy;
