import React from 'react';
import { ManagementLayout, FirstSection, Header, Menu, MenuItem, HeaderButton, FirstSectionContent, FirstSectionLeftSide, FirstSectionRightSide } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BlueFullButtons } from 'components/buttons';

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
        </ManagementLayout>
    )
}