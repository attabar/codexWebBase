// InstructorsSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Instructors.css'; // Create this CSS file for styling
import instructor1 from './img/Instructor1.jpeg';
import instructor2 from './img/Instructor2.jpeg';

const instructorsData = [
  { id: 1, name: 'Muhammad Abdulmaik', image: instructor1, course: 'Web Design' },
  { id: 2, name: 'Ali Ibrahim', image: instructor1, course:'Web Design' },
  { id: 3, name: 'Habeeb Ibrahim', image: instructor1, course:'UI/UX Design' },
  { id: 4, name: 'Ahmad Mustapha', image: instructor2, course:'Mobile App'},
  { id: 5, name: 'Ibrahim Mustapha', image: instructor2, course: "Desktop App" },
  { id: 6, name: 'Babakura Modu', image: instructor2, course: "Forex"},
];

const InstructorsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="instructors-section">
      <h2>Our Instructors</h2>
      <Slider {...settings}>
        {instructorsData.map((instructor) => (
          <div key={instructor.id} className="instructor-card">
            <img src={instructor.image} alt={instructor.name} />
            <h3>{instructor.course}</h3>
            <p>{instructor.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstructorsSection;
