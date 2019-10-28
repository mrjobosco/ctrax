import styled from 'styled-components';
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