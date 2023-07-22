import React from 'react';
import styled from 'styled-components';

type NavProps = {};

const StyledNav = styled.nav`
  position: fixed;
  background: var(--clr-dark);
  color: var(--clr-light);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  transform: translateX(100%);
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);

  .nav__list {
    list-style: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .nav__link {
    color: inherit;
    font-weight: var(--fw-bold);
    font-size: var(--fs-h2);
    text-decoration: none;
  }

  .nav__link:hover {
    color: var(--clr-accent);
  }
`;

const Nav: React.FC<NavProps> = () => {
  return (
    <StyledNav>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a href='/' className='nav__link'>
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#services' className='nav__link'>
            My Services
          </a>
        </li>
        <li className='nav__item'>
          <a href='#about' className='nav__link'>
            About me
          </a>
        </li>
        <li className='nav__item'>
          <a href='#work' className='nav__link'>
            My work
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};
export default Nav;
