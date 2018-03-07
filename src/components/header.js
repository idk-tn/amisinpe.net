import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import header from '../../static/assets/header.svg';
import logo from '../../static/assets/logo.svg';

import { Styling, decode } from '../utils';

const Wrapper = styled.div`
  position: relative;
  height: 273px;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  background: white;
  border: 12px solid #efd3a3;
  padding: 14px;
  display: inline-block;
  border-radius: 113px;
  height: 180px;
  width: 180px;
  position: absolute;
  top: 30px;
  left: 69px;
  @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
    height: 145px;
    width: 145px;
    position: absolute;
    top: 13px;
    left: 13px;
  }
`;

const Logo = styled.img`
  display: block;
  height: 128px;
    width: 137px;
    @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
        height: 99px;
    }
`;

const BigSVG = styled.img`
  display: block;
  max-width: none;
    position: absolute;
    right: 0;
    height: 273px;
    @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
      height: 182px;
  }
        
`;

const Menu = styled.ul`
  position: absolute;
  bottom: 0;
  right: 15px;
  margin-bottom: 0;
`;

const MenuItem = styled.li`
  display: inline;
  margin: 0 0.05em;
`;

const MenuLink = styled(Link)`
  padding: 3px 12px;
  background: #ffe3b3;
  display: inline-block;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-top: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  @media only screen and (max-width: ${Styling.breakpoints.sm}px) {
    font-size: 15px;
  }
`;

const menuItems = [
  { link: '/', label: 'Accueil' },
  { link: '/presentation/', label: 'Pr&eacute;sentation' },
  { link: '/actions/', label: 'Actions' },
  { link: '/journal-de-bord/', label: 'Journal de bord' },
  { link: '/dernier-bulletin/', label: 'Derniers bulletins' },
];

export const Header = () => (
  <Wrapper className="header">
    <BigSVG
      alt="Site header"
      src={header}
    />
    <LogoContainer>
    <Logo
      alt="Amis INPE logo"
      src={logo}
    />
    </LogoContainer>
    <Menu>
      {menuItems.map(item => (
        <MenuItem key={item.link}>
          <MenuLink exact activeStyle={{ background: '#efd3a3' }} to={item.link}>{decode(item.label)}</MenuLink>
        </MenuItem>
      ))}
    </Menu>
  </Wrapper>
);
