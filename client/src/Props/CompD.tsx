import { FC } from "react";

interface Iprops{
    Uname:string
    Uemail: string
}

export const CompD: FC<Iprops> = ({Uname,Uemail}) => {
  return (
    <div>
      <div>{Uname}</div>
      <div>{Uemail}</div>
    </div>
  );
};
