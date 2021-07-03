// Package import
import { gsap } from 'gsap';


// BackGround Animation
export const handleBg = (image, target) => {
  gsap.to(target, {
    transition: 2,
    duration: 0,
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  });
}