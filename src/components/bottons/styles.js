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