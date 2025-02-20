
import { useState } from "react"

export default function Count(){

    var [Count, getCount] = useState(0)

     function increase(){

        getCount(Count+1)
        

     }

     function decrease(){

        getCount(Count-1)
     }

    return(

        <>

        <h1>{Count}</h1>

        <button onClick={increase}>+</button>

        <button onClick={decrease}>-</button>
        
        </>
    )
}