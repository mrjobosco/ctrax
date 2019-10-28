import styled, {css} from 'styled-components';
import { Button } from 'components/forms/Input';


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
`;

export const BlueButton = styled(LearnMoreButton)`
	background-color: #19AECA;
	color: #FFFFFF;
	border: none;
	margin-bottom: 2.5rem;
`

export const FullButton = styled.div`
	display: grid;
	justify-content: center;
	align-content: center;
	justify-content: center;
	height: 54px;
	width: 190px;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
	border-radius: 4px;
	background-color: #91CA62;
	text-align: center;
	font-family: Avenir;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 24px;
	text-align: center;
	color: #FFFFFF;
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
		${props => (props.color === 'green') && css`
			background-color: #91CA62;
			width: 260px;
		`}
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