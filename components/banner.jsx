import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Banner() {
  return (
    <div className=" relative">
        <div className=" absolute bottom-0 w-full h-10 md:h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />
        <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        >
                <div>
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71tIrZqybrL._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TD5JLGhIL._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jovjd+f9L._SX3000_.jpg" alt="banner" />
                </div>
                
               
            </Carousel>
    </div>
  )
}
