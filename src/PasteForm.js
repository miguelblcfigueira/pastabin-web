import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      console.error(err);
      setError(true);
      setSubmitting(false);
    }
  };

  let component = (<div />);
  if (submitting) {
    component = (
      <div>Sending data...</div>
    );
  } else {
    component = (
      <div>
        {
          error ? (
            <div>
              An error occured! Please try again.
            </div>
          ) : null
        }
        <form onSubmit={handleSubmit}>
          <label>
            New paste:
            <textarea name="pasteText" onChange={setFormData} />
          </label>
          <button type="submit" value="Submit">Create new paste</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      {component}
    </div>
  );
}

export default PasteForm;
