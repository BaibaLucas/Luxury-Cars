// Package import
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



// Local import
import reviews from '../../utils/reviews';
import { StarsRev } from '../../utils/utils';



const Reviews = () => {
  const [review, setReview] = useState(reviews[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setReview(reviews[index]);
  }, [index]);


  return (
   <div className='reviews'>
     <div className='titlereviews'>
       Behind every review is an experience that matters
     </div>
     <div className='reviews-container'>
      {StarsRev(review.stars)}
      <div className='datereview'>"{review.date}"</div>
      <div className='contentreview'>"{review.content}"</div>
      <div className='authorreview'> - {review.name} - </div>
      <Link to='/reviews' className='allreviews'> More Reviews</Link>
     </div>
   </div>
  );
}

export default Reviews;