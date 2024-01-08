import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
const StarRating = ( {rating} ) => {
    const renderStars = () => {
        const stars = [];
        const totalStars = 5;

        for(var i = 1; i <= totalStars; i++){
            if(i <= rating){
                stars.push(<StarRating key={i}/>)
            } else if (i - 0.5 === rating){
                stars.push(<FaStarHalfAlt key={i}/>)
            } else {
                stars.push(<StarRating key={i} className='empty-star'/>)
            }
        }
        return stars;
    }
  return (
    <div className='star-rating'>
        {renderStars()}      
    </div>
  )
}

export default StarRating
