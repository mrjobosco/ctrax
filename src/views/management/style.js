import styled, {css} from 'styled-components';
import { Layout } from 'components/layout';

const ncMap = '../assets/nc-map.svg';

export const ManagementLayout = styled(Layout)`

`


export const FirstSection = styled.div`
    width: inherit;
    height: 800px;
    background-color: #525F48;
    background-image: url(${ncMap});
    background-position: top -4rem right -25rem;
    background-size: cover;
    background-repeat: no-repeat;
`

export const Header = styled.div`
    width: inherit;
    height: 80px;
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
`

export const Menu = styled.div`
    width: inherit;
    height: 80px;
    display: grid;
    grid-auto-flow: column;
    align-content: center;
`

export const MenuItem = styled.p`
    color: #FFFFFF;
    font-family: "Arial";
    font-size: 17px;
    letter-spacing: 0.2px;
    line-height: 23px;
    cursor: pointer;
`

export const HeaderButton = styled.div`
    width: inherit;
    height: 80px;
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    justify-content: end;
    color: #FFFFFF;
    font-family: "Arial";
    font-size: 21px;
    padding-right: 50px;
`

export const FirstSectionContent = styled.div`
    width: inherit;
    height: 720px;
    display: grid;
    grid-template-columns: 6fr 6fr;
`

export const FirstSectionLeftSide = styled.div`
    width: inherit;
    display: grid;
    align-items: center;
    padding-left: 8rem;
    & h4{
        color: #FFFFFF;	
        font-family: Bitter;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: -0.23px;
        line-height: 65px;
    }
    & p{
        align-self: start;
        height: 156px;
        width: 520px;
        color: #FFFFFF;
        font-family: Bitter;
        font-size: 46px;
        line-height: 56px;
    }
`

export const FirstSectionRightSide = styled.div`
    width: inherit;
    display: grid;
    align-content: center;
    align-items: center;
    & p{
        height: 150px;
        width: 520px;
        opacity: 0.6;
        color: #FFFFFF;
        font-family: Avenir;
        font-size: 17px;
        font-weight: 300;
        letter-spacing: 0.2px;
        line-height: 30px;
        margin-top: 13rem;
    }
`

export const Team = styled.div`
    background: radial-gradient(circle, #1E273B 0%, #192030 100%);
    height: 819px;
    width: 100%;
    display: grid;
    align-content: start;
`

export const TeamTitle = styled.p`
    width: inherit;
    margin-top: 93px;
    margin-bottom: 93px;
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
`

export const TeamContent = styled.div`
    display: grid;
    width: inherit;
    grid-template-columns: 7fr 5fr;
`
export const TeamLeftSide = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 4fr);
    grid-gap: 3rem;
    row-gap: 7rem;
    padding-left: 6rem;
`

export const HeaderShot = styled.div`
    display: grid;
    height: 162px;
    justify-content: center;
    align-items: center;
    & h4{
        color: #FFFFFF;
        font-family: Avenir;
        font-size: 16px;
        letter-spacing: 0.2px;
        line-height: 16px;
        text-align: center;
        margin-top: 10.5px;
    }
    & p{
        opacity: 0.8;
        color: #FFFFFF;
        font-family: Avenir;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.2px;
        line-height: 20px;
        text-align: center;
    }
`

export const HeadShotOutline = styled.div`
    height: 113px;
    width: 113px;
    display: grid;
    align-content: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid #4E5667;
`

export const HeadShotImage = styled.div`
    width: 90px;
    height: 90px;
    justify-self: center;
    background-color: #D8D8D8;
    border-radius: 100%
`

export const ExtraOutline = styled.div`
    height: 130px;
    width: 130px;
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid #4E5667;
`

export const JoinTheTeam = styled(HeadShotImage)`
    background-color: #91CA62;
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 30px;
    color: #ffffff;
`

export const PartnerSection = styled.div`
    width: inherit;
    height: 570px;
    border: 1px solid #EEEEEE;
    border-bottom: none;
    display: grid;
    margin-bottom: 50px;
`

export const PartnerSectionTitle = styled.div`
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

export const Investor = styled.div`
    height: 559px;
    width: inherit;
    display: grid;
    border: 1px solid #EEEEEE;
    background-color: #FAFAFA;
    grid-template-columns: 6fr 6fr;
`


export const InvestorLeftSide = styled.div`
    width: inherit;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-gap: 3rem;
    & h4{
        color: #000000;
        font-family: "Roboto";
        font-size: 46px;
        line-height: 54px;
    }
    & p{
        opacity: 0.6;
        color: #000000;
        width: 571px;
        font-family: Avenir;
        font-size: 17px;
        font-weight: 300;
        letter-spacing: 0.2px;
        line-height: 30px;
    }
`

export const InvestorRightSide = styled.div`
    display: grid;
    align-content: center;
    grid-gap: 3rem;
    justify-content: center;
`

export const Socials = styled.div`
    display: grid;
    width: 211px;
    margin-top: 3rem;
    align-content: start;
    justify-content: start;
    grid-gap: 2rem;
    & p{
        height: 16px;
        width: 70px;
        color: #000000;
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

export const Blog = styled.div`
    display: grid;
    justify-content: center;
    height: 930px;
    width: inherit;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
`

export const BlogTitle = styled.p`
    width: inherit;
    margin-top: 93px;
    margin-bottom: 93px;
    color: #000000;
    font-family: Bitter;
    font-size: 46px;
    line-height: 56px;
    text-align: center;
`

export const BlogContent = styled.div`
    display: grid;
    justify-content: center;
    width: inherit;
    grid-template-columns: repeat(3, 4fr);
    grid-gap: 3rem;
`

export const BlogItem = styled.div`
    height: 590px;
    width: 360px;
    display: grid;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.08);
    align-content: start;
`

export const BlogImage = styled.div`
    width: 360px;
    height: 260px;
    border-radius: 4px 4px 0 0;
    background-color: #E4F1FD;
`

export const BlogItemContent = styled.div`
    display: grid;
    padding: 30px;
    align-items: start;
    grid-gap: 2rem;
`

export const BlogDate = styled.p`
    color: #4EA3ED;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;
    line-height: 12px;
`

export const BlogItemTitle = styled.p`
    color: #000000;
    font-family: Avenir;
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 0.1px;
    line-height: 36px;
`

export const BlogItemText = styled.p`
    opacity: 0.4;	
    color: #000000;
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 25px;
`

export const Divider = styled.div`
    width: inherit;
    height: 1px;
    opacity: 0.4;	
    background-color: #000000;
    align-self: end;
`

export const BlogFooter = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-self: end;
    width: inherit;
    justify-content: start;
    color: #000000;
    font-family: "Arial";
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 16px;
    & div{
        & span{
            color: #CCCCCC;
            margin-left: 10px
        }
    }
    & p{
        justify-self: end;
        margin-left: 9rem;
        color: #91CA62;
    }
`