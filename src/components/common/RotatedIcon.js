import styled from 'styled-components';

const RotatedIcon = styled.div`
  transform: ${(props) => props.rotate};
  margin: ${(props) => props.margin};
`;

export default RotatedIcon;
