import styled from 'styled-components';
import avatar from '../img/dev-jane-01.jpg';

const StyledIntro = styled.section`
  /* Intro section */
  position: relative;

  .intro__img {
    box-shadow: var(--bs);
  }

  .section__subtitle--intro {
    display: inline-block;
  }

  @media (min-width: 600px) {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      'img title'
      'img subtitle';
    grid-template-columns: min-content max-content;

    .intro__img {
      grid-area: img;
      min-width: 250px;
      position: relative;
      z-index: 2;
    }

    .section__subtitle--intro {
      align-self: start;
      grid-column: -1 / 1;
      grid-row: 2;
      text-align: right;
      position: relative;
      left: -1.5em;
      width: calc(100% + 1.5em);
    }
  }
`;

const Intro = () => {
  return (
    <StyledIntro className='intro' id='home'>
      <h1 className='section__title section__title--intro'>
        Hi, I am <strong>Jane Smith</strong>
      </h1>
      <p className='section__subtitle section__subtitle--intro'>
        front-end dev
      </p>
      <img src={avatar} alt='Jane Smith smiling' className='intro__img' />
    </StyledIntro>
  );
};
export default Intro;
