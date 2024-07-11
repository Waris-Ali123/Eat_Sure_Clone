import React from "react";
import Header from './Header';
import Banner from './Banner'
import Brands from './Brands';
import Products from './Products';
import Brand_Products from './Brand_Products';
import SureSquad from './SureSquad';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Products />
      <Brands />
      <Brand_Products />
      <SureSquad />
    </div>
  );
}
