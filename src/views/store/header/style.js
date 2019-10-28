import styled  from 'styled-components';

const hardware  = '../assets/png/ctrax-hardware-store-hero.png';
const halftone = '../assets/halftone-1.svg';

export const HeaderWrapper = styled.div`
    width: inherit;
    height: 300px;
    position: relative;
`

export const HeaderBackground = styled.div`
    width: inherit;
    height: 300px;
    background-image: url(${hardware}), url(${halftone});
    background-size: 95rem, 190rem;
    background-repeat: no-repeat, no-repeat;
    background-position: top -14rem right 0px,top -20rem right 10rem;
`

export const HeaderOverlay = styled.div`
    background: rgba(4,220, 255, .7);
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    z-index: 2;
    position: absolute;
`

export const HeaderContent = styled.div`
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    display: grid;
    position: absolute;
    justify-content: center;
    z-index: 3;
    grid-template-columns: 2fr 8fr 2fr;
`;

export const Logo = styled.div`
    display: grid;
`

export const Menu = styled.div`
    display: grid;
    justify-content: center;

`

export const HeaderIcons = styled.div`
    display: grid;
    grid-template-columns: 6fr 6fr;
    justify-items: center;
    padding-top: 33.4px;
`

export const HeaderIconItem = styled.div`
    color: #FFFFFF;
    font-family: "Arial";	
    font-size: 24px;	
    letter-spacing: 0.2px;
    line-height: 23px;
`

export const HeaderMenu = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    width: 500px;
    justify-self: center;
    margin-top: 33.4px;
    grid-gap: 2rem;
`

export const HeaderMunuItems = styled.p`
    height: 23px;
    color: #FFFFFF;
    font-family: "Arial";	
    font-size: 17px;	
    letter-spacing: 0.2px;
    line-height: 23px;
    cursor: pointer;
`

export const HeaderIconWrapper = styled.div`
    display: grid;
    width: inherit;
    grid-auto-flow: column;
` 

export const StoreTitle = styled.p`
    height: 65px;
    width: 851px;
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.23px;
    line-height: 65px;
    text-align: center;
`