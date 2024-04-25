import React from 'react';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Carousel.css';

const Carousel: React.FC<ICarouselProps> = ({ slides, className }) => {
  return (
    <CarouselComponent
      centerMode={true}
      infiniteLoop={true}
      centerSlidePercentage={70}
      statusFormatter={() => ''}
      showIndicators={true}
      showThumbs={false}
      interval={1}
      className={`carousel-container ${className ? className : ''}`}
    >
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide} alt="/" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
        );
      })}
    </CarouselComponent>
  );
};

export default Carousel;

interface ICarouselProps {
  slides: string[];
  className?: string;
}
