import React from 'react';
import {
    Header,
    Menu,
    MenuItem,
    HeaderButton,
} from './style';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const MenuContainer =  (props) => {
  const goto = (path) => {
    props.history.push(`/${path}`);
  }
  return (
    <Header>
      <div />
      <Menu>
        <MenuItem onClick={goto.bind(null, '')}>Home</MenuItem>
        <MenuItem>Management Solutions</MenuItem>
        <MenuItem>Point of Sale</MenuItem>
        <MenuItem onClick={goto.bind(null, 'store')}>Store</MenuItem>
        <MenuItem>About C-Trax</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <HeaderButton>
        <FontAwesomeIcon icon={faBars} />
      </HeaderButton>
    </Header>
  )
}

export default withRouter(MenuContainer);