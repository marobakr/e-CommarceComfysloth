'use client'
import React from 'react'
import { ProductsContext } from './productcontext'
import { useContext } from 'react'
const filters = () => {
  const { category, setCategory, categoryies, handleClick } =
    useContext(ProductsContext)
  // const click = (property) => {
  //   setCategory(property)
  // }
  return (
    <div className='left_card_category'>
      <input
        style={{ textTransform: 'lowercase' }}
        type='search'
        placeholder='Search'
        // value={valueText}
        // ref={defultTextSearch}
        // onInput={handleOnChangeSearch}
      />
      <div className='our_category'>
        <h4>Category</h4>
        <div className='our_button'>
          {/* {category} */}
          {categoryies.map((property, index) => {
            return (
              <button key={index} onClick={() => handleClick(property)}>
                {property}
              </button>
            )
          })}
        </div>
      </div>
      <div className='our_company'>
        <h4>company</h4>
        <select
          // ref={BrandValue}
          // value={brand}
          // onChange={UpdateState}
          // onClick={() => SelectBrandBox()}
          name='company'
          id='company'
        >
          <option value='all'>all</option>
          <option value='marcos'>marcos</option>
          <option value='lidy'>lidy</option>
          <option value='ikea'>ikea</option>
          <option value='careesa'>careesa</option>
        </select>
      </div>
      <div className='our_colors'>
        <h4>color</h4>
        <div className='colors'>
          <button>all</button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='our_price'>
        <h4>price</h4>
        {/* <p>$ {input}</p> */}
        <input
          min={0}
          max={3099}
          type='range'
          // value={input}
          // ref={defultValueInput}
          // onInput={() => Change()}
          // onInput={() => handleOnChangeInput()}
          step='1'
        />
      </div>
      <div className='selcet'>
        <label htmlFor='title'>free shipping</label>
        <input
          id='title'
          className='checkbox'
          type='checkbox'
          // checked={!checked}
        />
      </div>
      <div className='clear'>
        {/* <button onClick={() => handleClick()}>clear filters</button> */}
      </div>
    </div>
  )
}

export default filters
