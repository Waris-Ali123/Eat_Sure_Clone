import React from 'react'
import './Restaurants.css'

export default function Restaurants() {
    const brandsData = [
        { name: "Homestyle", image: `${process.env.PUBLIC_URL}/images/brands/faasos.jpeg`, category: "Lunch Box" },
        { name: "Ice Cream", image: `${process.env.PUBLIC_URL}/images/brands/IceCreamBar.jpeg`, category: "Ice Cream" },
        { name: "Wraps", image: `${process.env.PUBLIC_URL}/images/brands/FirangiBake.jpeg`, category: "Wraps" },
        { name: "Pizzas", image: `${process.env.PUBLIC_URL}/images/brands/ThePizzaProject.png`, category: "Pizzas" },
        { name: "Pasta & Grill", image: `${process.env.PUBLIC_URL}/images/brands/VitalBowls.jpeg`, category: "Pasta & Grill" },
        { name: "Hyderabadi Biryani", image: `${process.env.PUBLIC_URL}/images/brands/TheBiryaniLife.jpeg`, category: "Hyderabadi Biryani" },
        { name: "Royal", image: `${process.env.PUBLIC_URL}/images/brands/Royal.jpeg`, category: "Royal" },
        { name: "Rice Bowl", image: `${process.env.PUBLIC_URL}/images/brands/RiceBowl.jpeg`, category: "Rice Bowl" },
        { name: "Veg Meals", image: `${process.env.PUBLIC_URL}/images/brands/OverStory.jpeg`, category: "Veg Meals" },
        { name: "Desserts", image: `${process.env.PUBLIC_URL}/images/brands/faasosMain.jpeg`, category: "Desserts" },
        { name: "Loaded Meals", image: `${process.env.PUBLIC_URL}/images/brands/LunchBoxNormal.jpeg`, category: "Loaded Meals" },
        { name: "Bowls", image: `${process.env.PUBLIC_URL}/images/brands/OverStory.jpeg`, category: "Bowls" },
        { name: "North Indian Meals", image: `${process.env.PUBLIC_URL}/images/brands/MakhaniDarbat.jpeg`, category: "North Indian Meals" },
        { name: "Pizza", image: `${process.env.PUBLIC_URL}/images/brands/ThePizzaProject.png`, category: "Pizza" },
    ];






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
