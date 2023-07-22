import styled from 'styled-components';
import logo from '../img/devjane.png';

const StyledDiv = styled.div`
  max-width: 100px;
`;

const Logo = () => {
  return (
    <StyledDiv>
      <img src={logo} alt='' role='presentation' />
    </StyledDiv>
  );
};
export default Logo;
