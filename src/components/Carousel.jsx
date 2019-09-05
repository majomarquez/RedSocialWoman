import React from 'react';
import '../assets/styles/components/Carousel.scss'

const Carousel = ({ childrens }) => (
  <div className="carousel">
    <div className="carousel__container">
      {childrens}
    </div>
  </div>
);

export default Carousel;


