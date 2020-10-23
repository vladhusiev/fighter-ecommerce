import React, { useState, useEffect } from 'react';
import Slider from "../components/BannerSlider/BannerSlider";
import DiscountsScreen from '../components/Discounts/DiscountsScreen';
import TopSales from "../components/TopSales/TopSales";


function HomeScreen() {
  return (
      <>
        <Slider />
        <TopSales />
        <DiscountsScreen />
      </>
  );
}
export default HomeScreen;
