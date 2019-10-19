import React, {useEffect, useState} from 'react';
import {
    HomeLayout, 
    TitleManagement, 
    TextWrapper, 
    TitleCaption, 
    TitleButton, 
    TitleText,
    HeaderWrapper,
    MiddleNav,
    MenuItem,
    MiddleSection,
    MiddleLeftArea,
    MiddleTextLeft,
    MiddleRightArea,
    MiddleTextRight,
    ChatBlueButton,
    SecondSection,
    SecondSectionLeft,
    SecondSectionLeftText,
    SecondSectionRight,
    SecondSectionRightText,
    LearnMoreButton,
    StickyMiddleNav,
    Menu,
    MenuButton,
    MenuOverlay,
    OverlayHeader,
    OverlaySection,
    MenuBlock,
    MenuBlockHeader
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faArrowRight,
    faAngleDown,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const cannabis = '../assets/SVG/icon/canna.svg';
const payment = '../assets/SVG/icon/payments.svg';
const headerRef = React.createRef();
const homeRef = React.createRef();
export const Home = () => {

    const [sticky, setSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);



    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if(headerRef.current){
                const {top} = headerRef.current.getBoundingClientRect();
                if(top <= 0){
                    if(sticky === false){
                        setSticky(true)
                    }
                }else if(top > 0){
                    if(sticky === true){
                        setSticky(false)
                    }
                }
            }
        })
    })
    return (
    <HomeLayout ref={homeRef}>
        <MenuOverlay show={showMenu}>
            <OverlayHeader>
                <div/>
                <MenuButton>
                    <div onClick={setShowMenu.bind(null, false)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </MenuButton>
            </OverlayHeader>
            <OverlaySection>
                <MenuBlock>
                    <MenuBlockHeader>
                        Solutions
                    </MenuBlockHeader>
                    <p>Management Solutions</p>
                    <p>Processing and Manufacturing Solutions</p>
                    <p>Data Analytics</p>
                </MenuBlock>
                <MenuBlock>
                    <MenuBlockHeader>
                        Point of Sale
                    </MenuBlockHeader>
                    <p>Hardware Solutions</p>
                </MenuBlock>
                <MenuBlock>
                    <MenuBlockHeader>
                        Store
                    </MenuBlockHeader>
                    <p>Hardware</p>
                    <p>Merchandise</p>
                </MenuBlock>
                <MenuBlock>
                    <MenuBlockHeader>
                        Company
                    </MenuBlockHeader>
                    <p>Blog</p>
                    <p>Contacts</p>
                </MenuBlock>
            </OverlaySection>
        </MenuOverlay>
        {sticky && <StickyMiddleNav>
            <div/>
            <Menu>
                <MenuItem>Management Solutions</MenuItem>
                <MenuItem>Point of Sale</MenuItem>
                <MenuItem>Store <FontAwesomeIcon icon={faAngleDown}/></MenuItem>
                <MenuItem>About CTRAX</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
            <MenuButton><div onClick={setShowMenu.bind(null, true)}><FontAwesomeIcon icon={faBars} /></div></MenuButton>
        </StickyMiddleNav>}
        <HeaderWrapper>
            <TextWrapper>
                <TitleManagement>
                    Management Solutions
                </TitleManagement>
                <TitleCaption>
                    Cannabis software,
                </TitleCaption>
                <TitleCaption>
                    done right!
                </TitleCaption>
                <TitleButton>
                    Management Solutions
                    <div><FontAwesomeIcon icon={faAngleRight}/></div>
                </TitleButton>
                <TitleText>See Hardware Solutions <span><FontAwesomeIcon icon={faArrowRight} /></span></TitleText>
            </TextWrapper>
        </HeaderWrapper>   
        <MiddleNav ref={headerRef} sticky={sticky}>
            <MenuItem>Management Solutions</MenuItem>
            <MenuItem>Point of Sale</MenuItem>
            <MenuItem>Store <FontAwesomeIcon icon={faAngleDown}/></MenuItem>
            <MenuItem>About CTRAX</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Contact</MenuItem>
        </MiddleNav>
        <MiddleSection>
            <MiddleLeftArea>
                <img src={cannabis} alt={"Canna"}/>
                <MiddleTextLeft>C-TRAX software,</MiddleTextLeft>
                <MiddleTextLeft>and hardware</MiddleTextLeft>
                <MiddleTextLeft>solutions for</MiddleTextLeft>
                <MiddleTextLeft>Hemp retailers</MiddleTextLeft>
            </MiddleLeftArea>
            <MiddleRightArea>
                <MiddleTextRight>
                    C-Trax is the only Point of Sale designed with the hemp retailer in mind.
                    Designed with high volume and multi-store managment in mind, C-Trax
                    brings easy to use POS functionality tied togrther with a comprehensive
                    back-office management solutions.
                    We are bringing mainstream business functions to the CBD industry via
                    integrations with Square, WooCommerce, Shopify, Quickbooks and
                    MailChimp.
                </MiddleTextRight>
            </MiddleRightArea>
            <ChatBlueButton>
                Chat
            </ChatBlueButton>
        </MiddleSection>
        <SecondSection>
            <SecondSectionLeft>
                <div>
                <SecondSectionLeftText>The first hemp</SecondSectionLeftText>
                <SecondSectionLeftText>software solution</SecondSectionLeftText>
                <SecondSectionLeftText>bringing integrated</SecondSectionLeftText>
                <SecondSectionLeftText>payments</SecondSectionLeftText>
                </div>
                <img src={payment} alt={'payment'} /> 
            </SecondSectionLeft>
            <SecondSectionRight>
                <SecondSectionRightText>
                    Know your customers. C-Trax brings customer buying history and
                    product prefrences to the checkout screen. Necer miss an opportunity
                    to up-sell! Back office management. Manage all your sales reports,
                    employee performance and inventory from one login. Multi rooftoop is our
                    speciality.
                </SecondSectionRightText>
                <SecondSectionRightText>
                    We integrate with Shopify, Quickbooks, and Mail-chimp.
                    Certified Square Partner Manage Discounts and coupons acreoss all
                    store Simple and consolidated reporting allowing you to maiximize your
                    bottom line.
                </SecondSectionRightText>
                <LearnMoreButton>
                    Learn more <div><FontAwesomeIcon icon={faArrowRight} /></div>
                </LearnMoreButton>
            </SecondSectionRight>
        </SecondSection>
    </HomeLayout>
    )
}