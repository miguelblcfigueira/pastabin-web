import styled from 'styled-components';

const Message = styled.h2`
  padding: 1em;
  border-radius: 5px;
`;

const ErrorMessage = styled(Message)`
  background: darkred;
`;

const WarningMessage = styled(Message)`
  background: orange;
`;

export {
  Message,
  ErrorMessage,
  WarningMessage,
};
