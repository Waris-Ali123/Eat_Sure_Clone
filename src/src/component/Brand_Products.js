import React from 'react'
import './Brand_Products.css'
import Slider from './Slider'

export default function Brand_Products() {

  let brand_prods = [
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },
    {
      brand: "Faasos",
      title: "Faasos Wrap",
      description: "Indulgent wraps loaded with high protein",
      category: "Wraps",
      image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
      brand_logo: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`
    },

  ];


  let brand_prods_div = brand_prods.map((elem, index) => (
    <div className='specific_block' key={index}>
      <div className='prod_image'>
        <img src={elem.image} alt="" />
      </div>

      <div className='brand_prod_body'>

        <div className='brand_logo'>
          <img src={elem.brand_logo} alt={elem.title} />
        </div>

        <div className='brand_details'>
          <div className="brand_name_block">
            <h3>{elem.brand}</h3>
            <i class="fa-solid fa-angle-right"></i>
          </div>

          <p className='brand_desc'>{elem.description}</p>
        </div>

      </div>
    </div>

  ))


  return (
    <div className='brand_products_section'>
      {/* {brand_prods_div} */}
      <Slider maxIndex={10} slides={brand_prods_div} isDotRequired={true} width={3850} indi_width={350} no_of_items_to_scroll={3} items_to_be_displayed={3}/>

      <h3 className='brand_product_bottom_text'>Order Food Online from Trusted Restaurants in <span style={{color: 'rgb(73, 69, 190)' }}>annapoorna-fc</span> </h3>
    </div>
  )
}
