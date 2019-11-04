import React from 'react';
import { HeaderWrapper, 
    HeaderBackground,
    HeaderOverlay, 
    HeaderContent, 
    HeaderMenu, 
    HeaderMunuItems, 
    StoreTitle,
    Logo,
    Menu,
    HeaderIcons,
    HeaderIconItem} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

export const Header  = (props) => {
    return(
        <HeaderBackground>
            <HeaderWrapper/>
            <HeaderOverlay/>
            <HeaderContent>
                <Logo>

                </Logo>
                <Menu>
                    <HeaderMenu>
                        <HeaderMunuItems onClick={props.link.bind(null, '')}>Home</HeaderMunuItems>
                        <HeaderMunuItems onClick={props.link.bind(null, 'point-of-sale')}>POS Hardware</HeaderMunuItems>
                        <HeaderMunuItems>Merchandise</HeaderMunuItems>
                        <HeaderMunuItems>Sign In</HeaderMunuItems>
                    </HeaderMenu>
                    <StoreTitle>Store</StoreTitle>
                </Menu>
                <HeaderIcons>
                    <HeaderIconItem>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </HeaderIconItem>
                    <HeaderIconItem>
                        <FontAwesomeIcon icon={faBars} />
                    </HeaderIconItem>
                </HeaderIcons>
            </HeaderContent>
        </HeaderBackground>
         
    )
}