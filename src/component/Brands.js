import React from 'react'
import './Brands.css'
import brandsData from './brands_data';

export default function Brands() {
    
    
    // console.log(brandsData);
    






    return (
        <section className='brand_section' >

            <div className="brand_heading_container">
                <div className='brand_heading'>Choose From Trusted Restaurants in <span>One Single Order.</span></div>
                <a href="/" className='brands_link'>Explore Restaurant <i class="fa-solid fa-angle-right"></i></a>
            </div>

            <div className='brand_body'>
                {brandsData.map((brand, index) => (
                    <div className='brand_data' key={index} >
                        <img className='brand_image' src={brand.image} alt={brand.name} />
                        <p className='brand_name'>{brand.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
