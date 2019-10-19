import styled from 'styled-components';


export const Button = styled.div`
    height: 54px;
    width: 238px;
    margin-top: 5rem;
    border-radius: 100px;
    background-color: #19AECA;
    padding: 0rem 1.2rem;
    font-family: "Arial";
    color: #ffffff;
    display: grid;
    grid-template-columns: auto 22px;
    align-content: center;
    justfiy-content: center;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 22px;
    border: none;
    & div{
        height: 22px;
        text-align: center;
        border-radius: 100%;
        width: 22px;
        display: inline-grid;
        align-self: start;
        align-content: center;
        justify-content: center;
        opacity: 0.2;
        background-color: #03101F;
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 2px 4px 0 rgba(0,0,0,0.5);
    }
`