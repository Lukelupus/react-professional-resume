import React, { useState, useEffect } from "react"
import { SliderData } from "./SliderData.js"
import SliderContent from "./SliderContent.jsx"
import Arrows from "./Arrows.jsx"
import Dots from "./Dots.jsx"



const length = SliderData.length -1

function ImageSlider(slides) {

    const [current, setCurrent] = useState(0)
    
   
    function prevSlide() {
        setCurrent(current < 1 ? length : current - 1)
    }

    function nextSlide() {
        setCurrent(current === length ? 0 : current + 1)
    }
    console.log(current);



    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent(current === length ? 0 : current + 1);
        }, 5000);
        return () => clearInterval(interval);
      }, [current]);



    if(Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (<>
        <div className="slider-container">
            <SliderContent 
                activeIndex={current}
                displayImage={SliderData}
            />
            <Arrows 
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
            <Dots 
                activeIndex={current}
                sliderImage={SliderData}
                onclick={(current) => setCurrent(current)}
            />
        </div>

            </>)
}

export default ImageSlider