import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5em;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 1000;

  .hamburger {
    display: block;
    position: relative;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    background: var(--clr-accent);
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
  }

  .hamburger::before {
    top: 6px;
  }
  .hamburger::after {
    bottom: 6px;
  }
`;

const NavToggle = () => {
  return (
    <StyledButton aria-label='toggle navigation'>
      <span className='hamburger'></span>
    </StyledButton>
  );
};
export default NavToggle;
