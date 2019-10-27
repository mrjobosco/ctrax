import styled from 'styled-components';
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