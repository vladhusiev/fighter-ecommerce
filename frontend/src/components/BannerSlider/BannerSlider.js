import React from "react";
import "./BannerSlider.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/src/core/styles.scss";
import sliderImage_1 from "../../images/banner_1.jpg";
import sliderImage_2 from "../../images/banner_2.jpg";
import sliderImage_3 from "../../images/banner_3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <section class="banner" id="banner">
            <div class="container">
                <div class="slider">
                    <AutoplaySlider
                        bullets={false}
                        play={true}
                        interval={1500}
                        cancelOnInteraction={true}
                        className="slider"
                    >
                        <div data-src={sliderImage_1} />
                        <div data-src={sliderImage_2} />
                        <div data-src={sliderImage_3} />
                    </AutoplaySlider>
                </div>
            </div>
        </section>
    );
};

export default Slider;
