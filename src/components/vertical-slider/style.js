import styled, {css} from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 6fr 6fr;
`

export const Block = styled.div`
  width: inherit;
  display: block;
  height: 500px;
  position: relative;
`

export const LeftSide = styled(Block)`
  top: 0px;
`

export const RightSide = styled(Block)`
  top: -1500px;
`

export const Item = styled(Block)`
  ${props => props.color && css`
    background-color: ${props.color}
  `}
`

export const HeroLayout = styled.div`
  width: 100%;
  height: 720px;
  display: grid;
  grid-template-columns: 6fr 6fr;
	overflow-y: hidden;
	background-color: rgb(145, 202, 98);
`

export const HeroBlock = styled.div`
  width: inherit;
  display: block;
  position: relative;
`

export const HeroLeftSide = styled(HeroBlock)`
top: 0px;
`

export const HeroRightSide = styled(HeroBlock)`
  top: -720px;
`

const iPadImage = '../assets/C-trax-ipad-home.png';
const halftone1 = '../assets/halftone-1.svg';
// const halftone2 = '../assets/halftone-2.svg';
const halftone3 = '../assets/halftone-3.svg';
const hardware = '../assets/png/ctrax-hardware-solutions-lifted.png';

export const HeroLeftFirstItem = styled(HeroBlock)`
  display: grid;
  align-content: center;
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
`
// background-image: linear-gradient(226.3deg, #539836 50%, #3B8525 100%);
// background-position: top 4rem left 40rem, right 0;
// background-image: url(${halftone2}), linear-gradient(226.3deg, #539836 50%, #3B8525 100%);
// background-position: top 0, left -40%, right 0;
  
  
export const HeroRightFirstItem = styled(HeroBlock)`
	height: 720px;
	background-color: transparent;
  background-image: url(${iPadImage}), url(${halftone1});
  background-repeat: no-repeat;
  background-position: left 0rem top 4rem, right 46% top -8rem,right 0;
  background-size: cover, cover, cover, cover;
`
// background: linear-gradient(226.3deg, #91CA62 0%, #539836 0%);
// background-position: left 96.1% top -0%,left 0rem top 4rem,right -7rem,right 0;
// background-image: url(${halftone2}), url(${iPadImage}), url(${halftone1}), linear-gradient(226.3deg, #91CA62 0%, #539836 0%);
  


export const HeroLeftSecondItem = styled(HeroBlock)`
	height: 720px;
	background-color: transparent;
  background-image: url(${hardware}), url(${halftone3});
  background-repeat: no-repeat;
  background-position: left 0 bottom -94%,left -3rem top 3rem;
  background-size: contain, cover, cover, cover;
`
// background: linear-gradient(226.3deg, #1A2C3E 50%, #101C29 100%);
// background-position: left 14rem top 6rem, left 0rem top 4rem, right 0;
  

export const HeroRightSecondItem = styled(HeroBlock)`
	display: grid;
	align-content: center;
	height: 720px;
	background-color: transparent; 
`
// background: linear-gradient(226.3deg, #253C53 0%, #1A2C3E 0%);

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

export const TitleCaptionSmall = styled(TitleCaption)`
	font-size: 32px;
`

export const pin = styled.div`
	height: 20px;
	width: 20px;
	border: 1px solid #91CA62;
	opacity: 0.2;
`

export const Controls = styled.div`
	width: 50px;
	height: 70px;
	display: grid;
`

