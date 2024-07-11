import React, { useState } from "react";
import Header from "./Header";
import Brands from "./Brands";
import "./Specific_Product.css";
import products_data from "./products_data";
import brands_data from "./brands_data";
import { useParams } from "react-router-dom";

export function Sdetail_container_first_block({ brand_obj, prod_obj }) {
  // console.log('bol kya hua');
  return (
    <>
      <div className="s_first_block">
        <img src={brand_obj.image} alt="" />
        <p>by {brand_obj.name}</p>
        <div className="rating_block">
          <i className="fa-solid fa-star"></i>
          <p>{prod_obj.rating}</p>
        </div>
        <div className="share_block">
          <p>Share</p>
          <i class="fa-solid fa-share-nodes"></i>
        </div>
      </div>
    </>
  );
}

export function Sdetail_container_second_block({prod_obj }) {
  const [isShow, setIsShow] = useState(false);

  function handleIsShow() {
    setIsShow(!isShow);
  }

  return (
    <div className="s_second_block">
      <div className="prod_name">
        <svg
          width="20"
          height="20"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0.5H8C8.82843 0.5 9.5 1.17157 9.5 2V8C9.5 8.82843 8.82843 9.5 8 9.5H2C1.17157 9.5 0.5 8.82843 0.5 8V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
            fill="white"
            stroke="#43B500"
          ></path>
          <circle cx="5" cy="5" r="2" fill="#43B500"></circle>
        </svg>
        <h2>{prod_obj.name}</h2>
      </div>
      <div className="details_block ">
        {isShow
          ? prod_obj.description
          : prod_obj.description.substring(0, 100) + "..."}
        <span className="read_more_btn" onClick={handleIsShow}>
          {isShow ? "Read Less" : "Read More"}
        </span>
      </div>
    </div>
  );
}

export function Coupon_section() {
  const [isShowOffers, setIsShowOffers] = useState(false);

  function handleIsShowOffers() {
    setIsShowOffers(!isShowOffers);
  }

  return (
    <div className="coupon_section">
      <div className="offer">
        Get FLAT ₹50 Off- <span className="coupon_code">Use Code IAMSURE</span>
      </div>

      {!isShowOffers && (
        <button className="more_offer_btn" onClick={handleIsShowOffers}>
          + 12 Offers
        </button>
      )}
      {isShowOffers && (
        <div style={{ display: "flex" }}>
          <div className="offer">
            Get FLAT ₹50 Off-{" "}
            <span className="coupon_code">Use Code IAMSURE</span>
          </div>
          <div className="offer">
            Get FLAT ₹50 Off-{" "}
            <span className="coupon_code">Use Code IAMSURE</span>
          </div>
          <div className="offer">
            Get FLAT ₹50 Off-{" "}
            <span className="coupon_code">Use Code IAMSURE</span>
          </div>
          <div className="offer">
            Get FLAT ₹50 Off-{" "}
            <span className="coupon_code">Use Code IAMSURE</span>
          </div>
          <div className="offer">
            Get FLAT ₹50 Off-{" "}
            <span className="coupon_code">Use Code IAMSURE</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function Price_container({prod_obj}){
  return(
    <div className="s_price_container">
      <div className="s_price">
        <span>₹</span>
        <p>{prod_obj.price}</p>
      </div>
      <div className="s_add_btn">
        <p>Add</p>
      </div>
    </div>
  );
}

export default function Specific_Product() {
  const { id } = useParams();
  //   console.log(typeof(parseInt(id)));

  const prod = products_data.filter((p) => p.id === parseInt(id))[0];
  const sbrand = brands_data.filter((b) => b.brand == prod.brand)[0];
  console.log(sbrand);
  console.log(prod);

  return (
    <div>
      <Header />
      <Brands />
      <div className="horizontal_line"></div>
      <div className="sprod_block">
        <div className="simg_container">
          <img src={prod.image} alt="" />
        </div>

        <div className="sdetail_container">
          <Sdetail_container_first_block brand_obj={sbrand} prod_obj={prod} />
          <Sdetail_container_second_block prod_obj={prod} />
          <Coupon_section />
          <div style={{fontSize:'small',marginLeft:'10px'}}>or</div>
          {/* <div className="priceContainer"></div> */}
          <Price_container prod_obj={prod} />
        </div>
      </div>
    </div>
  );
}
