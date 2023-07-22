import React from 'react';
import styled from 'styled-components';
import bgImg from '../img/services-bg.jpg';

type ServicesProps = {};

const StyledServices = styled.section`
  background-color: var(--clr-dark);
  background-image: url(${bgImg});
  background-size: cover;
  /* background-blend-mode: multiply; */
  color: var(--clr-light);
  text-align: center;

  .section__title--services {
    color: var(--clr-accent);
    position: relative;
  }

  .section__title--services::after {
    content: '';
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.5em auto 1em;
    background: var(--clr-light);
    opacity: 0.25;
  }

  .services {
    margin-bottom: 4em;
  }

  .service {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    .services {
      display: flex;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }

    .service + .service {
      margin-left: 2em;
    }
  }
`;

const Services: React.FC<ServicesProps> = () => {
  return (
    <StyledServices id='services'>
      <h2 className='section__title section__title--services'>What I Do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Design + Development</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            optio nihil assumenda molestias expedita non laudantium sint! Sint
            asperiores tempore vel, eius eaque odit, laudantium nulla labore
            quos aliquam porro.
          </p>
        </div>

        <div className='service'>
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            doloremque id perspiciatis dolore magni dolor excepturi repudiandae
            dicta! Rerum natus quia cum cumque voluptatibus at quisquam velit
            qui quaerat sequi?
          </p>
        </div>

        <div className='service'>
          <h3>WordPress</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit
            nisi eaque provident quasi commodi esse minima repudiandae nostrum
            sequi. Harum vitae minus maxime, reiciendis necessitatibus suscipit
            aut aperiam quia.
          </p>
        </div>
      </div>

      <a href='#work' className='btn'>
        My Work
      </a>
    </StyledServices>
  );
};
export default Services;
