import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Link from 'next/link'
import ImageProduct1 from '/public/images/product-7.jpeg'
import ImageProduct2 from '/public/images/product-8.jpeg'
import ImageProduct3 from '/public/images/product-11.jpeg'
const FeaturedProducts = () => {
  return (
    <div className='featured_product'>
      <div className='main-title'>
        <h1>Featured Products</h1>
      </div>
      <div className='container'>
        <div className='rihgt' data-aos='fade-up' data-aos-duration='3000'>
          <div className='card'>
            <Link href='products/recNZ0koOqEmilmoz'>
              <div className='img'>
                <Image
                  src={ImageProduct1}
                  alt='product1'
                  loading='lazy'
                  layout=''
                />
                <div className='icnos'>
                  <SearchIcon />
                </div>
              </div>
            </Link>
            <div className='info'>
              <p className='title'>High-Back Bench</p>
              <p className='price'>$399.99</p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-in'>
          <div className='card'>
            <Link href='products/recrfxv3EwpvJwvjq'>
              <div className='img'>
                <Image src={ImageProduct2} alt='product2' loading='lazy' />
                <div className='icnos'>
                  <SearchIcon />
                </div>
              </div>
            </Link>
            <div className='info'>
              <p className='title'>Entertainment Center</p>
              <p className='price'>$599.99</p>
            </div>
          </div>
        </div>
        <div className='left' data-aos='fade-down' data-aos-duration='3000'>
          <div className='card'>
            <Link href='products/recoAJYUCuEKxcPSr'>
              <div className='img'>
                <Image src={ImageProduct3} alt='product3' loading='lazy' />
                <div className='icnos'>
                  <SearchIcon />
                </div>
              </div>
            </Link>
            <div className='info'>
              <p className='title'>Modern Bookshelf</p>
              <p className='price'>$319.99</p>
            </div>
          </div>
        </div>
      </div>
      <Link href='/products'>
        <button>all Products</button>
      </Link>
    </div>
  )
}

export default FeaturedProducts
