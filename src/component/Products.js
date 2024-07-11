import React from 'react'
import './Products.css'
import Slider from './Slider';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import products_data from './products_data';

export default function Products() {


    
    // console.log(products_data);
    
    

    // console.log(products_data);

    let product_to_slide = products_data.map((product, index) => (

            <Link to={`/Specific_Product/${product.id}`} className='linking'>
        <div className='product_card' key={index} >

            
            <div className='product_image'>
                <img src={product.image} alt="its an image" />
            </div>
            <div className='product_body'>

                <div className='product_name_container'>
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0.5H8C8.82843 0.5 9.5 1.17157 9.5 2V8C9.5 8.82843 8.82843 9.5 8 9.5H2C1.17157 9.5 0.5 8.82843 0.5 8V2C0.5 1.17157 1.17157 0.5 2 0.5Z" fill="white" stroke="#43B500"></path><circle cx="5" cy="5" r="2" fill="#43B500"></circle></svg>
                    <p className='product_name'>{product.name}</p>
                </div>

                <div className='price_container'>
                    <div className='price_block'>
                        <label htmlFor="price">₹</label>
                        <p> {product.price}</p>
                        </div>
                    <button className='add_btn'>Add</button>
                </div>
            </div>
        </div>
            </Link>
    ))




    return (

        <section className='product_section_top_most_container'>

            <div className='product_section'>
                <h1 className='products_heading'>You can try</h1>

                <Slider maxIndex={1} slides={product_to_slide} isDotRequired={false} width={1386} indi_width={198} items_to_be_displayed={6} />
            </div>
        </section>
    )
}
