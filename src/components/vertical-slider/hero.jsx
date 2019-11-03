import React, { useRef, useEffect, useState } from 'react';
import {
  HeroLayout,
  HeroLeftSide,
  HeroRightSide,
  HeroLeftFirstItem,
  HeroRightFirstItem,
  HeroLeftSecondItem,
  HeroRightSecondItem,
  TitleManagement, 
  TitleCaptionSmall,
  TextWrapper, 
  TitleCaption, 
  TitleButton, 
  TitleText,
  Controls,
  Pin,
  Bars,

} from './style';
import { animate, animateColor } from './logic';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faArrowRight,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

export const Hero = (props) => {
  let leftSideRef = useRef(null);
  let rightSideRef = useRef(null);
  let parentRef = useRef(null);
  let [active, setActive] = useState(true);

  useEffect(() => {
    // let alternate = true;
    const time = setInterval(() => {
      if (active){
        if(leftSideRef) animate(leftSideRef, (-720));
        if(rightSideRef) animate(rightSideRef, 0);
        if(parentRef) animateColor(parentRef, !active)
        setTimeout(() =>setActive(false), 1000)
      } else {
        if (leftSideRef) animate(leftSideRef, 0);
        if (rightSideRef) animate(rightSideRef, -720);
        if(parentRef) animateColor(parentRef, !active)
        setTimeout(() =>setActive(true), 1000)
      }
    }, 4000)
    return () => clearInterval(time);
  },[active])

  const toggle = (position) => {
    if (position === true  && (active !== true)){
      if(leftSideRef) animate(leftSideRef, (-720));
      if(rightSideRef) animate(rightSideRef, 0);
      if(parentRef) animateColor(parentRef, !position)
      setTimeout(() => setActive(true), 1000)
    } else if(position === false  && (active !== false)){
      if (leftSideRef) animate(leftSideRef, 0);
      if (rightSideRef) animate(rightSideRef, -720);
      if(parentRef) animateColor(parentRef, !position)  
      setTimeout(() => setActive(false), 1000)
    }
    
  }

  return <HeroLayout ref={element => parentRef = element}>
    <Bars onClick={props.show}><FontAwesomeIcon icon={faBars} /></Bars>
    <Controls>
      <Pin active={active} onClick={toggle.bind(null, true)}><div/></Pin>
      <Pin active={!active} onClick={toggle.bind(null, false)}><div/></Pin>
    </Controls>
    <HeroLeftSide ref={element => leftSideRef = element}>
      <HeroLeftFirstItem>
        <TextWrapper>
          <TitleManagement>
            Management Solutions
                </TitleManagement>
          <TitleCaption>
            Cannabis software,
                </TitleCaption>
          <TitleCaption>
            done right!
                </TitleCaption>
          <TitleButton>
            Management Solutions
                    <div><FontAwesomeIcon icon={faAngleRight} /></div>
          </TitleButton>
          <TitleText>See Hardware Solutions <span><FontAwesomeIcon icon={faArrowRight} /></span></TitleText>
        </TextWrapper>
      </HeroLeftFirstItem>
      <HeroLeftSecondItem />
    </HeroLeftSide>
    <HeroRightSide ref={element => rightSideRef = element}>
      <HeroRightSecondItem>
      <TextWrapper>
          <TitleManagement>
            Point of sale solutions
                </TitleManagement>
          <TitleCaptionSmall>
            Cannabis and Hemp, done right!
          </TitleCaptionSmall>
          <TitleCaption/>
          <TitleButton>
            Hardware Solutions
                    <div><FontAwesomeIcon icon={faAngleRight} /></div>
          </TitleButton>
          <TitleText>See Management Solutions <span><FontAwesomeIcon icon={faArrowRight} /></span></TitleText>
        </TextWrapper>
      </HeroRightSecondItem>
      <HeroRightFirstItem/>
    </HeroRightSide>
  </HeroLayout>
}