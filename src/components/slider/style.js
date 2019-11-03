import styled, {css} from 'styled-components';

export const PartnerSection = styled.div`
    width: inherit;
    border: 1px solid #EEEEEE;
    border-bottom: none;
    display: grid;
    margin-bottom: 50px;
    padding-top: 50px;
`

export const PartnerSectionTitle = styled.p`
    color: #19AECA;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
    margin-top: 76px;
    margin-bottom: 76px;
    color: #000000;
`

export const PartnerSlider = styled.div`
    width: inherit;
    display: grid;
    grid-auto-flow: column;
`

export const SliderCard = styled.div`
    border-radius: 4px;
    background-color: #FFFFFF;
    display: grid;
    justify-self: center;
    align-self: center;
    align-content: center;
    justify-content: center;
    & img{
        height: 615.97px;
        width: 792.36px;
    }
`

export const PartnerSliderContents = styled.div`
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

export const ItemTitle = styled.p`
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

export const ShopNowButton = styled.div`
        width: inherit;
        display: grid;
        margin-top: 20px;
        justify-content: center;
`