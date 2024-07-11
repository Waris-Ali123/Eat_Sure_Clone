import React, { useState } from 'react'
import './Banner.css'
import Slider from './Slider';


function Banner() {

  const maxIndex = 4;


  let slides_data = [
    `${process.env.PUBLIC_URL}/images/Banners/banner1.avif`,
    `${process.env.PUBLIC_URL}/images/Banners/banner2.avif`,
    `${process.env.PUBLIC_URL}/images/Banners/banner3.avif`,
    `${process.env.PUBLIC_URL}/images/Banners/banner4.avif`,
    `${process.env.PUBLIC_URL}/images/Banners/banner5.avif`,
    `${process.env.PUBLIC_URL}/images/Banners/banner6.avif`,
    `${process.env.PUBLIC_URL}/images/Banners/banner7.avif`

  ];

  let slides = slides_data.map((slide, index) => (

    <div className='banner_images_block' key={index}>
      <img src={slide} alt={`Slide No:${index}`} />
    </div>
  ));


  return (
    <section className='banner_section'>
      <div className='banner_block '>

        <Slider maxIndex={maxIndex}  slides={slides} isDotRequired={true} width={2695} indi_width={385} items_to_be_displayed={3} no_of_items_to_scroll={1}/>

      </div>


    </section>
  )
}

export default Banner
