import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {
    HomeLayout, 
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
    MenuBlockHeader,
    ThirdSection,
    ThirdSectionRight,
    ThirdSectionTitle,
    ThirdSectionText,
    ThirdSectionButton,
    ExtraText,
    ReadMoreButton,
    ReadMore,
    FourthSection,
    FourthSectionLeft,
    FourthSectionLeftText,
    ThirdSectionLeft,
    FourthSectionRight,
    FifthSection,
    FifthSectionHeader,
    FifthSectionBody,
    FifthBodyItem,
    CircleTick,
    Feature,
    SixthSection,
    SixthSectionHeader,
    SixthSectionBody,
    SalesFeature,
    SaleFeatureTitle,
    SaleFeatureLightText,
    SaleFeatureCostText,
    SaleFeatureHorizontalDivider,
    SaleFeatureText,
    SaleFeatureReadMore,
    SaleFeatureBotton,
    PartnerSection,
    PartnerSectionTitle,
    PartnerSlider,
    SliderCard,
    PartnerSliderContents,
    ControlArrow,
    SliderSensor,
    SliderSensorPin,
    DemoWrapper,
    Demo,
    DemoOverlay,
    DemoLeft,
    DemoRight,
    DemoLeftText,
    DemoLeftTextSmall
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faAngleDown,
    faBars,
    faTimes,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import Footer from 'components/footer';
import {Hero} from 'components/vertical-slider/hero';


const cannabis = '../assets/SVG/icon/canna.svg';
const payment = '../assets/SVG/icon/payments.svg';
const tractor = '../assets/SVG/icon/manufacturer.svg';
const partnerLogoElo = '../assets/partner-logo/partner-logo-elo.svg';
const partnerLogoNCIN = '../assets/partner-logo/partner-logo-NCIN.png';
const partnerLogoSquare = '../assets/partner-logo/partner-logo-square.svg';
const rightArrow = '../assets/SVG/Icon/next.svg';
const leftArrow = '../assets/SVG/Icon/back.svg';

const headerRef = React.createRef();
const Home = (props) => {

    const [sticky, setSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const goto = (path) => {
        props.history.push(`/${path}`);
    }
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
    <HomeLayout>
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
                <MenuItem onClick={goto.bind(null, 'management')}>Management Solutions</MenuItem>
                <MenuItem onClick={goto.bind(null, 'point-of-sale')}>Point of Sale</MenuItem>
                <MenuItem onClick={goto.bind(null, 'store')}>Store <FontAwesomeIcon icon={faAngleDown}/></MenuItem>
                <MenuItem onClick={goto.bind(null, 'about')}>About CTRAX</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
            <MenuButton><div onClick={setShowMenu.bind(null, true)}><FontAwesomeIcon icon={faBars} /></div></MenuButton>
        </StickyMiddleNav>}
        <Hero show={setShowMenu.bind(null, true)}/>   
        <MiddleNav ref={headerRef} sticky={sticky}>
            <MenuItem onClick={goto.bind(null, 'management')}>Management Solutions</MenuItem>
            <MenuItem>Point of Sale</MenuItem>
            <MenuItem onClick={goto.bind(null, 'store')}>Store <FontAwesomeIcon icon={faAngleDown}/></MenuItem>
            <MenuItem onClick={goto.bind(null, 'about')}>About C-TRAX</MenuItem>
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
                    Certified Square Partner Manage Discounts and coupons across all
                    store Simple and consolidated reporting allowing you to maiximize your
                    bottom line.
                </SecondSectionRightText>
                <LearnMoreButton>
                    Learn more <div><FontAwesomeIcon icon={faArrowRight} /></div>
                </LearnMoreButton>
            </SecondSectionRight>
        </SecondSection>
        <ThirdSection>
            <ThirdSectionLeft/>
            <ThirdSectionRight>
               <ThirdSectionTitle>
                   All-in-one POS solution
                </ThirdSectionTitle>
                <ThirdSectionText>
                    PayPoint Plus provides everything a merchant needs including a fully
                    integrated 2D barcode scanner from Honeywell, a 3-inch printer from
                    Star Micronics, an encrpytable MSR from Magtek, full-sized 16-inch cash
                    drawer and connections for third party peripherals. With a flip-for-
                    signature and a built-in customer facing display to encourage shopper enagegement,
                    this space-saving and commercial-grade AiO is ideal for 
                    retail, hospitality, restaurants and entertainment venues.
                </ThirdSectionText>
                <ThirdSectionButton>
                    Learn More <div><FontAwesomeIcon icon={faArrowRight} /></div>
                </ThirdSectionButton>
                <div>
                    <ExtraText>
                        The Process from seed to soil, 
                        a farm's journey.
                    </ExtraText>
                    <ReadMore>
                        <p>Read the story</p>
                        <ReadMoreButton/>
                    </ReadMore>
                   
                </div>
            </ThirdSectionRight>
        </ThirdSection>
        <FourthSection>
            <FourthSectionLeft>
                <FourthSectionLeftText>
                    Processing and Manufacturing Hemp
                    Solutions
                </FourthSectionLeftText>
                <img src={tractor} alt="manufacturer" />
            </FourthSectionLeft>
            <FourthSectionRight>
                <ThirdSectionText>
                    Retailers have peace of mind knowing they are buying from the
                    source. Processors can buy directly from cultivators and wholesale
                    directly to retailers. Blockchain soil to sale, integrate directly with
                    the online marketplace providing seamless product history from
                    the farm to the customer.
                </ThirdSectionText>
                <LearnMoreButton>
                    Learn more <div><FontAwesomeIcon icon={faArrowRight} /></div>
                </LearnMoreButton>
                <div>
                    <ExtraText>
                        [Alt Style] The Process from
                        seed to soil, a farm's journey
                    </ExtraText>
                    <ReadMore>
                        <p>Read the story</p>
                        <ReadMoreButton/>
                    </ReadMore>
                </div>
            </FourthSectionRight>
        </FourthSection>
        <FifthSection>
            <FifthSectionHeader>
                Features in support
                of your needs
            </FifthSectionHeader>
            <FifthSectionBody>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
                <FifthBodyItem>
                    <CircleTick/>
                    <Feature>
                        <h2>Feature</h2>
                        <p>
                            Quick overview of
                            features of software and
                            hardware.
                        </p>
                    </Feature>
                </FifthBodyItem>
            </FifthSectionBody>
        </FifthSection>
        <SixthSection>
            <SixthSectionHeader>
                Management Solutions Pricing
            </SixthSectionHeader>
            <SixthSectionBody>
                <SalesFeature border={true}>
                    <SaleFeatureTitle>
                        Core
                    </SaleFeatureTitle>
                    <SaleFeatureLightText>
                        Unlimited cashiers
                    </SaleFeatureLightText>
                    <SaleFeatureCostText>
                        <p>$</p>
                        <h3>249</h3>
                    </SaleFeatureCostText>
                    <SaleFeatureLightText spacing={25}>
                        per month
                    </SaleFeatureLightText>
                    <SaleFeatureLightText spacing={25}>
                        $199 Annually
                    </SaleFeatureLightText>
                    <SaleFeatureHorizontalDivider spacing={35}/>
                    <SaleFeatureText spacing={25}>
                        Point of Sale register
                    </SaleFeatureText>
                    <SaleFeatureText spacing={25}>
                        Inventory management
                    </SaleFeatureText>
                    <SaleFeatureText spacing={45}>
                        Sales reporting
                    </SaleFeatureText>
                    <SaleFeatureHorizontalDivider spacing={10}/>
                    <SaleFeatureReadMore>
                        <SaleFeatureText>
                            Read more
                        </SaleFeatureText>
                        <div>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                    </SaleFeatureReadMore>
                    <SaleFeatureHorizontalDivider spacing={10}/>
                    <SaleFeatureBotton>
                        Order now
                    </SaleFeatureBotton>
                </SalesFeature>
                <SalesFeature>
                    <SaleFeatureTitle>
                        Enterprise
                    </SaleFeatureTitle>
                    <SaleFeatureLightText>
                        Unlimited terminals and users
                    </SaleFeatureLightText>
                    <SaleFeatureCostText>
                        <p>$</p>
                        <h3>499</h3>
                    </SaleFeatureCostText>
                    <SaleFeatureLightText spacing={25}>
                        per month
                    </SaleFeatureLightText>
                    <SaleFeatureLightText spacing={25}>
                        $399 Annually
                    </SaleFeatureLightText>
                    <SaleFeatureHorizontalDivider spacing={35}/>
                    <SaleFeatureText spacing={25}>
                        Includes enhances reporting
                    </SaleFeatureText>
                    <SaleFeatureText spacing={25}>
                        All integrations
                    </SaleFeatureText>
                    <SaleFeatureText spacing={7}>
                        Additional options available
                    </SaleFeatureText>
                    <SaleFeatureText spacing={25}>
                        A la carte and Customer Loyalty
                    </SaleFeatureText>
                    <SaleFeatureHorizontalDivider spacing={10}/>
                    <SaleFeatureReadMore>
                        <SaleFeatureText>
                            Read more
                        </SaleFeatureText>
                        <div>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                    </SaleFeatureReadMore>
                    <SaleFeatureHorizontalDivider spacing={10}/>
                    <SaleFeatureBotton>
                        Order now
                    </SaleFeatureBotton>
                </SalesFeature>
            </SixthSectionBody>
        </SixthSection>
        <PartnerSection>
                <PartnerSectionTitle> 
                    Partners
                </PartnerSectionTitle>
                <PartnerSlider>
                    <ControlArrow>
                        <img src={leftArrow} alt="left"/>
                    </ControlArrow>
                    <PartnerSliderContents>
                        <SliderCard>
                            <img src={partnerLogoElo} alt={`elo`}/>
                        </SliderCard>
                        <SliderCard>
                            <img src={partnerLogoSquare} alt={`Square`} />
                        </SliderCard>
                        <SliderCard>
                            <img src={partnerLogoNCIN} alt={`NCIN`} />
                        </SliderCard>
                    </PartnerSliderContents>
                    <ControlArrow>
                        <img src={rightArrow} alt="right"/>
                    </ControlArrow>
                </PartnerSlider>
                <SliderSensor>
                    <SliderSensorPin><div /></SliderSensorPin>
                    <SliderSensorPin><div /></SliderSensorPin>
                    <SliderSensorPin active={true}><div /></SliderSensorPin>
                    <SliderSensorPin><div /></SliderSensorPin>
                    <SliderSensorPin><div /></SliderSensorPin>
                </SliderSensor>
            </PartnerSection>
            <DemoWrapper>
                <Demo />
                <DemoOverlay>
                    <DemoLeft>
                        <DemoLeftText>
                            Schedule a Demo.
                        </DemoLeftText>
                        <DemoLeftTextSmall>
                            We'll never share your email and you can
                            opt out at any time!
                        </DemoLeftTextSmall>
                    </DemoLeft>
                    <DemoRight></DemoRight>
                </DemoOverlay>
            </DemoWrapper>
            <Footer />
    </HomeLayout>
    )
}

export default withRouter(Home)