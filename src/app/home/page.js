import React from 'react'
import Hero from '@/app/components/hero'
import FeaturedProducts from '@/app/components/featuredprodects'
import Service from '@/app/components/service'
import Contact from '@/app/components/contact'

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Service />
      <Contact />
    </>
  )
}

export default HomePage
