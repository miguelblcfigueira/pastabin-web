import propTypes from 'prop-types';
import styled from 'styled-components';
import { WHITE } from '../globalStyles';

function Label({ className, label, children }) {
  return (
    <label className={className}>
      <StyledLabelText>{label}</StyledLabelText>
      {children}
    </label>
  );
}

Label.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.element), propTypes.element]),
  label: propTypes.string.isRequired,
};

Label.defaultProps = {
  children: null,
};

const StyledLabelText = styled.div`
  margin-bottom: 0.7em;
`;

const StyledLabel = styled(Label)`
  display: flex;
  flex-direction: column;
  color: ${WHITE};
  font-size: 1.5em;
  font-weight: bold;
`;

export default StyledLabel;
