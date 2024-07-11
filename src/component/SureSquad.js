import React from "react";
import "./SureSquad.css";

export default function SureSquad() {
  return (
    <div className="sure_squad_section">
      <div className="sure_squad_block">
        <div className="sure_squad_img_block">
          <div className="block1">
            <div className="heading_sure_squad_block">
              <div className="heading_sure_squad">SureSquad</div>
              <svg
                width="26"
                height="2"
                viewBox="0 0 26 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.447715 9.65645e-08 -9.65645e-08 0.447715 0 1C9.65645e-08 1.55228 0.447715 2 1 2L1 0ZM1 2L26 2L26 -4.37114e-06L1 0L1 2Z"
                  fill="url(#paint0_linear_3937_14731)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_3937_14731"
                    x1="1"
                    y1="1.5"
                    x2="26"
                    y2="1.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="sure_squad_title">EatSure's Loyalty Program</div>
            <div className="sure_squad_btn">
              <a className="sure_squad_link">Learn about sure squad</a>
            </div>
          </div>
          <div className="block2">
            <div className="sub_block1">
              <div className="free_delivery">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity=".2"
                    cx="18"
                    cy="18"
                    r="18"
                    fill="#fff"
                  ></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.33 11.71a2.117 2.117 0 1 1-4.066-1.184 2.117 2.117 0 0 1 4.065 1.184zm-5.362 6.767c1.543 1.697 2.25 4.104 1.724 6.427a1.3 1.3 0 1 1-2.537-.576c.382-1.681-.27-3.48-1.598-4.562-.952-.776-1.513-2.432-.455-3.683l1.506-1.783.001-.001c1.266-1.493 3.437-1.194 4.505.155.74.936 1.51 1.54 2.84 1.827a1.3 1.3 0 0 1-.55 2.542c-1.727-.373-2.895-1.157-3.836-2.176l-1.6 1.83zm8.402 4.839a1.95 1.95 0 1 1-3.9 0 1.95 1.95 0 0 1 3.9 0zm1.734 0a3.684 3.684 0 1 1-7.368 0 3.684 3.684 0 0 1 7.368 0zm-15.387 1.95a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9zm0 1.734a3.684 3.684 0 1 0 0-7.369 3.684 3.684 0 0 0 0 7.369zm.856-17.46a1.517 1.517 0 0 0-2.135.211l-2.094 2.553a1.517 1.517 0 0 0 .21 2.135l2.553 2.094a1.517 1.517 0 0 0 2.135-.21l2.094-2.553a1.517 1.517 0 0 0-.21-2.135L13.573 9.54z"
                    fill="url(#bnvicq45pa)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="bnvicq45pa"
                      x1="18.552"
                      y1="9"
                      x2="18.552"
                      y2="27"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#CBCCFF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="free_delivery_content">
                  <h4>Free Delivery</h4>
                  <p>above ₹199</p>
                </div>
              </div>

              <div className="free_dishes">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.2"
                    cx="16"
                    cy="16"
                    r="16"
                    fill="white"
                  ></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.8876 16.0097V13.1714H15.304V16.0097H8.70729C8.29588 15.9377 8 15.6061 8 15.2256V13.9633C8 13.7447 8.09581 13.5468 8.25361 13.4028C8.40859 13.2614 8.62839 13.1714 8.86509 13.1714H13.0159C12.9745 13.144 12.9323 13.1157 12.889 13.0866C12.1451 12.5724 11.4491 11.9734 10.9701 11.3744C10.398 10.6597 10.1134 9.91411 10.3304 9.22254C10.3924 9.02458 10.4967 8.83434 10.6488 8.65437C10.9109 8.33558 11.2406 8.1402 11.6182 8.05279C12.2184 7.91139 12.8806 8.0605 13.5287 8.42299C14.081 8.7315 14.639 9.20197 15.1321 9.77014C15.597 10.3023 16.0141 10.9322 16.3241 11.6058C16.6453 11.2098 17.0116 10.8499 17.392 10.5491C17.9049 10.1378 18.4572 9.82156 18.9729 9.63902C19.6013 9.41793 20.2071 9.38708 20.7087 9.59789C21.0299 9.73672 21.292 9.96038 21.4695 10.2817C21.5682 10.4617 21.6245 10.6468 21.6471 10.8371C21.7147 11.4798 21.3427 12.0839 20.7284 12.6161C20.503 12.8089 20.2437 12.9966 19.962 13.1714H23.1349C23.3716 13.1714 23.5858 13.2614 23.7436 13.4028L23.7464 13.4079C23.9042 13.5493 24 13.7473 24 13.9633V15.2256C24 15.6061 23.6985 15.9351 23.2927 16.0097H16.8876ZM23.2955 17.4545V23.2544C23.2955 23.4601 23.2054 23.6452 23.056 23.7815C22.9095 23.9177 22.7066 24 22.4812 24H16.8876V17.4545H23.2955ZM17.3216 12.8218C17.5837 12.7267 17.8542 12.6161 18.1219 12.4927C18.7052 12.2253 19.2575 11.9065 19.6435 11.5723C19.9197 11.3332 20.0944 11.1173 20.0803 10.9733C20.0784 10.9613 20.0728 10.9476 20.0634 10.9322C20.054 10.915 20.0493 10.9065 20.0493 10.9065C19.9591 10.8679 19.776 10.8988 19.5421 10.981C19.1983 11.1044 18.8094 11.3307 18.4347 11.6315C18.0176 11.9631 17.6259 12.3719 17.3216 12.8218ZM15.3068 17.4545V24H9.52448C9.30187 24 9.09616 23.9177 8.94681 23.7815C8.882 23.7223 8.83128 23.6555 8.79465 23.5835C8.74111 23.4858 8.71011 23.3727 8.71011 23.2544V17.4545H15.3068ZM13.8415 11.94C14.2557 12.2279 14.684 12.485 15.087 12.6932C14.839 11.958 14.4023 11.2484 13.8979 10.6674C13.5146 10.2252 13.1004 9.87297 12.7087 9.65188C12.4156 9.48991 12.1705 9.40764 12.0155 9.44364C11.976 9.45392 11.9394 9.47963 11.9028 9.52333C11.8802 9.55076 11.8633 9.58161 11.8521 9.61589C11.7844 9.83441 11.9479 10.1609 12.2437 10.5286C12.627 11.0093 13.2103 11.5029 13.8415 11.94Z"
                    fill="url(#paint0_linear_3937_14711)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_3937_14711"
                      x1="16"
                      y1="8"
                      x2="16"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop offset="1" stop-color="#CBCCFF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="free_delivery_content">
                  <h4>Free Dishes</h4>
                  <p>above ₹299</p>
                </div>
              </div>
            </div>
            <div className="sub_block2">
              <svg
                width="188"
                height="20"
                viewBox="0 0 188 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0.5H1.24831L1.53886 1.19326L8.05429 16.7394C8.75517 18.4117 10.3913 19.5 12.2045 19.5H175.795C177.609 19.5 179.245 18.4117 179.946 16.7394L186.461 1.19327L186.752 0.5H186H2Z"
                  fill="#fff"
                  stroke="#fff"
                ></path>
              </svg>
              <p>No Joining fees required</p>
              <div>Earn SurePoints to join the Squad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className='sure_squad_section'>
//     <img src={`${process.env.PUBLIC_URL}/images/SureSquad.png`} alt="" />
// </div>
