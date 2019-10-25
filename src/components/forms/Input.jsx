import styled from 'styled-components';
import React from 'react';

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

export const Group = styled.div`
    position: relative;
`

export const Highlight = styled.span`
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
`

export const Bar = styled.span`
    position:relative;
    display:block;
    width:100%; 
    &:before{
        content:'';
        height:2px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background:#5264AE; 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }
    &:after{
        content:'';
        height:2px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background:#5264AE; 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }
`

const Input = styled.input`
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    width: 100%;
    border: none;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
    background-color: transparent;
    &:focus{
        outline: none;
    }
`

export const Label = styled.label`
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition: 0.2s ease all; 
    -webkit-transition: 0.2s ease all;
    ${Input}:focus & {
        top:-20px;
        font-size:14px;
        color:#5264AE;
    }
    ${Input}:valid & {
        top:-20px;
        font-size:14px;
        color:#5264AE;
    }
`

export const InputWrapper = (props) => {
    return (
        <Group>
            <Label>{props.label}</Label>
            <Bar />
            <Highlight />
            <Input {...props.input} placeholder={props.label}/>
        </Group>
    )
}