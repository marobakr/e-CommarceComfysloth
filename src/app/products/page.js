import React from 'react'
import Filterproducts from '../components/filterproducts'
import Grid from '../components/GridView'
const page = () => {
  return (
    <div className='product'>
      <div className='container'>
        <div className='right_card_product'>
          <Filterproducts />
        </div>
        <Grid />
      </div>
    </div>
  )
}

export default page
