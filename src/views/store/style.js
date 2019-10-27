import styled, {css} from 'styled-components';
import { Layout } from 'components/layout';

export const StoreLayout = styled(Layout)`
    
`

export const Products = styled.div`
    width: inherit;
    height: 1739px;
    border: 1px solid #EEEEEE;
    background-color: #FFFFFF;
    display: grid;
    justify-content: center;
    padding-top: 160px
    align-content: start;
`

export const ProductTitle = styled.p`
    height: 54px;
    color: #000000;
    font-family: Bitter;
    font-size: 46px;
    line-height: 54px;
    text-align: center;
    margin-bottom: 45px;
`

export const ProductMenu = styled.div`
    width: 751px;
    display: grid;
    justify-self: center;
    justify-content: space-evenly;
    grid-auto-flow: column;
    margin-bottom: 80px;

`

export const ProductMenuItem = styled.div`
    height: 43px;
    width: 126px;
    background-color: #FFFFFF;
    text-align: center;
    display: grid;
    align-content: center;
    justify-content: center;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px;
    line-height: 12px;
    text-align: center;
    ${props => props.active && css`
        border: 1px solid #91CA62;
        border-radius: 100px;
        color: #91CA62;
    `}
`

export const ProductItem = styled.div`
    height: 400px;
    width: 262px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
    display: grid;
    justify-content: center;
    & img{
        margin-top: 64px;
    }
`

export const ProductJumbotron = styled.div`
    display: grid;
    height: 400px;
    width: 540px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
    justify-items: center;
    grid-gap: 2rem;
    align-content: center;

    & h4{
        color: #000000;
        font-family: Bitter;
        font-size: 46px;
        line-height: 54px;
        text-align: center;
    }
    & p{
        height: 60px;
        width: 387px;
        opacity: 0.6;
        color: #000000;
        font-family: "Roboto";	
        font-size: 17px;
        letter-spacing: 0.2px;
        line-height: 30px;
        text-align: center;
    }
    & div{

    }
`

export const ProductName = styled.p`
    height: 26px;
    color: #000000;
    font-family: "Roboto";
    font-size: 20px;
    letter-spacing: 0.2px;
    line-height: 26px;
    text-align: center;
`

export const ProductCost = styled.p`
    height: 25px;
    opacity: 0.8;
    color: #000000;
    font-family: Bitter;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.1px;
    line-height: 25px;
    text-align: center;
`

export const ProductRow = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    margin-bottom: 1rem;
`

export const UpdateSections = styled.div`
    
`