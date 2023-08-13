import {FC} from 'react'
import { CompC } from './CompC'
interface Iprops{
    Uname: string
}

export const CompB:FC<Iprops> = ({Uname}) => {
    const Uemail = 'ikechukwu@gmail.com'
  return (
    <div>
        <CompC Uname= {Uname} Uemail= {Uemail} />
    </div>
  )
}
