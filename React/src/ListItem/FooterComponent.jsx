

import React from 'react'

const FooterComponent = ({length}) => {

    const year =new Date().getFullYear()
  return (
    <div className='bottom'>

        <p>Copyrights &copy; {year} - {length} List Item</p>
      
    </div>
  )
}

export default FooterComponent
