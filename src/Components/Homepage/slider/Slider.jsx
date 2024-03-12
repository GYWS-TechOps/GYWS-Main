import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselData from "./carouselData";
import Typewriter from './Typewriter';

function Slider() {


  return (
    <>
      <div>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          timeInterval={5000}
          autoPlay={true}
          interval={4000}
          swipeable={false}
          infiniteLoop={true}
          stopOnHover={true}
          animationHandler={'fade'}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          {
            carouselData.map((item, index) => {
              return (
                <div key={index} className='home-carousel-item'>
                  <div className="home-carousel-item-image">
                    <img src={item.img} alt={item.alt} className='carousel_image' />
                    <div className='message'>
                      <div>
                        <Typewriter text={item.legend.toUpperCase()} delay={100} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>

      </div>

    </>
  )
}

export default Slider