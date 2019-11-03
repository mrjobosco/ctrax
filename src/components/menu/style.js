import styled from 'styled-components';


export const Header = styled.div`
    width: inherit;
    height: 80px;
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
    align-self: start;
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