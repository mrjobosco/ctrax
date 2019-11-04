import React from 'react';
import {
  PointLayout,
  HeaderSection,
  HeaderTitle,
  FirstSection,
  FirstSectionLeft,
  TitleManagement,
  FirstSectionTitle,
  ImageWrapper,
  FirstSectionRight,
  FirstSectionRightText,
  ExtraText,
  ReadMoreButton,
  ReadMore,
  SecondSection,
  SecondSectionTitle,
  SecondSectionMenu,
  SecondSectionMenuItem,
  SecondSectionImage,
  SecondSectionItemTitle,
  SecondSectionItemCost,
  ThirdSection,
  ThirdSectionLeft,
  ThirdSectionLeftTitle,
  ThirdSectionLeftText,
  ThirdSectionRight,
  ThirdSectionRightText,
  ThirdSectionRightItems,
  FourthSection,
  FourthSectionHeader,
  FourthSectionHeaderText,
  FourthSectionHeaderTitle,
  FourthSectionMiddle,
  FourthSectionMiddleLeft,
  FourthSectionMiddleRight,
  FourthSectionTitleSmall,
  FourthSectionTitleText,
  FourthSectionText,
  FourthSectionImageWrapper,
  FourthSectionFooter,
  FourthSectionFooterTitleSmall,
  FourthSectionFooterLeft,
  FooterButton,
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
  DemoWrapper,
  Demo,
  DemoOverlay,
  DemoLeft,
  DemoRight,
  DemoLeftText,
  DemoLeftTextSmall
} from './style';
import Menu from 'components/menu';
import {
  GreenArrowButtons
} from 'components/buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import Footer from 'components/footer';
const ipad = '../assets/png/ctrax-hardware-solutions.png';
const hardware = '../assets/SVG/Icon/hardware.svg';
const management = '../assets/SVG/Icon/management.svg';
const blockchain = '../assets/SVG/Icon/blockchain.svg';

export default () => {
  return (
    <PointLayout>
      <HeaderSection>
        <Menu />
        <div>
          <HeaderTitle>
            Cannabis and Hemp
          </HeaderTitle>
          <HeaderTitle>
            POS Hardware Solutions
          </HeaderTitle>
        </div>
      </HeaderSection>
      <FirstSection>
        <FirstSectionLeft>
          <TitleManagement>
            Hardware Solutions
          </TitleManagement>
          <FirstSectionTitle>
            Unmatched Point of Sale
            hardware style here
          </FirstSectionTitle>
          <ImageWrapper>
            <img src={hardware} alt={'hardware'} />
          </ImageWrapper>
        </FirstSectionLeft>
        <FirstSectionRight>
          <FirstSectionRightText>
            PayPoint for iPad is a new all-in-one mPOS solution that brings unmatched
            style to the point of sale with a dintinctive modern aesthetic. PayPoint Plus
            provides evertything a merchant needs including a fully integrated 2D barcode
            scanner from Honeywell, a 3-inch printer from Start Micronics, an encryptable
            MSR from Magtek, full-sized 16-inch cash drawer and connections fro third party
            peripherals. With a flip-for-signature and a built-in customer facing display to
            encourage shopper engegement, this space-saving and commercial-grade terminal is
            ideal for hemp retailer.
          </FirstSectionRightText>
          <div>
            <ExtraText>
              The Process from seed to soil,
              a farm's journey.
            </ExtraText>
            <ReadMore>
              <p>Read the story</p>
              <ReadMoreButton />
            </ReadMore>
          </div>
        </FirstSectionRight>
      </FirstSection>
      <SecondSection>
        <SecondSectionTitle>
          Hardware Solutions
        </SecondSectionTitle>
        <SecondSectionMenu>
          <SecondSectionMenuItem active={true}>Front</SecondSectionMenuItem>
          <SecondSectionMenuItem>CLOSED DRAWER</SecondSectionMenuItem>
          <SecondSectionMenuItem>OPEN DRAWER</SecondSectionMenuItem>
          <SecondSectionMenuItem>SIDE</SecondSectionMenuItem>
          <SecondSectionMenuItem>BACK</SecondSectionMenuItem>
        </SecondSectionMenu>
        <SecondSectionImage src={ipad} />
        <SecondSectionItemTitle>
          Elo Touch 9.7 and 12.9 inch screen
        </SecondSectionItemTitle>
        <SecondSectionItemCost>$1299</SecondSectionItemCost>
      </SecondSection>
      <ThirdSection>
        <ThirdSectionLeft>
          <ThirdSectionLeftTitle>
            Would we like more here?
            This is a duplicate
          </ThirdSectionLeftTitle>
          <ThirdSectionLeftText>
            PayPoint for iPad is a new all-in-one mPOS solution that brings unmatched
            style to the point of sale with a dintinctive modern aesthetic. PayPoint Plus
            provides evertything a merchant needs including a fully integrated 2D barcode
            scanner from Honeywell, a 3-inch printer from Start Micronics, an encryptable
            MSR from Magtek, full-sized 16-inch cash drawer and connections fro third party
            peripherals. With a flip-for-signature and a built-in customer facing display to
            encourage shopper engegement, this space-saving and commercial-grade terminal is
            ideal for hemp retailer.
          </ThirdSectionLeftText>
          <GreenArrowButtons text={'Buy now'} />
        </ThirdSectionLeft>
        <ThirdSectionRight>
          <ThirdSectionRightText>
            Buy using Pay-point, C-Trax can provide an all in one si=olution with a small frooprint.
          </ThirdSectionRightText>
          <li>Available with Windows, Android or for iPad</li>
          <li>Sleek, modern style build to last</li>
          <ThirdSectionRightItems>
            <li />
            <ThirdSectionRightText>
              Peripherals are built-in rather than bolted on - including the register,
              cash drawer, MSR, barcode scanner, reciept printer and customer facing dsiplay
              </ThirdSectionRightText>
          </ThirdSectionRightItems>
          <li>Designed for ease of serviceability</li>
          <li>Flip-for-signature touch screen and electronic reciept delivery.</li>
        </ThirdSectionRight>
      </ThirdSection>
      <FourthSection>
        <FourthSectionHeader>
          <FourthSectionHeaderText>
            Agriculture and Wholesale
          </FourthSectionHeaderText>
          <FourthSectionHeaderTitle>
            Processing and Manufacturing
          </FourthSectionHeaderTitle>
        </FourthSectionHeader>
        <FourthSectionMiddle>
          <FourthSectionMiddleLeft>

          </FourthSectionMiddleLeft>
          <FourthSectionMiddleRight>
            <FourthSectionTitleSmall>
              Business to Business Marketplace
              </FourthSectionTitleSmall>
            <FourthSectionTitleText>
              Integrated payments!
              </FourthSectionTitleText>
            <FourthSectionText>
              Retailers have peace of mind knowing they are buying from the source.
              Processors can buy directly from cultivators and wholesale directly to
              retailers. Digital COA's loaded directly by the cultivator. Cultivators
              can market their various crops ti the entire network of buyers. Establish
              weekly/ monthly and quarterly supply contracts. Escrow accounts to protect every
              business in the transaction. Eliminate the middle man. Finally do business directly
              with your customers.
              </FourthSectionText>
            <FourthSectionImageWrapper>
              <img src={management} alt="management" />
            </FourthSectionImageWrapper>
            <FooterButton>
              Register here for beta test
                <div><FontAwesomeIcon icon={faAngleRight} /></div>
            </FooterButton>
          </FourthSectionMiddleRight>
        </FourthSectionMiddle>
        <FourthSectionFooter>
          <FourthSectionFooterLeft>
            <FourthSectionFooterTitleSmall>
              Blockchain Soil to Sale
              </FourthSectionFooterTitleSmall>
            <FourthSectionText>
              Coming Soon. Integrate directly with the online marketplace
              providing seamless product history from the farm to the consumer.
              Track soil test results, heavy metals and lab testing all through one
              system. Track your plant material throughout the entire supply chain.
              </FourthSectionText>
            <FourthSectionImageWrapper>
              <img src={blockchain} alt="management" />
            </FourthSectionImageWrapper>
            <FooterButton>
              Register here for beta test
                <div><FontAwesomeIcon icon={faAngleRight} /></div>
            </FooterButton>
          </FourthSectionFooterLeft>
        </FourthSectionFooter>
      </FourthSection>
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
            <SaleFeatureHorizontalDivider spacing={35} />
            <SaleFeatureText spacing={25}>
              Point of Sale register
                    </SaleFeatureText>
            <SaleFeatureText spacing={25}>
              Inventory management
                    </SaleFeatureText>
            <SaleFeatureText spacing={45}>
              Sales reporting
                    </SaleFeatureText>
            <SaleFeatureHorizontalDivider spacing={10} />
            <SaleFeatureReadMore>
              <SaleFeatureText>
                Read more
                        </SaleFeatureText>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </SaleFeatureReadMore>
            <SaleFeatureHorizontalDivider spacing={10} />
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
            <SaleFeatureHorizontalDivider spacing={35} />
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
            <SaleFeatureHorizontalDivider spacing={10} />
            <SaleFeatureReadMore>
              <SaleFeatureText>
                Read more
                        </SaleFeatureText>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </SaleFeatureReadMore>
            <SaleFeatureHorizontalDivider spacing={10} />
            <SaleFeatureBotton>
              Order now
                    </SaleFeatureBotton>
          </SalesFeature>
        </SixthSectionBody>
      </SixthSection>
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
    </PointLayout>
  )
}