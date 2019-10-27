import styled from 'styled-components';

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
