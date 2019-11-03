import React, { useRef, useEffect } from 'react';
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

} from './style';
import { animate, animateColor } from './logic';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  let leftSideRef = useRef(null);
  let rightSideRef = useRef(null);
  let parentRef = useRef(null);


  useEffect(() => {
    let alternate = true;
    setInterval(() => {
      if (alternate){
        if(leftSideRef) animate(leftSideRef, (-720));
        if(rightSideRef) animate(rightSideRef, 0);
        animateColor(parentRef, !alternate)
        alternate = false;
      } else {
        if (leftSideRef) animate(leftSideRef, 0);
        if (rightSideRef) animate(rightSideRef, -720);
        animateColor(parentRef, !alternate)
        alternate = true;
      }
    }, 4000)
  })

  return <HeroLayout ref={element => parentRef = element}>
    <Controls>
      <Pin><div/></Pin>
      <Pin active={true}><div/></Pin>
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