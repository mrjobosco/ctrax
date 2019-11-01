import React,{useRef, useEffect} from 'react';
import {VerticalSlider} from './style';
import { animate } from './logic';

export default () => {
  let parent = useRef(null);
  

  useEffect(() => {
    let alternate = true;
    setInterval(() => {
      animate(parent, alternate)
      console.log(alternate)
      alternate = !alternate;
    }, 4000)
  },[])

  // const 
  return (
    <VerticalSlider ref={element => parent = element}>

    </VerticalSlider>
  )
}