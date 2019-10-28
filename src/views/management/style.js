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

export const MeetTheTeam = styled.div`
    height: 819px;
    width: 100%;
`