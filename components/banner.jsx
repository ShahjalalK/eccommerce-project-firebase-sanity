import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

export default function Banner() {
  return (
    <div className=" relative" >
      <div className=" absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel 
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
      >
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jovjd+f9L._SX3000_.jpg" alt="slider-1" />
                </div>
                <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71tIrZqybrL._SX3000_.jpg" alt="slider-2" />

                </div>
                <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TD5JLGhIL._SX3000_.jpg" alt="slider-3" />

                </div>
            </Carousel>
    </div>
  )
}
