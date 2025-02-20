
import { useState } from "react"
export default function Newform(){

    const [getname,setname] = useState('')

    const [name,lastvalue] = useState('')

    function handleclick(evt){

        setname(evt.target.value)


    }

    function oneclick(avg){

        lastvalue(avg.target.value)
    }

    function handclick(e){

       e.preventDefault()

        setname(getname)

        console.log(`${getname} ${name}`)


    }


    return(

        <form action="">

            <h1> hello {getname} {name}</h1>

            <input type="text"  placeholder="firstname" onChange={handleclick}/> <br></br><br></br>

            <input type="text"  placeholder="lastname" onChange={oneclick}/><br></br><br></br>

            <button onClick={handclick}>Submit</button>
        </form>
    )
}