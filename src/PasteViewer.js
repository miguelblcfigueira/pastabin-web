import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorMessage, WarningMessage } from './components/message';
import StyledTextArea from './components/textarea';
import apiClient from './js/apiClient';

function PasteViewer() {
  const { pasteId } = useParams();
  const [error, setError] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const [expirationDate, setExpirationDate] = useState(null);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(async () => {
    try {
      const res = await apiClient.get(`/${pasteId}`);
      const { expiresAt, data } = res.data;
      setPasteText(data);
      setExpirationDate(expiresAt);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setNotFoundError(true);
      } else {
        setError(true);
      }
    }
  });

  if (notFoundError) {
    return (
      <WarningMessage>
        The Paste requested does not exist or it has already expired.
      </WarningMessage>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      {
        error ? (
          <ErrorMessage>
            An error occured! Please try again.
          </ErrorMessage>
        ) : null
      }
      <PasteInfoContainer>
        <span style={{ fontWeight: 'bold' }}>Expiration:</span>
        {' '}
        {new Date(expirationDate).toLocaleString()}
      </PasteInfoContainer>
      <StyledTextArea
        defaultValue={pasteText}
        readOnly
      />
    </div>
  );
}

const PasteInfoContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 1.2em;
`;

export default PasteViewer;
