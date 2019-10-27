import React from 'react';
import { Header } from './header';
import {
    StoreLayout,
    Products,
    ProductTitle,
    ProductMenuItem,
    ProductMenu,
    ProductRow,
    ProductItem,
    ProductName,
    ProductCost,
    ProductJumbotron
} from './style';
import { Slider } from 'components/slider';
import { Features } from 'components/features';
import { GreenArrowButtons } from 'components/bottons';

const shirts = '../assets/png/merchandise-holder.png';


export const Store = () => {
    return (
        <StoreLayout>
             <Header />
             <Slider />
             <Features />
             <Products>
                <ProductTitle>
                    Products
                </ProductTitle>
                <ProductMenu>
                    <ProductMenuItem active={true}>TEE SHIRT</ProductMenuItem>
                    <ProductMenuItem>HAT</ProductMenuItem>
                    <ProductMenuItem>SHOES</ProductMenuItem>
                    <ProductMenuItem>BADGE</ProductMenuItem>
                    <ProductMenuItem>SWEATER</ProductMenuItem>
                    <ProductMenuItem>LAPTOP</ProductMenuItem>
                </ProductMenu>
                <ProductRow>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                </ProductRow>
                <ProductRow>
                    <ProductJumbotron>
                        <h4>Our Gear</h4>
                        <p>Supports Advocacy for Cannabis and Hemp entrepreneurs</p>
                        <div><GreenArrowButtons text={'Learn More'} /></div>
                    </ProductJumbotron>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                </ProductRow>
                <ProductRow>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                    <ProductItem>
                        <img src={shirts} alt={'shirts'}/>
                        <ProductName>Tee Shirt</ProductName>
                        <ProductCost>$49</ProductCost>
                    </ProductItem>
                </ProductRow>
             </Products>
        </StoreLayout>
    )
}