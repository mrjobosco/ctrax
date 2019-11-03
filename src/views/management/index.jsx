import React from 'react';
import Menu from 'components/menu';
import {
  ManagementLayout,
  HeaderSection,
  HeaderTitle,
  FirstSection,
  FirstSectionLeft,
  FirstSectionRight,
  TitleManagement,
  Title,
  FirstSectionTextRight,
  SecondSection,
  SecondSectionTitle,
  SecondSectionMenu,
  SecondSectionMenuItem,
  SecondSectionImage,
  SecondSectionItemTitle,
  SecondSectionButtonWrapper,
  PaymentSection,
  PaymentTitle,
  PaymentTypes,
  Payment,
  PaymentNumber,
  PaymentItemTitle,
  PaymentItemText,
  ThirdSection,
  ThirdSectionLeft,
  ThirdSectionRight,
  TopText,
  ThirdSectionTitle,
  ThirdSectionText,
  ThirdSectionItems,
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
import { GreenArrowButtons } from 'components/buttons';
import Footer from 'components/footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
const ipad = '../assets/png/ipad-managment-solutions-analytics-2.png';
const creditCard = '../assets/SVG/Icon/credit card.svg';
const square = '../assets/SVG/Icon/square.svg';
const tick = '../assets/SVG/Icon/tick-inside-a-circle.svg';
// const payments = '../assets/SVG/Icon/payments.svg';
export default () => {
  return (
    <ManagementLayout>
      <HeaderSection>
        <Menu />
        <div>
          <HeaderTitle>
            Cannabis and Hemp
          </HeaderTitle>
          <HeaderTitle>
            POS Management Solution
          </HeaderTitle>
        </div>
      </HeaderSection>
      <FirstSection>
        <FirstSectionLeft/>
        <FirstSectionRight>
          <TitleManagement>
            Management Solutions
          </TitleManagement>
          <Title>
            Never miss an opportunity
          </Title>
          <FirstSectionTextRight>
            CTrax is the first hemp software solution bringing integrated payments to
            POS Know your customers. CTrax brings customer buying history and product preference
            to the checkout screen. Never miss an opportunity to up-sell!
          </FirstSectionTextRight>
          <FirstSectionTextRight>
            Back office management. Manage all your sales reports, employee performance
            and inventory from one login. Multi rooftop is our specialty.
            We integrate with Shopify, Quickbooks, and Mail-chimp Certified Square Partner
            Managem Discounts and coupons across all stores Simple and consolidated reporting
            allowing you to maximize your bottom line.
          </FirstSectionTextRight>
        </FirstSectionRight>
      </FirstSection>
      <SecondSection>
        <SecondSectionTitle>
          Management Solutions
        </SecondSectionTitle>
        <SecondSectionMenu>
          <SecondSectionMenuItem active={true}>SCREEN</SecondSectionMenuItem>
          <SecondSectionMenuItem>SCREEN</SecondSectionMenuItem>
          <SecondSectionMenuItem>SCREEN</SecondSectionMenuItem>
          <SecondSectionMenuItem>SCREEN</SecondSectionMenuItem>
        </SecondSectionMenu>
        <SecondSectionImage src={ipad}/>
        <SecondSectionItemTitle>
          Screen description
        </SecondSectionItemTitle>
        <SecondSectionButtonWrapper>
          <GreenArrowButtons text={'Buy now'} />
        </SecondSectionButtonWrapper>
      </SecondSection>
      <PaymentSection>
        <PaymentTitle>
          Types of payments accepted
        </PaymentTitle>
        <PaymentTypes>
          <Payment>
            <img src={creditCard} alt={'credit card'} />
            <PaymentNumber>
              <div>1</div>
            </PaymentNumber>
            <PaymentItemTitle>Credit Card</PaymentItemTitle>
            <PaymentItemText>Visa, MC, Discover, Amex</PaymentItemText>
          </Payment>
          <Payment>
            <img src={creditCard} alt={'square'} />
            <PaymentNumber>
              <div>2</div>
            </PaymentNumber>
            <PaymentItemTitle>Square Partners</PaymentItemTitle>
            <PaymentItemText>Certified Square Partners</PaymentItemText>
          </Payment>
          <Payment>
            <img src={square} alt={'square'} />
            <PaymentNumber>
              <div>3</div>
            </PaymentNumber>
            <PaymentItemTitle>Authorize.NET</PaymentItemTitle>
            <PaymentItemText>Certified Authorize.NET Partners</PaymentItemText>
          </Payment>
        </PaymentTypes>
      </PaymentSection>
      <ThirdSection>
        <ThirdSectionLeft />
        <ThirdSectionRight>
          <TopText>Data Analytics</TopText>
          <ThirdSectionTitle>Reporting, on Demand</ThirdSectionTitle>
          <ThirdSectionText>
            No more complicated data exports. Visualize and deep dive your
            reporting all through your admin portal. With C-Trax analytics you can get
            current and easy to understand reports on your Sales, Inventory, Vendors, Products
            and budristas. Compare and contrast preformance across locations, balnces inventory
            and staffing. ROI reports to ensure you stock your selves with the best products. 
            Vendors and products slaes as % of store revenues. Track customer up-sells and employee
            performance.
          </ThirdSectionText>
          <ThirdSectionItems>
            <img src={tick} alt={'tick'}/>
            <div>Average ticket pricing</div>
          </ThirdSectionItems>
          <ThirdSectionItems>
            <img src={tick} alt={'tick'}/>
            <div>Sales % across categories</div>
          </ThirdSectionItems>
          <ThirdSectionItems>
            <img src={tick} alt={'tick'}/>
            <div>Vendor affinity across budtenders</div>
          </ThirdSectionItems>
          <ThirdSectionItems>
            <img src={tick} alt={'tick'}/>
            <div>Embedded partnership with Yurbi.com</div>
          </ThirdSectionItems>
        </ThirdSectionRight>
      </ThirdSection>
      <SixthSection>
            <SixthSectionHeader>
                Pricing
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
    </ManagementLayout>
  )
}