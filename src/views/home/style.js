import styled, {css} from 'styled-components';
import {Layout} from 'components/layout';
import { Button } from 'components/forms/Input';

export const HomeLayout = styled(Layout)`
`

export const HeaderWrapper = styled.div`
    display: grid;
    justify-content: stretch;
    width: inherit;
    height: 768px;
    background: linear-gradient(226.3deg, #91CA62 0%, #3B8525 100%);
    justify-content: start;
    align-item: center;

`

export const TextWrapper = styled.div`
    display: grid;
    justify-content: start;
    align-item: center;
    align-self: center;
    margin-left: 2.5rem
`

export const TitleManagement = styled.p`
    height: 30px;
    width: 192px;
    color: #BBE5EE;
    font-family: "Arial";
    font-weight: bolder;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 30px;
`

export const TitleCaption = styled.p`
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 56px;
    letter-spacing: -0.4px;
    line-height: 70px;
`

export const TitleButton = styled.div`
    height: 54px;
    width: 238px;
    margin-top: 5rem;
    border-radius: 100px;
    background-color: #19AECA;
    padding: 0rem 1.2rem;
    font-family: "Arial";
    color: #ffffff;
    display: grid;
    grid-template-columns: auto 22px;
    align-content: center;
    justfiy-content: center;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 22px;
    border: none;
    & div{
        height: 22px;
        text-align: center;
        border-radius: 100%;
        width: 22px;
        display: inline-grid;
        align-self: start;
        align-content: center;
        justify-content: center;
        opacity: 0.2;
        background-color: #03101F;
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 2px 4px 0 rgba(0,0,0,0.5);
    }
`

export const TitleText = styled.p`
    height: 22px;
    color: #FFFFFF;
    font-family: "Arial";
    font-size: 14px;
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 1.22rem; 
    letter-spacing: 0.2px;
    line-height: 22px;
    & span{
        font-size: 9px;
        margin-left: .4rem;
    }
`

export const MiddleNav = styled.div`
    width: inherit;
    height: 90px;
    background-color: #100F0F;	
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-content: center;
`
export const StickyMiddleNav = styled(MiddleNav)`
    position: fixed;
    top: 0;
    width: 100%;
    grid-template-columns: 2fr auto 2fr;
    justify-content: stretch;
`

export const Menu = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-content: center;
`

export const MenuButton = styled.div`
    display: grid;
    color: #ffffff;
    justify-content: center;
    font-size: 30px;
    & div{
        cursor: pointer;
    }
`

export const MenuItem = styled.p`
    height: 23px;
    width: 179px;
    color: #FFFFFF;
    font-family: "Arial";
    font-size: 17px;
    align-self: start;
    text-align: center;
    justify-content: start;
    letter-spacing: 0.2px;
    justify-self: start;
    line-height: 23px;
`

export const MenuOverlay = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #3B8525;
    position: fixed;
    top: 0;
    opacity: 0;
    display: none;
    justify-content: stretch;
    align-items: start;
    align-self: start;
    grid-template-rows: 1fr 11fr;
    transition: opacity 4s ease-in-out;
    ${props => props.show && css`
        display: grid;
        opacity: 1;
    `}
`

export const OverlayHeader = styled.div`
    display: grid;
    justify-content: stretch;
    align-items: start;
    grid-template-columns: 11fr 1fr;
    padding: 4rem;
`

export const OverlaySection = styled.div`
    display: grid;
    justify-content: center;
    align-items: start;
    align-self: start;
    grid-auto-flow: column;
    margin-top: 9rem;
    grid-gap: 4rem;
`

export const MenuBlock = styled.div`
    display: grid;
    width: 280px;
    grid-auto-flow: row;
    align-content: start;
    justify-content: start;
    grid-gap: 2rem;
    & p{
        color: #FFFFFF;
        font-size: 26px;
        letter-spacing: 0.31px;	
        line-height: 30px;
        font-family: "Arial";
    }
`

export const MenuBlockHeader = styled.div`
    border-left: .2rem solid #FFFFFF;
    border-color: #FFFFFF;
    font-size: 16px;
    opacity: 0.8;
    padding-left: .4rem;
    color: #FFFFFF;
    font-weight: bold;
    letter-spacing: 0.19px;
    line-height: 23px;
`

export const MiddleSection = styled.div`
    height: 601px;
    width: inherit;
    border: 1px solid #EEEEEE;
    background-color: #FAFAFA;
    display: grid;
    grid-template-columns: 4fr 3fr 2fr;
`

export const MiddleLeftArea = styled.div`
    display: grid;
    margin-top: 5rem;
    margin-right: 5rem;
    justify-content: end;
    align-content: start;
`

export const MiddleTextLeft = styled.p`
    color: #000000;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
    padding: 0;
`

export const MiddleRightArea = styled.div`
    display: grid;
    margin-top: 5rem;
    margin-left: 2rem;
    justify-content: start;
    align-content: center;
    margin-top: 4rem;
`

export const MiddleTextRight = styled.p`
    height: 240px;
    width: 543px;
    color: #000000;
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 30px;
    padding: 0;
    margin: 0;
`

export const ChatBlueButton = styled.div`
    height: 107px;
    width: 107.32px;
    margin-top: 3.5rem;
    background-color: #19AECA;
    box-shadow: 3px 6px 12px 0 #D8D8D8;
    border-radius: 100%;
    align-content: end;
    justify-content: center;
    padding-bottom: 1rem;
    color: #FFFFFF;
    display: grid;
    font-family: "Arial";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 16px;
`

export const SecondSection = styled.div`
    width: inherit;
    display: grid;
    background-color: #101C29;
    height: 600px;
    grid-template-columns: 1fr 1fr;
`

export const SecondSectionLeft = styled.div`
    display: grid;
    margin-top: 5rem;
    padding-left: 5rem;
    justify-content: center;
    align-content: start;
    grid-gap: 4rem;
`

export const SecondSectionLeftText = styled.p`
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
`

export const SecondSectionRight = styled.div`
    display: grid;
    margin-top: 5rem;
    margin-left: 2rem;
    justify-content: start;
    align-content: start;
    margin-top: 6rem;
    grid-gap: 2rem;
`

export const SecondSectionRightText = styled.p`
    width: 543px;
    color: #000000;
    font-family: "Roboto";
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 30px;
    padding: 0;
    margin: 0;
`

export const LearnMoreButton = styled(Button)`
    background-color: transparent;
    border: 1px solid #8EC761;
    margin-top: 1rem;
    color: #8EC761;
    height: 42px;
    width: 163px;
    & div{
        opacity: 1;
        background-color: transparent;
        border: none;
        box-shadow: none;
    }
`

const middleSectionHardwareBackground = '../assets/png/ctrax-hardware-demo.png'

export const ThirdSection = styled.div`
    background-color: #101C29;
    height: 820px;
    width: inherit;
    display: grid;
    grid-template-columns: 6fr 6fr;

`

export const ThirdSectionLeft = styled.div`
    display: grid;
    height: inherit;
    background-size: cover;
    background-image: url(${middleSectionHardwareBackground});
    background-repeat: no-repeat;
    background-position: bottom 0rem right -7rem;
`

export const ThirdSectionRight = styled.div`
    display: grid;
    margin-left: 2rem;
    width: 520px;
    align-self: center;
    grid-gap: 2.7rem;
`

export const ThirdSectionTitle = styled(SecondSectionLeftText)`

`

export const ThirdSectionText = styled(SecondSectionRightText)`

`

export const ThirdSectionButton = styled(LearnMoreButton)`
    background-color: #19AECA;
    color: #FFFFFF;
    border: none;
    margin-bottom: 2.5rem;
`

export const ExtraText = styled.p`
    color: #BBE5EE;	
    font-family: "Roboto";	
    font-size: 20px;	
    letter-spacing: 0.2px;	
    line-height: 26px;
    width: 286px;
`

const rightSignIcon = '../assets/SVG/Icon/arrow-point-to-right.svg';

export const ReadMore = styled.div`
    display: grid;
    justify-content: start;
    align-content: start;
    justify-self: start;
    margin-top: 1.5rem;
    grid-auto-flow: column;
    & p{
        color: #BBE5EE;	
        font-family: "Roboto";	
        font-size: 20px;	
        letter-spacing: 0.2px;	
        line-height: 26px;
        align-self: center;
        margin-right: 1.5rem;
    }
`

export const ReadMoreButton = styled.div`
    background-color: #19AECA;
    background-image: url(${rightSignIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    color: #FFFFFF;
    width: 40px;
    height: 40px;
    border-radius: 100%;
`

export const FourthSection = styled.div`
    display: grid;
    grid-template-columns: 6fr 6fr;
    height: 672px;
    background-color: #101C29;
`

export const FourthSectionLeft = styled(SecondSectionLeft)`
    width: 520px;
    padding: 0;
    justify-self: center;
    & img{
        width: 130px
    }
`

export const FourthSectionLeftText = styled(SecondSectionLeftText)`
    font-family: "Roboto";
    font-weight: bold;
    letter-spacing: 2px;
`

export const FourthSectionRight = styled(SecondSectionRight)`

`

export const FifthSection = styled.div`
    width: inherit;
    height: 701px
    display: grid;
    justify-content: center;
    background-color: #FAFAFA;
    border: 1px solid #EEEEEE;
`

export const FifthSectionHeader = styled.p`
    color: #000000;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    width: 444px;
    padding-top: 76.5px;
    justify-self: center;
`

export const FifthSectionBody = styled.div`
    width: 1080px;
    display: grid;
    grid-template-columns: repeat(4, 234px);
    grid-gap: 48px;
    align-content: start;
`

export const FifthBodyItem = styled.div`
    width: 234px;
    display: grid;
    grid-template-columns: 2fr 10fr;
    align-content: start;
    justify-self: start;
    align-self: start;
`
export const Feature = styled.div`
    display: grid;
    margin-left: 20px;
    padding-top: 7px;
    & h2{
        color: #000000;	
        font-family: "Roboto";	
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.2px;	
        line-height: 26px;
        padding-bottom: 9px;
    }
    & p{
        color: #000000;	
        font-family: "Roboto";	
        font-size: 16px;
        opacity: 0.6;
        width: 183px;
        letter-spacing: 0.2px;
        line-height: 25px;
    }
`

const tick = '../assets/SVG/Icon/tick-inside-a-circle.svg';

export const CircleTick = styled.div`
    background-image: url(${tick});
    width: 36px;
    height: 36px;
    background-size: contain;
`

export const SixthSection = styled.div`
    display: grid;
    width: inherit;
    height: 1010px;
    border: 1px solid #EEEEEE;
    justify-content: center;
`

export const SixthSectionHeader = styled.p`
    color: #19AECA;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    margin-top: 76px;
    margin-bottom: 76px;
`

export const SixthSectionBody = styled.p`
    display: grid;
    height: 678px;
    width: 1140px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 0 24px 0 rgba(0,0,0,0.04);
    grid-auto-flow: column;
`

export const SalesFeature = styled.div`
    display: grid;
    justify-content: center;
    align-content: start;
    padding: 32px;
    ${props => props.border && css`
        border-right: 1px solid #EEEEEE;
    `}
`   

export const SaleFeatureTitle = styled.p`
    color: #19AECA;
    font-family: "Arial";
    font-size: 20px;
    letter-spacing: 0.2px;
    line-height: 26px;
    text-align: center;
    font-weight: bolder;
    margin-bottom: 8px;
`

export const SaleFeatureLightText = styled.p`
    opacity: 0.8;
    color: #000000;
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 25px;
    text-align: center;
    ${props => props.spacing && css`
        margin-bottom: ${props.spacing}px;
    `}
`

export const SaleFeatureCostText = styled.div`
    display: grid;
    width: 100px;
    justify-self: center;
    justify-content: center;
    margin-top: 27px;
    margin-bottom: 8px;
    grid-auto-flow: column;
    & p{
        margin-top: 7px;
        margin-right: 7px;
        opacity: 0.4;
        color: #000000;
        font-family: "Roboto";
        font-size: 22px;
        letter-spacing: -0.85px;
        line-height: 25px;
        text-align: center;
    }
    & h3{
        color: #000000;
        font-family: Bitter;
        font-size: 46px;
        line-height: 54px;
        text-align: center;
    }
`

export const SaleFeatureText = styled.p`
    color: #000000;
    font-family: "Arial";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 16px;
    text-align: center;
    ${props => props.spacing && css`
        margin-bottom: ${props.spacing}px
    `}
`

export const SaleFeatureReadMore = styled.div`
    display: grid;
    grid-template-columns: 10fr 2fr;
    align-content: center;
    margin-bottom: 12px;
    justify-content: center;
    & p{
        align-self: center;
    }
    & div{
        height: 30px;
        width: 30px;
        display: grid;
        justify-content: center;
        align-content: center;
        color: #19AECA;
        font-size: 12px;
        background-color: #FFFFFF;
        box-shadow: 2px 3px 5px 0 #19AECA;
        border-radius: 100%;
    }
`

export const SaleFeatureBotton = styled.button`
    height: 45px;
    width: 320px;
    border-radius: 4px;
    background-color: #19AECA;
    color: #ffffff;
    margin-top: 45px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 22px;
    border: none;
    outline: none;
    font-family: "Arial";
`

export const SaleFeatureHorizontalDivider = styled.div`
    height: 1px;
    width: 320px;
    background-color: #EEEEEE;
    ${props => props.spacing && css`
        margin-bottom: ${props.spacing}px
    `}
`

export const PartnerSection = styled.div`
    width: inherit;
    height: 570px;
    border: 1px solid #EEEEEE;
    display: grid;
`

export const PartnerSectionTitle = styled(SixthSectionHeader)`
    color: #000000;
`

export const PartnerSlider = styled.div`
    width: inherit;
    height: 265px;
    display: grid;
    grid-auto-flow: column;
`

export const SliderCard = styled.div`
    height: 223px;
    width: 262px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.08);
    display: grid;
    justify-self: center;
    align-self: center;
    align-content: center;
    justify-content: center;
    & img{
        width: 140px;
    }
`

export const PartnerSliderContents = styled.div`
    height: 26px;
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    align-self: center;
`

export const ControlArrow = styled.div`
    width: 46px;
    height: 262px;
    display: grid;
    align-content: center;
    justify-self: center;
    justify-content: center;
    & img{
        width: inherit;
    }
`

export const SliderSensor = styled.div`
    width: inherit;
    height: 21px;
    display: grid;
    align-content: center;
    justify-self: center;
    justify-content: center;
    grid-auto-flow: column;
    grid-gap: 5px;
`

export const SliderSensorPin = styled.div`
    padding: 2px;
    border-radius: 100%;
    align-self: center;
    & div{
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #cccccc;
    }
    ${props => props.active && css`
        border: 1px solid #90EE90;
        & div{
            width: 10px;
            height: 10px;
            background-color: #90EE90;
        }
    `}
`