import React from 'react';
import styled from 'styled-components';
import Portfolio from './Portfolio';

type WorkProps = {};

const StyledWork = styled.section`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  text-align: center;

  .section__subtitle--work {
    color: var(--clr-accent);
    font-weight: var(--fw-bold);
    margin-bottom: 2em;
  }
`;

const Work: React.FC<WorkProps> = () => {
  return (
    <StyledWork id='work'>
      <h2 className='section__title section__title--work'>My work</h2>
      <p className='section__subtitle section__subtitle--work'>
        A selection of my range of work
      </p>
      <Portfolio />
    </StyledWork>
  );
};
export default Work;
