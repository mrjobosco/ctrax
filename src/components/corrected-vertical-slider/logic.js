import {TweenMax} from 'gsap';

export const animate = (element, alternate) => {
  
  if (alternate){
    TweenMax.fromTo(element, 2, {
        backgroundColor: 'rgb(37, 60, 83)'
    }, {
        backgroundColor: 'rgb(145, 202, 98)'
    });
  }else{
    TweenMax.fromTo(element, 2, {
      backgroundColor: 'rgb(145, 202, 98)'
  }, {
      backgroundColor: 'rgb(37, 60, 83)'
  });
  }
}