import React  from 'react';
import {
    Questions,
    QuestionsTitle,
    QuestionTextSmall,
    QuestionButtons,
    MapWrapper,
    FooterWrapper,
    FooterRightSide,
    FooterRightContent,
    FooterLeftSide,
    FooterSocials,
    FooterApp,
    AppleText,
    FooterButton,
    FooterFirstCompartment,
    FooterDivider,
    Footer,
    FooterLeft,
    FooterItems
} from './style';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Map from './map';

const behance = '../assets/SVG/Icon/behance.svg';
const facebook = '../assets/SVG/Icon/facebook-logo.svg';
const google = '../assets/SVG/Icon/google-plus.svg';
const twitter = '../assets/SVG/Icon/twitter-black-shape.svg';
const instagram = '../assets/SVG/Icon/instagram-logo.svg';
const apple = '../assets/SVG/Icon/apple.svg';


export default () => (
    <>
    <Questions>
    <QuestionsTitle>
        Questions?
    </QuestionsTitle>
    <QuestionTextSmall>
        Our support team is available via email or chat to help
        you with questions.
    </QuestionTextSmall>
    <QuestionButtons>
        Send a message <div><FontAwesomeIcon icon={faPaperPlane}/></div>
    </QuestionButtons>
</Questions>
<MapWrapper>
    <Map />
</MapWrapper>
<FooterWrapper>
    <FooterFirstCompartment>
    <FooterRightSide>
        <FooterRightContent>
            <h5>Solutions</h5>
            <p>Management Solutions</p>
            <p>Processing and Manufacturing Solutions</p>
            <p>Data Analytics</p>
        </FooterRightContent>
        <FooterRightContent>
            <h5>Store</h5>
            <p>Hardware Merchandise</p>
        </FooterRightContent>
        <FooterRightContent>
            <h5>Company</h5>
            <p>About C-Trax</p>
            <p>Blog</p>
            <p>Contacts</p>
        </FooterRightContent>
        <FooterRightContent>
            <h5>Contacts</h5>
            <p>info@c-trax.com</p>
            <p>227 W. 4th Street Charlotte, NC 28202</p>
            <p>Contacts</p>
        </FooterRightContent>
        <FooterRightContent>
            <h5>Point of Sale</h5>
            <p>Hardware Solutions</p>
        </FooterRightContent>
    </FooterRightSide>
    <FooterLeftSide>
        <FooterSocials>
            <p>Follow us</p>
            <div>
                <img src={google} alt={'google'}/>
                <img src={facebook} alt={'facebook'}/>
                <img src={twitter} alt={'twitter'} />
                <img src={instagram} alt={'instagram'}/>
                <img src={behance} alt={'behance'}/>
            </div>
        </FooterSocials>
        <FooterApp>
            <p>Download our app</p>    
            <FooterButton>
                <img src={apple} alt={'apple'}/>
                <AppleText>
                    <p>Download on the</p>
                    <h5>App Store</h5>
                </AppleText> 
            </FooterButton>
        </FooterApp>
    </FooterLeftSide>
    </FooterFirstCompartment>
    <FooterDivider />
    <Footer>
        <FooterLeft>
            <FooterItems>FAQ</FooterItems>
            <FooterItems>Media</FooterItems>
            <FooterItems>Privacy</FooterItems>
        </FooterLeft>
        <FooterItems>© 2019 C-Trax</FooterItems>
    </Footer>
</FooterWrapper>
</>
)