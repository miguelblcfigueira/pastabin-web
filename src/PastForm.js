import { useReducer, useState } from 'react';

function PastForm() {
  const formReducer = (state, event) => ({
    ...state,
    [event.target.name]: event.target.value,
  });

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      console.log('sent', formData);
    }, 3000);
  };

  return (
    <div>
      {
        submitting
          ? <div>Sending data...</div>
          : (
            <form onSubmit={handleSubmit}>
              <label>
                New paste:
                <textarea name="pasteText" onChange={setFormData} />
              </label>
              <button type="submit" value="Submit">Create new paste</button>
            </form>
          )
      }
    </div>
  );
}

export default PastForm;
