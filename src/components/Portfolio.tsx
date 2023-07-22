import React from 'react';
import styled from 'styled-components';
import portfolioImg1 from '../img/portfolio-01.jpg';
import portfolioImg2 from '../img/portfolio-02.jpg';
import portfolioImg3 from '../img/portfolio-03.jpg';
import portfolioImg4 from '../img/portfolio-04.jpg';
import portfolioImg5 from '../img/portfolio-05.jpg';
import portfolioImg6 from '../img/portfolio-06.jpg';
import portfolioImg7 from '../img/portfolio-07.jpg';
import portfolioImg8 from '../img/portfolio-08.jpg';
import portfolioImg9 from '../img/portfolio-09.jpg';
import portfolioImg10 from '../img/portfolio-10.jpg';

type PortfolioProps = {};

const StyledPortfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .portfolio__item {
    background-color: var(--clr-accent);
    overflow: hidden;
  }

  .portfolio__img {
    transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1),
      opacity 250ms linear;
  }

  .portfolio__item:focus {
    position: relative;
    z-index: 2;
  }

  .portfolio__img:hover,
  .portfolio__item:focus .portfolio__img {
    transform: scale(1.2);
    opacity: 0.75;
  }
`;

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <StyledPortfolio>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg1} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg2} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg3} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg4} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg5} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg6} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg7} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg8} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg9} alt='' className='portfolio__img' />
      </a>
      <a href='/' className='portfolio__item'>
        <img src={portfolioImg10} alt='' className='portfolio__img' />
      </a>
    </StyledPortfolio>
  );
};
export default Portfolio;
