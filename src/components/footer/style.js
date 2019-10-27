import styled from 'styled-components';

export const Questions = styled.div`
	display: grid;
	height: 420px;
	width: inherit;
	justify-content: center;
	align-content: center;
	grid-gap: 1.7rem;
`

export const QuestionsTitle = styled.p`
	width: 267px;
	color: #000000;
	font-family: Bitter;
	font-size: 46px;
	line-height: 54px;
	display: grid;
	text-align: center;
	justify-self: center;
	justify-items: center;
`

export const QuestionTextSmall = styled.p`
	width: 445px;
	opacity: 0.6;
	color: #000000;
	font-family: "Roboto";
	font-size: 17px;
	letter-spacing: 0.2px;
	line-height: 30px;
	text-align: center;
`

export const QuestionButtons = styled.div`
	height: 54px;
	width: 201px;
	border-radius: 100px;
	background-color: #91CA62;
	padding: 0rem 1.2rem;
	font-family: "Arial";
	display: grid;
	grid-template-columns: auto 22px;
	align-content: center;
	justfiy-content: center;
	justify-self: center;
	font-size: 14px;
	color: #ffffff;
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
        align-self: center;
		align-content: center;
		font-size: 10px;
		justify-content: center;
		opacity: 0.2;
		background-color: #000000;
	}
`

export const MapWrapper = styled.div`
	width: inherit;
	height: 400px;
	display: grid;
	position: relative;
	z-index: -3;
`

export const FooterWrapper = styled.div`
	height: 574px;	
	border: 1px solid #212A3E;
	background-color: #101C29;
	display: grid;
	align-content: start;
`

export const FooterFirstCompartment = styled.div`
	width: inherit;
	display: grid;
	grid-template-columns: 9fr 3fr;
	justify-items: start;
	margin: 60px 0;
`

export const FooterRightSide = styled.div`
	display: grid;
	height: 317px;
	align-self: center;
	grid-template-columns: repeat(4, 200px);
	grid-gap: 2rem;
	padding: 2rem;
	grid-row-gap: 3rem;
	justify-content: center;
	align-content: center;
	justify-self: center;
`

export const FooterRightContent = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-gap: 1.7rem;
	justify-items: start;
	justify-self: start;
	align-self: start;
	width: 200px;
	& h5{
		color: #FFFFFF;
		font-family: Avenir;
		font-size: 16px;
		letter-spacing: 0.2px;
		line-height: 16px;
		padding: 0;
		margin: 0;
	}
	& p{
		width: 189px;
		opacity: 0.8;
		color: #FFFFFF;
		font-family: Avenir;
		font-size: 17px;
		font-weight: 300;
		letter-spacing: 0.2px;
		line-height: 23px;
	}
`

export const FooterLeftSide = styled.div`
	display: grid;
	width: inherit;
	height: 317px;
	align-content: start;
	align-self: center;
	grid-gap: 3.5rem;
`

export const FooterSocials = styled.div`
	display: grid;
	width: 211px;
	align-content: start;
	justify-content: start;
	grid-gap: 2rem;
	& p{
		height: 16px;
		width: 70px;
		color: #FFFFFF;
		font-family: Avenir;
		font-size: 16px;
		letter-spacing: 0.2px;
		line-height: 16px;
		text-align: center;
	}
	& div{
		display: grid;
		grid-template-columns: repeat(5, 2fr);
		grid-gap: 1.7rem;
		& img{
			height: 25px;
			width: 25px;
			opacity: .2;
			display: grid;
		}
	}
`

export const FooterApp = styled.div`
	display: grid;
	width: inherit;
	align-content: start;
	grid-gap: 1.6rem;
	& p{
		height: 25px;
		width: 145px;
		opacity: 0.8;
		color: #FFFFFF;
		font-family: "Roboto";
		font-size: 16px;
		letter-spacing: 0.2px;
		line-height: 25px;
	}
`

export const FooterButton = styled.div`
	display: grid;
	align-content: center;
	width: 168px;
	justify-content: start;
	justify-items: start;
	background-color: #91CA62;
	height: 50px;
	border-radius: 5px;
	padding-left: .5rem;
	align-content: start;
	grid-gap: 1rem;
	grid-template-columns: 4fr 8fr;
	& img{
		justify-self: center;
		justify-items: center;
		align-self: center;
		height: 25px;
	}
`

export const AppleText = styled.div`
	display: grid;
	grid-auto-flow: row;
	align-content: start;
	justify-content: start;
	& p{
		font-size: 10px;
		color: #ffffff;
	}
	& h5{
		color: #ffffff;
		font-size: 1.2rem;
		padding: 0;
		margin: 0;
	}
`

export const FooterDivider = styled.div`
	height: 1px;
	width: inherit;
	opacity: 0.1;
	background-color: #FFFFFF;
	align-self: start;
	margin-bottom: 60px;
`

export const Footer = styled.div`
	display: grid;
	width: inherit;
	padding-left: 150px;
	align-content: center;
	grid-template-columns: 8fr 4fr;
`

export const FooterLeft = styled.div`
	display: grid;
	width: inherit;
	grid-auto-flow: column;
	justify-content: start;
	padding-left: 32px;
	grid-gap: 2.2rem;
`

export const FooterItems = styled.p`
	opacity: 0.8;
	color: #FFFFFF;
	font-family: Avenir;
	font-size: 17px;
	font-weight: 300;
	letter-spacing: 0.2px;
	line-height: 23px;
`