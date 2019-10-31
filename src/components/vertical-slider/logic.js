import {TweenMax, Linear} from 'gsap';

export const trottle = (func, timeLapse) => {
  let ready = true;
  return (...args) => {
      if (!ready){
        return;
      }
    
    ready = false;
    func(...args);
    setTimeout(() => {
      ready = true;
    }, timeLapse)
  }
}

export const animate = (element, position) => {
  TweenMax.to(element, .5, { top: position, ease: Linear.easeInOut});
}


export const duplicateObj = (obj, number) => {
  const objArray = [];
  for(let x = 1; x <= number; x++) objArray.push(obj);
  return objArray;
}