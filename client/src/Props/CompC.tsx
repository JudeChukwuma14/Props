import {FC} from 'react'
import { CompD } from './CompD';

interface Iprops {
    Uname : string;
    Uemail : string;
}

export const CompC:FC <Iprops> = ({Uname, Uemail}) => {
  return (
    <div>CompC
        <CompD Uname={Uname} Uemail={Uemail} />
    </div>
  )
}
