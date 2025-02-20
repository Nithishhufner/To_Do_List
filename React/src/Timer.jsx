import { useState } from "react"

export default function Timer(){

    const now = new Date().toLocaleTimeString()

    const [settime,changetime] = useState(now)

    function change(){

        const newtime = new Date().toLocaleTimeString()

        changetime(newtime)

    }

    setInterval(change , 1000)

    return(

        <div>

            <h1>{now}</h1>

           <button onClick={change}>change Time</button>
           
        </div>
    )


    
}