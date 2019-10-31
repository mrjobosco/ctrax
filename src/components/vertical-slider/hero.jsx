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

} from './style';
import { trottle, animate } from './logic';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  let leftSideRef = useRef(null);
  let rightSideRef = useRef(null);


  useEffect(() => {

    window.addEventListener('wheel', trottle((e) => {
      console.log(e)
      if (e.deltaY > 0) {
        // scrolling up
        animate(leftSideRef, (-720));
        animate(rightSideRef, 0);
      } else {
        // scrolling down

        animate(leftSideRef, 0);
        animate(rightSideRef, -720);
      }
    }, 1500))
  }, [])

  return <HeroLayout>
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