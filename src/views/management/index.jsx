import React from 'react';
import Menu from 'components/menu';
import {
  ManagementLayout,
  HeaderSection,
  HeaderTitle,
  FirstSection
} from './style';

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
        
      </FirstSection>
    </ManagementLayout>
  )
}