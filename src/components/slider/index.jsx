import React from 'react';
import {
    PartnerSection,
    PartnerSectionTitle,
    PartnerSlider,
    SliderCard,
    PartnerSliderContents,
    ControlArrow,
    SliderSensor,
    SliderSensorPin,
    ItemTitle,
    ShopNowButton,

} from './style';
import { BlueArrowButton } from 'components/buttons';

const rightArrow = '../assets/SVG/Icon/next.svg';
const leftArrow = '../assets/SVG/Icon/back.svg';
const Hardware = '../assets/png/ctrax-hardware-for-ipad-expanded.png';

export const Slider = () => {
    return (
        <PartnerSection>
                <PartnerSectionTitle> 
                    POS Hardware
                </PartnerSectionTitle>
                <PartnerSlider>
                    <ControlArrow>
                        <img src={leftArrow} alt="left"/>
                    </ControlArrow>
                    <PartnerSliderContents>
                        <SliderCard>
                            <img src={Hardware} alt={`Hardware`}/>
                        </SliderCard>
                    </PartnerSliderContents>
                    <ControlArrow>
                        <img src={rightArrow} alt="right"/>
                    </ControlArrow>
                </PartnerSlider>
                <ItemTitle>ELOPOS Hardware of IPad</ItemTitle>
                <SliderSensor>
                    <SliderSensorPin><div /></SliderSensorPin>
                    <SliderSensorPin><div /></SliderSensorPin>
                    <SliderSensorPin active={true}><div /></SliderSensorPin>
                    <SliderSensorPin><div /></SliderSensorPin>
                    <SliderSensorPin><div /></SliderSensorPin>
                </SliderSensor>
                <ShopNowButton>
                    <BlueArrowButton text={'Shop Now'} />
                </ShopNowButton>
            </PartnerSection>
    )
}