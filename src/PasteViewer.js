import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from './js/apiClient';

function PasteViewer() {
  const { pasteId } = useParams();
  const [error, setError] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const [expirationDate, setExpirationDate] = useState(null);

  useEffect(async () => {
    try {
      const res = await apiClient.get(`/${pasteId}`);
      const { expiresAt, data } = res.data;
      setPasteText(data);
      setExpirationDate(expiresAt);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  });

  return (
    <div>
      {
        error ? (
          <div>
            An error occured! Please try again.
          </div>
        ) : null
      }
      {pasteText}
      Expires at:
      {expirationDate}
    </div>
  );
}

export default PasteViewer;
