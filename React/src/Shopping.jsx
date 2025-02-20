
import { useState } from "react"

export default function Shopping({additem}){

    const[formdata,setformdata] = useState({product:'',quantity:0})

    function handlechange(evt){

        setformdata((currdata=>{

            return{

                ...currdata , [evt.target.name] : evt.target.value
            }
        }))
    }

    const handlesubmit =(e)=>{

        e.preventDefault()

        additem(formdata)

        setformdata({product:'' , quantity:0})
    }
    return(

        <>

        

        <form action="" onSubmit={handlesubmit}>

           <h1>Product is :{formdata.product} and Quantity is :{formdata.quantity}</h1>

            <label htmlFor="product">Product Name </label>

            <input type="text" 

            placeholder="Product Name"

            id="product"

            name="product"

            value={formdata.product}

            onChange={handlechange}
            
            /> <br></br><br></br>

        

        <label htmlFor="quantity">Quantity </label>

        <input type="number" 

        placeholder="Quantity"

        id="quantity"

        name="quantity"

        value={formdata.quantity}

        onChange={handlechange}

        /> <br></br><br></br>

        <button>Add Item</button>

        
        </form>

    </>
    )
}
