import React from 'react';
import { Header } from './header';
import { StoreLayout } from './style';
import { Slider } from 'components/slider';
import { Features } from 'components/features';


export const Store = () => {
    return (
        <StoreLayout>
             <Header />
             <Slider />
             <Features />
        </StoreLayout>
    )
}