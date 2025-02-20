import { useState } from "react"

export default function Changetext(){

    

    const [settext,newtext] = useState('Hello')

    function Text(e){

        e.preventDefault()

        newtext('submit')


    }
    function handclick(){

        newtext('Hello')
    }
   

    const [ishover,sethover] = useState(false)

    function over(){

        
        sethover(true)

    }
    function out(){

        sethover(false)
    }




    return(

        <div>

            <h1>{settext}</h1>

            <form action="">

                <input type="text" placeholder="Username"/><br></br><br></br>

                <button onClick={Text}>Login</button><br></br><br></br>
                

                <button style = {{backgroundColor: ishover? 'red': 'black'}}  onMouseOver={over}
                onMouseOut={out}
                onClick={handclick}
                >Register</button>

            </form>
        </div>
    )
}