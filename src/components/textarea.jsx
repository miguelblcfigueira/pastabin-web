import propTypes from 'prop-types';
import styled from 'styled-components';
import { PRIMARY_COLOR_LIGHTER, SECONDARY_COLOR, WHITE } from '../globalStyles';
import StyledLabel from './label';

function TextArea({
  className,
  name,
  onChange,
  label,
  defaultValue,
  readOnly,
}) {
  return (
    <StyledLabel label={label}>
      <textarea
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={className}
        name={name}
        onChange={onChange}
      />
    </StyledLabel>
  );
}

TextArea.propTypes = {
  className: propTypes.string.isRequired,
  name: propTypes.string,
  onChange: propTypes.func,
  label: propTypes.string,
  defaultValue: propTypes.string,
  readOnly: propTypes.bool,
};

TextArea.defaultProps = {
  name: '',
  label: '',
  defaultValue: '',
  readOnly: false,
  onChange: () => { },
};

const StyledTextArea = styled(TextArea)`
background: ${PRIMARY_COLOR_LIGHTER};
height: 20em;
color: ${WHITE};
padding: 2em;
border: 0px;
border-radius: 5px;
resize: none;

font-size: 1em;

-moz-appearance:none;
outline: none;

${({ readOnly }) => !readOnly && `
    &:hover, &:focus {
      box-shadow: 2px 4px 8px 0 ${SECONDARY_COLOR}, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `}
`;

export default StyledTextArea;
