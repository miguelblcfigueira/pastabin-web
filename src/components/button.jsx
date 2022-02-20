import styled from 'styled-components';
import { PRIMARY_COLOR_LIGHTER, SECONDARY_COLOR, WHITE } from '../globalStyles';

const Button = styled.button`
background: ${WHITE};
color: ${PRIMARY_COLOR_LIGHTER};

&:hover {
  background: lightgrey;
  box-shadow: 0 4px 4px 0 ${SECONDARY_COLOR}, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

font-size: 1em;
font-weight: bold;
padding: 0.7em;
border: 0px solid ${SECONDARY_COLOR};
border-radius: 5px;
max-width: 300px;
`;

export default Button;
