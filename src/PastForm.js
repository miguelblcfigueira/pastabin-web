import { useReducer, useState } from 'react';
import apiClient from './js/apiClient';

function PastForm() {
  const formReducer = (state, event) => ({
    ...state,
    [event.target.name]: event.target.value,
  });

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
      console.log(res.data);
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

export default PastForm;
