import styled, {css} from 'styled-components';
import { Layout } from 'components/layout';
const halftone4 = '../assets/halftone-4.svg';

export const PointLayout = styled(Layout)`

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
  height: 700px;
  display: grid;
  width: inherit;
  background-color: #101C29;
  grid-template-columns: 6fr 6fr;
`

export const FirstSectionLeft = styled.div`
  display: grid;
  width: inherit;
  align-content: start;
  margin-top: 84px;
  justify-content: center;
  grid-gap: 3rem;
`

export const TitleManagement = styled.p`
    color: #BBE5EE;
    font-family: "Arial";
    font-weight: bolder;
    font-size: 17px;
    width: 299px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 30px;
`

export const FirstSectionTitle = styled.p`
    width: 299px;
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
`

export const ImageWrapper = styled.div`
    width: 299px;
    padding: 0;
    margin: 0;
`

export const FirstSectionRight = styled.div`
    width: inherit;
    display: grid;
    padding-top: 135px;
`

export const FirstSectionRightText = styled.p`
    width: 580px;
    opacity: 0.6;
    color: #FFFFFF;
    font-family: Avenir;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
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

export const SecondSection = styled.div`
    height: 962px;
    width: inherit;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-gap: 2rem;
`

export const SecondSectionTitle = styled.p`
    height: 54px;
    color: #000000;
    font-family: Bitter;
    font-size: 46px;
    line-height: 54px;
    text-align: center;
`

export const SecondSectionMenu = styled.div`
    width: 751px;
    display: grid;
    justify-self: center;
    justify-content: space-evenly;
    grid-auto-flow: column;
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
`

export const SecondSectionItemCost = styled.p`
  height: 16px;
  width: inherit;
  opacity: 0.4;
  color: #000000;
  font-family: Avenir;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 16px;
  text-align: center;
`