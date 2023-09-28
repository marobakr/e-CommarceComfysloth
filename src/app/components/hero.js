/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='landing_padge'>
      <div className='container'>
        <div className='right_section'>
          <h1>Design Your Comfort Zone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link href='products'>
            <button>shop now</button>
          </Link>
        </div>
        <div className='left_section'>
          <div
            data-aos='fade-left'
            data-aos-anchor='#example-anchor'
            data-aos-offset='500'
            data-aos-duration='500'
          >
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg'
              alt='main_image'
            />
          </div>
          <div
            data-aos='fade-right'
            data-aos-anchor='#example-anchor'
            data-aos-offset='500'
            data-aos-duration='500'
            className='alt_img'
          >
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
