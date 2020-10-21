import React, { useState, useEffect } from 'react';
import Slider from "../components/BannerSlider/BannerSlider";
import TopSales from "../components/TopSales/TopSales";

function HomeScreen() {
  return (
      <>
        <Slider />
        <TopSales />
      </>
  );
}
export default HomeScreen;
