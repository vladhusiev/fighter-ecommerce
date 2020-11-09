import React from 'react';
import Slider from "../components/BannerSlider/BannerSlider";
import DiscountsScreen from '../components/Discounts/DiscountsScreen';
import TopSales from "../components/TopSales/TopSales";
import Cta from "../components/Cta/Cta"


function HomeScreen() {
  return (
      <>
        <Slider />
        <TopSales />
        <DiscountsScreen />
        <Cta />
      </>
  );
}
export default HomeScreen;
