'use client'
import React, { useState, useEffect, createContext } from 'react'
import { ProductsData } from './datafromapi'
// create context
export const ProductsContext = createContext()
const ProductsContextPrivider = ({ children }) => {
  // const [test, setTest] = useState([])
  const [products, setProducts] = useState(ProductsData)
  const [company, setCompany] = useState('location (any)')
  const [companyies, setCountries] = useState([])
  const [category, setCategory] = useState('all')
  const [categoryies, setCategoryies] = useState([])
  const [price, setPrice] = useState('price range (any)')
  const [loading, setLoading] = useState(false)

  // return categoryies
  useEffect(() => {
    const allProperties = products.map((product) => {
      return product.category
    })
    // remove duplicatea from an array category
    const uniqueProerties = ['all ', ...new Set(allProperties)]
    // set Properties state
    setCategoryies(uniqueProerties)
  }, [])

  // return company
  useEffect(() => {
    const allCompany = products.map((product) => {
      return product.company
    })
    // remove duplicatea from an array company
    const uniqueCompanyies = ['all ', ...new Set(allCompany)]
    // set setCountries state
    setCountries(uniqueCompanyies)
  }, [])
  const handleClick = (property) => {
    // create a function that check if the option has a value "any" becouse this "any" will to show all houses wethout fillter
    // const isDefult = (str) => {
    //   return str.split(' ').includes('(any)')
    // }
    const isDefult = (str) => {
      return str.split(' ').includes('(all)')
    }

    // console.log('clicked')
    const newHouses = ProductsData.filter((house) => {
      // if all value are selected
      if (house.category === category) {
        return house
      }
    })
    console.log(newHouses)

    setTimeout(() => {
      return newHouses.length < 1 ? setProducts([]) : setProducts(newHouses)
    })
    setCategory(property)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        category,
        setCategory,
        categoryies,
        company,
        setCompany,
        companyies,
        handleClick,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextPrivider
