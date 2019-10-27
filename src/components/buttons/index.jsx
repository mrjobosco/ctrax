import React from 'react';
import {BlueButton, LearnMoreButton} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


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