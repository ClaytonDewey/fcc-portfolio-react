import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import NavToggle from './NavToggle';
import Logo from './Logo';

type HeaderProps = {};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavToggle />
      <Nav />
    </StyledHeader>
  );
};
export default Header;
