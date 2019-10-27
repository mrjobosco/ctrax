import React from 'react';
import {BlueButton} from './styles';
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