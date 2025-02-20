
import React from 'react'

const HeaderComponent = (props) => {
  return (
    <div className='box'>

        <h2 className='header'>To Do List - By {props.name}</h2>
      
    </div>
  )
}

export default HeaderComponent
