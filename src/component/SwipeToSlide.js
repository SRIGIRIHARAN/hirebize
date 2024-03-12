// import React, { Component } from "react";
// import  '../App.css'
// import { Card, Col, Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'

// function SwipeToSlide() {
//   const settings = {
//     className: "center",
//     infinite: true,
//     slidesToShow: 5,
//     swipeToSlide: true,
//     afterChange: function(index) {
//       console.log(
//         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//       );
//     }
//   };
//   return (
//     <div className="slider-container">
//         <Slider {...settings}>
//             <Card style={{ width: '18rem', height:'28rem' }}>
//                 <Card.Img variant="top" src="./assets/government.png" fluid/>
//                     <Card.Body>
//                         <Card.Title>Government</Card.Title>
//                             <Card.Text>
//                                 Pellentesque vitae eros vel purus pellentesque faucibus. 
//                                 Suspendisse tempus molestie felis, eu consectetur lorem ullamcorper sit amet. 
//                                 Sed tempus dignissim lectus ut blandit.
//                             </Card.Text>
//                     </Card.Body>
//             </Card>
//         </Slider>
//     </div>
//   );
// }

// export default SwipeToSlide;

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: 'Government',
      text: 'Pellentesque vitae eros vel purus pellentesque faucibus. Suspendisse tempus molestie felis, eu consectetur lorem ullamcorper sit amet. Sed tempus dignissim lectus ut blandit.',
      image: './assets/government.png'
    },
    // Add more cards here if needed
  ];

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <div className="card-slider">
        <div className="cards-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <Card key={index} style={{ width: '18rem', height: '28rem' }}>
              <Card.Img variant="top" src={card.image} fluid />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Button onClick={prevSlide}>Prev</Button>
      <Button onClick={nextSlide}>Next</Button>
    </div>
  );
};

export default Slider;
