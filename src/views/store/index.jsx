import React from 'react';
import { Header } from './header';
import { StoreLayout } from './style';
import { Slider } from 'components/slider';


export const Store = () => {
    return (
        <StoreLayout>
             <Header />
             <Slider />
        </StoreLayout>
    )
}