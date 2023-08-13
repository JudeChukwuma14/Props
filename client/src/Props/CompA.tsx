import {FC} from 'react'
import { CompB } from './CompB'



export const CompA:FC= () => {
    const Uname = "Ikechuwku"
  return (
    <div>

        <CompB Uname= {Uname}/>
    </div>
  )
}
