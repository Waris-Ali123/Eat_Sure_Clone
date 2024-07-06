import React from 'react'
import './Products.css'
import Slider from './Slider';

export default function Products() {

    const products_data = [
        {
            id: 1,
            name: 'Classic Paneer Salad Wrap',
            price: 250,
            image: `${process.env.PUBLIC_URL}/images/Products/Cheese Melt Paneer.avif`,
            brand: 'Faasos',
            rating: 4.7,
            newlyLaunched: false,
        },
        {
            id: 2,
            name: 'Royal Paneer Biryani',
            price: 320,
            image: `${process.env.PUBLIC_URL}/images/Products/Dragonfire Paneer.avif`,
            brand: 'Behrouz Biryani',
            rating: 4.6,
            newlyLaunched: true,
        },
        {
            id: 3,
            name: 'Mughlai Paneer Biryani',
            price: 310,
            image: `${process.env.PUBLIC_URL}/images/Products/Maharaja Veg Pizza.avif`,
            brand: 'Behrouz Biryani',
            rating: 4.7,
            newlyLaunched: true,
        },
        {
            id: 4,
            name: 'Spicy Tikka Biryani',
            price: 315,
            image: `${process.env.PUBLIC_URL}/images/Products/Paneer Tikka Rice.avif`,
            brand: 'Behrouz Biryani',
            rating: 4.8,
            newlyLaunched: false,
        },
        {
            id: 5,
            name: 'Paneer Delight Salad',
            price: 270,
            image: `${process.env.PUBLIC_URL}/images/Products/Spicy Paneer Salad.avif`,
            brand: 'Behrouz Biryani',
            rating: 4.6,
            newlyLaunched: true,
        },
        {
            id: 6,
            name: 'Tandoori Paneer Wrap',
            price: 290,
            image: `${process.env.PUBLIC_URL}/images/Products/Tandoori Paneer.avif`,
            brand: 'Behrouz Biryani',
            rating: 4.9,
            newlyLaunched: false,
        },
        {
            id: 7,
            name: 'Zaikedaar Paneer Feast',
            price: 325,
            image: `${process.env.PUBLIC_URL}/images/Products/Zaikedaar Paneer.avif`,
            brand: 'Behrouz Biryani',
            rating: 4.7,
            newlyLaunched: true,
        },
    ];
    

    console.log(products_data);

    let product_to_slide = products_data.map((product, index) => (

        <div className='product_card' key={index}>
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
