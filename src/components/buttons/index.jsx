import React from 'react';
import {BlueButton, LearnMoreButton, TitleButton} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faAngleRight} from '@fortawesome/free-solid-svg-icons';


export const BlueArrowButton  = (props) => {
    const {text} = props;
    return (
        <BlueButton>
            {text} <div><FontAwesomeIcon icon={faArrowRight} /></div>
        </BlueButton>
    )
}

export const GreenArrowButtons = (props) => {
    const {text} = props;
    return (
        <LearnMoreButton>
            {text} <div><FontAwesomeIcon icon={faArrowRight} /></div>
        </LearnMoreButton>
    )
}

export const BlueFullButtons = (props) => {
    const {text} = props;
    return (
        <TitleButton>
               {text}<div><FontAwesomeIcon icon={faAngleRight}/></div>
        </TitleButton>
    )
}