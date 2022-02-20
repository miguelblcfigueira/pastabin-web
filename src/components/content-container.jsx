import styled from 'styled-components';
import { CONTENT_MAX_WIDTH } from '../globalStyles';

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  display: flex;
  margin: 0 auto;
`;

export default ContentContainer;
