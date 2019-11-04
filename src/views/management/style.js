import styled, {css} from 'styled-components';
import { Layout } from 'components/layout';
const halftone4 = '../assets/halftone-4.svg';

export const ManagementLayout = styled(Layout)`

`

export const HeaderSection = styled.div`
    height: 300px;
    display: grid;
    align-items: center;
    background-image: url(${halftone4});
    background-repeat: no-repeat;
    background-size: 2500px; 
    background-position: top -446px left -263px;
    width: inherit;
    background-color: rgb(59, 133, 37);
    grid-template-rows: 1fr 11fr;
`

export const HeaderTitle = styled.p`
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.26px;
    line-height: 40px;
    text-align: center;
    align-self: center;
    justify-self: center;
`

export const FirstSection = styled.div`
    height: 680px;
    background-color: #101C29;
    width: inherit;
    display: grid;
    grid-template-columns: 6fr 6fr;
`

const ipadBackground = '../assets/C-trax-ipad-home.png';

export const FirstSectionLeft = styled.div`
    width: inherit;
    height: inherit;
    background: url(${ipadBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left -161px top 136px;
`

export const FirstSectionRight = styled.div`
    display: grid;
    width: inherit;
    height: inherit;
    align-content: center;
    justify-content: start;
    grid-gap: 2rem;
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

export const Title = styled.p`
    height: 112px;
    width: 325px;
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
`

export const FirstSectionTextRight = styled.p`
    width: 543px;
    color: #FFFFFF;
    opacity: .5;
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 30px;
    padding: 0;
    margin: 0;
`

export const SecondSection = styled.div`
    box-sizing: border-box;
    height: 1197px;
    display: grid;
    align-content: center;
    justify-content: center;
    width: inherit;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
`

export const SecondSectionTitle = styled.p`
    height: 54px;
    color: #000000;
    font-family: Bitter;
    font-size: 46px;
    line-height: 54px;
    text-align: center;
    margin-bottom: 45px;
`

export const SecondSectionMenu = styled.div`
    width: 751px;
    display: grid;
    justify-self: center;
    justify-content: space-evenly;
    grid-auto-flow: column;
    margin-bottom: 80px;

`

export const SecondSectionMenuItem = styled.div`
    height: 43px;
    width: 126px;
    background-color: #FFFFFF;
    text-align: center;
    display: grid;
    align-content: center;
    justify-content: center;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;
    line-height: 12px;
    text-align: center;
    ${props => props.active && css`
        border: 1px solid #91CA62;
        border-radius: 100px;
        color: #91CA62;
    `}
`

export const SecondSectionImage = styled.img`
    height: 600.28px;
    width: 780px;
`

export const SecondSectionItemTitle = styled.p`
    height: 26px;
    width: inherit;
    color: #000000;
    font-family: "Arial";
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 4rem;
`

export const SecondSectionButtonWrapper = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
`

export const PaymentSection = styled.div`
    height: 602px;
    width: inherit;
    background-color: #E6E7E8;
    display: grid;
`

export const PaymentTitle = styled.p`
    color: #000000;
    font-family: Bitter;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    margin-top: 83px;
`

export const PaymentTypes = styled.div`
    display: grid;
    width: inherit;
    grid-template-columns: 4fr 4fr 4fr;
`

export const Payment = styled.div`
    width: inherit;
    display: grid;
    align-content: center;
    & img{
        align-self: center;
        justify-self: center;
        width: inherit;
        max-width: 90px;
        margin-bottom: 4rem;
    }
`

export const PaymentNumber = styled.div`
    width: inherit;
    height: 1px;
    align-self: center;
    background-color: #FFFFFF;
    display: grid;
    position: relative;
    margin-bottom: 4rem;
    & div{
       height: 61px;
       width: 61px;
       border-radius: 100%;
       background-color: #3B8525;
       position: absolute;
       top: -30px;
       color: #FFFFFF;
       font-size: 20px;
       display: grid;
       right: 44%;
       align-content: center;
       justify-content: center;
    }
`

export const PaymentItemTitle = styled.p`
    color: #000000;
    font-family: "Arial";
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 26px;
    text-align: center;
    margin-bottom: .5rem;
`

export const PaymentItemText = styled.p`
    opacity: 0.8;
    color: #000000;
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 25px;
    text-align: center;
`

export const ThirdSection = styled.div`
    display: grid;
    height: 1048px;
    width: inherit;
    grid-template-columns: 6fr 6fr;
    background-color: #FAFAFA;
`
const imageMac = '../assets/png/ctrax-laptop-reporting.png';

export const ThirdSectionLeft = styled.div`
    width: inherit;
    height: 524px; 
    background-image: url(${imageMac});
    align-self: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: -20rem center;
`

export const ThirdSectionRight = styled.div`
    height: 1048px;
    display: grid;
    grid-gap: 2rem;
    align-content: center;
`

export const TopText = styled.div`
    height: 30px;
    width: 128px;
    color: #000000;
    font-family: "Arial";
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 30px;
`

export const ThirdSectionTitle = styled.p`
    width: 449px;
    color: #000000;
    font-family: "Roboto";
    font-size: 46px;
    line-height: 54px;
`

export const ThirdSectionText = styled.p`
    width: 580px;
    opacity: 0.6;
    color: #000000;
    font-family: Avenir;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
`

export const ThirdSectionItems = styled.div`
    width: 290px;
    display: grid;
    grid-template-columns: 3fr 9fr;
    height: 52px;
    & img{
        height: 45px;
        width: 45px
    }
    & div{
        display: grid;
        align-content: center;
    }
`

export const SixthSection = styled.div`
    display: grid;
    width: inherit;
    height: 1010px;
    border: 1px solid #EEEEEE;
    border-bottom: none;
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

const image = '../assets/png/ctrax-hardware-demo.png';
export const DemoWrapper = styled.div`
	width: inherit;
	height: 448px;
	background-color: #525F48;
	position: relative;
	z-index: -3;
`

export const Demo = styled.div`
	display: grid;
	height: 448px;
	position: absolute;
	width: 100%;
	background-image: url(${image});
	background-size: 750px;
	background-repeat: no-repeat;
	top: -60px;
	transform: scaleX(-1);
	z-index: -3;
	background-position: right 100px top 0px;
`

export const DemoOverlay = styled.div`
	height: 448px;
	position: absolute;
	top: 0;
	width: 100%
	z-index: -3;
	display: grid;
	grid-auto-flow: column;
`

export const DemoLeft = styled.div`
	display: grid;
	align-content: end;
	justify-content: center;
	padding-bottom: 37px;
`
export const DemoRight = styled.div`
	display: grid;
	width: 100%;
	align-content: center;
	justify-content: center;
`

export const DemoLeftText = styled.p`
	height: 74px;
	width: 655px;
	color: #FFFFF0;
	font-family: Bitter;
	font-size: 56px;
	font-weight: bold;
	letter-spacing: 0.19px;
	line-height: 74px;
`

export const DemoLeftTextSmall = styled.p`
	height: 50px;
	width: 365px;
	opacity: 0.8;
	color: #FFFFFF;
	font-family: Bitter;
	font-size: 16px;
	letter-spacing: 0.2px;
	line-height: 25px;
`