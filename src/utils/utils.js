// hooks
import { useEffect } from 'react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// All background-images
import aston from "../assets/images/astonmartin.jpg";
import gt4k from "../assets/images/gt4k.jpg";
import gti from "../assets/images/gti.jpg";
import intaudi2 from "../assets/images/intaudi2.jpg";
import porsche from "../assets/images/porsche.jpg";
// Import Gsap Animation
import { handleBg } from '../utils/animation';

// Const Images
export const BgImages = [
  aston,
  gt4k,
  gti,
  porsche,
  intaudi2
];

// Background Cycle
export const cycleImages = (images, container, seconds) => {
	images.forEach((image, index) => (
  	setInterval(() => {
	    handleBg(image, container);
    }, seconds * (index + 1))
  ))
};

// Review Stars
export const StarsRev = (number) => {
  if (number === 0) {
    return (
      <div className='starsreview'>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
      </div>
    )
  } else if (number === 1){
    return (
      <div className='starsreview'>
        <AiFillStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
      </div>
    )
  } else if (number === 2){
    return (
      <div className='starsreview'>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
      </div>
    )
  } else if (number === 3){
    return (
      <div className='starsreview'>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
      </div>
    )
  } else if (number === 4){
    return (
      <div className='starsreview'>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiOutlineStar color={'#C7B074'}/>
      </div>
    )
  } else if (number === 5){
    return (
      <div className='starsreview'>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
        <AiFillStar color={'#C7B074'}/>
      </div>
    )
  }
};

// Hooks Closing menu clicking outside

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

