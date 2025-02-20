
import { useState } from "react"
import Shopping from "./Shopping"
import {v4 as uuid} from "react"
export default function Shoppinglist(){

    const [items,setitems] = useState([
        {id:uuid , product:'banana' ,quantity: 8},

        {id:uuid , product:'eggs' ,quantity: 10}
    ])

    const additem = (item)=>{

        setitems((curritem)=>{

            return[ ,
                ...items , {...item , id: uuid}
            ]
        })
    }

    return(

        <>

        <h1>Shopping List</h1>

        <ul>

            {items.map((i)=>(

                <li>{i.product}-{i.quantity}</li>
            ))}

            
        </ul>

        <Shopping additem = {additem}/>
        
        </>
    )
}