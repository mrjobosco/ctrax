import React from 'react';
import {
    ManagementLayout,
    FirstSection,
    Header,
    Menu,
    MenuItem,
    HeaderButton,
    FirstSectionContent,
    FirstSectionLeftSide,
    FirstSectionRightSide,
    Team,
    TeamTitle,
    TeamContent,
    TeamLeftSide,
    HeaderShot,
    HeadShotOutline,
    HeadShotImage,
    ExtraOutline,
    JoinTheTeam,
    PartnerSection,
    PartnerSectionTitle,
    PartnerSlider,
    SliderCard,
    PartnerSliderContents,
    ControlArrow,
    SliderSensor,
    SliderSensorPin,
    Investor,
    InvestorLeftSide,
    InvestorRightSide,
    Socials,
    Blog,
    BlogTitle,
    BlogContent,
    BlogItem,
    BlogImage,
    BlogItemContent,
    BlogDate,
    BlogItemTitle,
    BlogItemText,
    Divider,
    BlogFooter,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faComment, faEye, faShare } from '@fortawesome/free-solid-svg-icons';
import { BlueFullButtons } from 'components/buttons';
import { GreenFullButtons } from 'components/buttons';
import Footer from 'components/footer';


const partnerLogoElo = '../assets/partner-logo/partner-logo-elo.svg';
const partnerLogoNCIN = '../assets/partner-logo/partner-logo-NCIN.png';
const partnerLogoSquare = '../assets/partner-logo/partner-logo-square.svg';
const rightArrow = '../assets/SVG/Icon/next.svg';
const leftArrow = '../assets/SVG/Icon/back.svg';

const behance = '../assets/SVG/behance.svg';
const facebook = '../assets/SVG/facebook-logo.svg';
const google = '../assets/SVG/google-plus.svg';
const twitter = '../assets/SVG/twitter-black-shape.svg';
const instagram = '../assets/SVG/instagram-logo.svg';


export const Management  = () => {
    return (
        <ManagementLayout>
            <FirstSection>
                <Header>
                    <div/>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Management Solutions</MenuItem>
                        <MenuItem>Point of Sale</MenuItem>
                        <MenuItem>Store</MenuItem>
                        <MenuItem>About CTrax</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                    <HeaderButton>
                        <FontAwesomeIcon icon={faBars} />
                    </HeaderButton>
                </Header>
                <FirstSectionContent>
                    <FirstSectionLeftSide>
                        <h4>The C-Trax Mission</h4>
                        <p>Advocates for the hemp and cannabis industry</p>
                    </FirstSectionLeftSide>
                    <FirstSectionRightSide>
                        <p>
                            We believe in advocating and fighting with industry partners
                            to ensure hemp and cannabis are inclusive and equal opportunity.
                            We believe in protectig consumers of cannabis products and equipping
                            retailers to maximize the potential of the store.
                        </p>
                        <BlueFullButtons text={'See our POS Solutions'}/>
                    </FirstSectionRightSide>
                </FirstSectionContent>
            </FirstSection>
            <Team>
                <TeamTitle>Meet Our Team</TeamTitle>
                <TeamContent>
                    <TeamLeftSide>
                        <HeaderShot>
                            <HeadShotOutline>
                                <HeadShotImage>

                                </HeadShotImage>
                            </HeadShotOutline>
                            <h4>Name</h4>
                            <p>Title</p>
                        </HeaderShot>
                        <HeaderShot>
                            <HeadShotOutline>
                                <HeadShotImage>
                                    
                                </HeadShotImage>
                            </HeadShotOutline>
                            <h4>Name</h4>
                            <p>Title</p>
                        </HeaderShot>
                        <HeaderShot>
                            <HeadShotOutline>
                                <HeadShotImage>
                                    
                                </HeadShotImage>
                            </HeadShotOutline>
                            <h4>Name</h4>
                            <p>Title</p>
                        </HeaderShot>
                        <HeaderShot>
                            <HeadShotOutline>
                                <HeadShotImage>
                                    
                                </HeadShotImage>
                            </HeadShotOutline>
                            <h4>Name</h4>
                            <p>Title</p>
                        </HeaderShot>
                        <HeaderShot>
                            <HeadShotOutline>
                                <HeadShotImage>
                                    
                                </HeadShotImage>
                            </HeadShotOutline>
                            <h4>Name</h4>
                            <p>Title</p>
                        </HeaderShot>
                    </TeamLeftSide>
                    <HeaderShot>
                        <ExtraOutline>
                            <HeadShotOutline>
                                <JoinTheTeam>
                                    <FontAwesomeIcon icon={faPlus} />
                                </JoinTheTeam>
                            </HeadShotOutline>
                        </ExtraOutline>
                        <h4>Join the team</h4>
                        </HeaderShot>
                </TeamContent>
            </Team>
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
            <Investor>
                <InvestorLeftSide>
                    <h4>Investors</h4>
                    <p>
                        C-Trax is an ERP solution for industrial hemp business to manage sales,
                        payments, staff, customers, and inventory in one place.
                    </p>
                    <p>
                        Our goal is to provide a one stop shop for cannabis and hemnp software
                        solutions and this will be achieved through strategic partnerships and
                        user-centric approach to our agile development process.
                    </p>
                </InvestorLeftSide>
                <InvestorRightSide>
                    <GreenFullButtons text={'Inquire about our solutions'} />
                    <Socials>
                        <p>Follow us</p>
                        <div>
                            <img src={google} alt={'google'}/>
                            <img src={facebook} alt={'facebook'}/>
                            <img src={twitter} alt={'twitter'} />
                            <img src={instagram} alt={'instagram'}/>
                            <img src={behance} alt={'behance'}/>
                        </div>
                    </Socials>
                </InvestorRightSide>
            </Investor>
            <Blog>
                <BlogTitle>
                    Blog
                </BlogTitle>
                <BlogContent>
                    <BlogItem>
                        <BlogImage/>
                        <BlogItemContent>
                            <BlogDate>APR 11. 2016</BlogDate> 
                            <BlogItemTitle>Libero Leo, mattis id blandit id</BlogItemTitle>
                            <BlogItemText>In libero leo mattis id blandit id, suscipit at elit.</BlogItemText>
                            <Divider />
                            <BlogFooter>
                                <div>
                                    <span><FontAwesomeIcon icon={faComment} /></span> 123
                                </div>
                               <div>
                                    <span> <FontAwesomeIcon icon={faEye} /> </span> 4567
                               </div>
                               <p><FontAwesomeIcon icon={faShare} /></p>
                            </BlogFooter>
                        </BlogItemContent>
                    </BlogItem>
                    <BlogItem>
                        <BlogImage/>
                        <BlogItemContent>
                            <BlogDate>APR 11. 2016</BlogDate> 
                            <BlogItemTitle>Libero Leo, mattis id blandit id</BlogItemTitle>
                            <BlogItemText>In libero leo mattis id blandit id, suscipit at elit.</BlogItemText>
                            <Divider />
                            <BlogFooter>
                                <div>
                                    <span><FontAwesomeIcon icon={faComment} /></span> 123
                                </div>
                               <div>
                                    <span> <FontAwesomeIcon icon={faEye} /> </span> 4567
                               </div>
                               <p><FontAwesomeIcon icon={faShare} /></p>
                            </BlogFooter>
                        </BlogItemContent>
                    </BlogItem>
                    <BlogItem>
                        <BlogImage/>
                        <BlogItemContent>
                            <BlogDate>APR 11. 2016</BlogDate> 
                            <BlogItemTitle>Libero Leo, mattis id blandit id</BlogItemTitle>
                            <BlogItemText>In libero leo mattis id blandit id, suscipit at elit.</BlogItemText>
                            <Divider />
                            <BlogFooter>
                                <div>
                                    <span><FontAwesomeIcon icon={faComment} /></span> 123
                                </div>
                               <div>
                                    <span> <FontAwesomeIcon icon={faEye} /> </span> 4567
                               </div>
                               <p><FontAwesomeIcon icon={faShare} /></p>
                            </BlogFooter>
                        </BlogItemContent>
                    </BlogItem>
                </BlogContent>
            </Blog>
            <Footer />
        </ManagementLayout>
    )
}