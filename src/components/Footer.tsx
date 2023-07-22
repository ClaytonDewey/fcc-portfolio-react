import React from 'react';
import styled from 'styled-components';
import { FaCodepen, FaDribbble, FaTwitter, FaGithub } from 'react-icons/fa';

type FooterProps = {};

const StyledFooter = styled.footer`
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 2.5em 0;
  font-size: var(fs-h3);

  a {
    color: inherit;
    text-decoration: none;
  }

  .footer__link {
    font-weight: var(--fw-bold);
  }

  .footer__link:hover,
  .social-list__link:hover {
    opacity: 0.7;
  }

  .footer__link:hover {
    text-decoration: underline;
  }

  .social-list {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2em 0 0;
    padding: 0;
  }

  .social-list__item {
    margin: 0 0.5em;
  }

  .social-list__link {
    padding: 0.5em;
  }
`;

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <a href='mailto:hello@jane.dev' className='footer__link'>
        hello@jane.dev
      </a>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a href='https://codepen.io' className='social-list__link'>
            <FaCodepen />
          </a>
        </li>
        <li className='social-list__item'>
          <a href='https://dribbble.com' className='social-list__link'>
            <FaDribbble />
          </a>
        </li>
        <li className='social-list__item'>
          <a href='https://twitter.com' className='social-list__link'>
            <FaTwitter />
          </a>
        </li>
        <li className='social-list__item'>
          <a href='https://github.com' className='social-list__link'>
            <FaGithub />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};
export default Footer;
