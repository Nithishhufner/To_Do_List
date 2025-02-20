import React from 'react'
import "./Additem.css"

const AddItem = ({newitem,setnewitem,handlesubmit}) => {
  return (

    <div className='addbox' onSubmit={handlesubmit}>
    
    <form action='' className='addform'>

        <input type="text" placeholder='Add Item' className='addinput'autoFocus required value={newitem} onChange={(e)=>setnewitem(e.target.value)}/> 
        <button className='click'>Submit</button>
    </form>
    </div>
  )
}

export default AddItem
