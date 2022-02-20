import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './components/button';
import StyledForm from './components/form';
import { ErrorMessage } from './components/message';
import StyledTextArea from './components/textarea';
import apiClient from './js/apiClient';

function PasteForm() {
  const formReducer = (state, event) => ({
    ...state,
    [event.target.name]: event.target.value,
  });

  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    try {
      const res = await apiClient.post('/paste', {
        data: formData.pasteText,
      });
      setSubmitting(false);
      navigate(`${res.data.id}`);
    } catch (err) {
      setError(true);
      setSubmitting(false);
    }
  };

  let content = (<div />);
  if (submitting) {
    content = (
      <div>Sending data...</div>
    );
  } else {
    content = (
      <div>
        {
          error ? (
            <ErrorMessage>
              An error occured! Please try again.
            </ErrorMessage>
          ) : null
        }
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextArea
            label="New paste:"
            name="pasteText"
            onChange={setFormData}
          />
          <PastFormSubmitButton type="submit" value="Submit">Create new paste</PastFormSubmitButton>
        </StyledForm>
      </div>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      {content}
    </div>
  );
}

const PastFormSubmitButton = styled(Button)`
  margin-top: 20px;
`;

export default PasteForm;
