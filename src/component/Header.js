import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <>
            <div id="header_section">
                <header id='header_nav'>
                    <div className="header_nav_content">

                        <div className="left_block">
                            <a href="https://www.eatsure.com/indore/annapoorna-fc">
                                <img id='logo' src="https://product-assets.faasos.io/eatsure/production/es-brandcolor-logo.svg" alt="" />
                            </a>

                            <div className='address_block'>
                                <div className='above_block'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <div className='text_location'>Sudama Nagar, Indore </div>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>

                                <div className='down_block'>
                                    <p>Annapoorna FC, Indore</p>
                                </div>
                            </div>

                        </div>

                        <div className="right_block">
                            <div className='phone_detail'>
                                <i class="fa-solid fa-phone"></i>
                                <a href="/">
                                    <div className='call_link'>Call us at <br />8602655070</div>
                                </a>
                            </div>

                            <div className='search_block'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <span>Search</span>
                            </div>

                            <div className='cart_block'>
                                <i class="fa-solid fa-shopping-bag"></i>
                                <span>Search</span>
                            </div>

                            <div className="user_profile_block">
                                <img className='profile_image' src="https://st4.depositphotos.com/14903220/22197/v/380/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg" alt="" />
                                <a href="">Sign In</a>
                            </div>

                            <div className="my_profile_button">
                                <i class="fa-solid fa-bars"></i>
                                <span>My Profile</span>
                            </div>
                        </div>

                    </div>
                </header>

                <div className='slot_button_container' >
                    <div className="slot_buttons">
                        <div className="delivery_slot">
                            <div className="delivery">
                                <i class="fa-solid fa-person-biking"></i>
                                <span>Delivery</span>
                            </div>
                            <div className="delivery_time">
                                <span>Now</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className="train_slot">
                            <i class="fa-solid fa-train"></i>
                            <span>Food On Train</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
