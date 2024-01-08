import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial1 from './img/Instructor1.jpeg';
import testimonial2  from './img/Instructor2.jpeg'; 
import testimonial3 from './img/Instructor3.jpeg';  
import testimonial4 from './img/Instructor3.jpeg';
import testimonial5  from './img/Instructor2.jpeg'; 
import testimonial6 from './img/Instructor1.jpeg';  
import StarRating from './StarRating';  
import './css/testimonials.css';         
const testmonialsData = [
    {id:1, name: "testmonial-1", image: testimonial1, comment: "Codex is the blah blah blah",  rating: 4.5},
    {id:2, name: "testmonial-1", image: testimonial1, comment: "Codex is the blah blah blah",  rating: 3.8},
    {id:3, name: "testmonial-3", image: testimonial1, comment: "Codex is the blah blah blah",   rating: 5.0},
    {id:4, name: "testmonial-1", image: testimonial2, comment: "Codex is the blah blah blah",  rating: 4.2 },
    {id:5, name: "testmonial-2", image: testimonial2, comment: "Codex is the blah blah blah", rating: 4.7},
    {id:6, name: "testmonial-3", image: testimonial2, comment: "Codex is the blah blah blah", rating: 4.0},
  
  ]
const Testimonials = () => {
  const ratingNumber = 4.5;
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
    }
  return (
    <div className='testimonials-section'>
      <h2>What Our Students Says About CodeX</h2>
      <Slider {...settings} className='slider-container'>
        {testmonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
                <img src={testimonial.image} alt="" />
                <p>{testimonial.comment}</p>
                {/* <StarRating rating={testimonial.rating}/> */}
            </div>
        ))}
        
      </Slider>
    </div>
  )
}

export default Testimonials
