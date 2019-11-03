import styled from 'styled-components';
import { Layout } from 'components/layout';
const halftone4 = '../assets/halftone-4.svg';

export const ManagementLayout = styled(Layout)`

`

export const HeaderSection = styled.div`
    height: 300px;
    display: grid;
    align-items: center;
    background-image: url(${halftone4});
    background-repeat: no-repeat;
    background-size: 2500px; 
    background-position: top -446px left -263px;
    width: inherit;
    background-color: rgb(59, 133, 37);
    grid-template-rows: 1fr 11fr;
`

export const HeaderTitle = styled.p`
    color: #FFFFFF;
    font-family: Bitter;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.26px;
    line-height: 40px;
    text-align: center;
    align-self: center;
    justify-self: center;
`

export const FirstSection = styled.div`
    height: 680px;
    background-color: #101C29;
    width: inherit;
`