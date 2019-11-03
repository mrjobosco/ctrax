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
  SecondSectionItemCost
} from './style';
import Menu from 'components/menu';
const ipad = '../assets/png/ctrax-hardware-solutions.png';
const hardware = '../assets/SVG/Icon/hardware.svg';

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
            <img src={hardware} alt={'hardware'}/>
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
                <ReadMoreButton/>
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
        <SecondSectionImage src={ipad}/>
        <SecondSectionItemTitle>
          Elo Touch 9.7 and 12.9 inch screen
        </SecondSectionItemTitle>
        <SecondSectionItemCost>$1299</SecondSectionItemCost>
      </SecondSection>
    </PointLayout>
  )
}