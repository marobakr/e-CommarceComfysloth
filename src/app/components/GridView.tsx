'use client';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ProductsContext } from './productcontext';
import SearchIcon from '@mui/icons-material/Search';
// import { formatPrice } from '@/utils/helpers'
// import { fetchProducts } from './datafromapi';
const Grid = () => {
  const { products } = useContext(ProductsContext);


  return (
    <div className="our_card_row">
      <div className="our_card">
        {products.map((product) => {
          const { id, image, name, price } = product;
          if (id % 2 !== 0) {
            return (
              <div key={id} style={{ width: '100%' }} data-aos="zoom-in-down">
                <div className="card" key={id}>
                  <Link href={`/products/${id}`}>
                    <div className="img">
                      <img src={image} alt="" width={400} height={400} />
                      {/* <Image
                        src={image || '/images/product-11.jpeg'}
                        alt=""
                        width={100}
                        height={100}
                        decoding="async"
                      /> */}
                      <div className="icnos">
                        <SearchIcon />
                      </div>
                    </div>
                  </Link>
                  <div className="title__info">
                    <p>{name}</p>
                    {/* <p className='price_row'>{formatPrice(price)}</p> */}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Grid;
