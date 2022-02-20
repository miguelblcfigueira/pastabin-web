import propTypes from 'prop-types';
import styled from 'styled-components';

function Form({ className, onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

Form.propTypes = {
  className: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired,
  children: propTypes.arrayOf(propTypes.element),
};

Form.defaultProps = {
  children: null,
};

const StyledForm = styled(Form)`
margin-top: 2em;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: stretch;
padding: 1em;
height: 100%;
`;

export default StyledForm;
