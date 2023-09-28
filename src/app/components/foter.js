import React from 'react'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <div className='footer'>
      <div className='container'>
        <h5>
          {currentDate}
          <span>marwanAbubakr</span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
    </div>
  )
}

export default Footer
