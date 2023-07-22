import React from 'react';
import styled from 'styled-components';
import aboutImg from '../img/dev-jane-02.jpg';

type AboutProps = {};

const StyledAbout = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .about-me__img {
    box-shadow: var(--bs);
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      'title img'
      'subtitle img'
      'text img';
    grid-column-gap: 2em;

    .section__title--about {
      grid-area: title;
    }

    .section__subtitle--about {
      grid-column: 1 / -1;
      grid-row: 2;
      position: relative;
      left: -1em;
      width: calc(100% + 2em);
      padding-left: 1em;
      padding-right: calc(200px + 4em);
    }

    .about-me__img {
      grid-area: img;
      position: relative;
      z-index: 2;
    }
  }
`;

const About: React.FC<AboutProps> = () => {
  return (
    <StyledAbout id='about'>
      <h2 className='section__title section__title--about'>Who I am</h2>
      <p className='section__subtitle section__subtitle--about'>
        Designer &amp; developer based out of NYC
      </p>

      <div className='about-me__body'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          sapiente nesciunt nobis inventore blanditiis alias suscipit
          repellendus eius dolore deserunt sequi voluptas aspernatur accusamus
          in distinctio officiis quo, aut officia.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          explicabo quasi ad, obcaecati dignissimos voluptatem eos molestias in
          eaque earum omnis nam eveniet, sapiente ducimus dicta accusamus neque,
          recusandae consectetur!
        </p>
      </div>

      <img
        src={aboutImg}
        alt='Jane leaning against a bus'
        className='about-me__img'></img>
    </StyledAbout>
  );
};
export default About;
