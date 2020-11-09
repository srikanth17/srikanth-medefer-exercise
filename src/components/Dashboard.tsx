import React, { useState } from 'react';
import { SubmissionError } from 'redux-form';
import validateEmail from '../utils/validateEmail';
import Form from './Form';
import Summary from './Summary';
import { FormData } from '../types/types';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submit = (values: FormData) => {
    if (!values.firstName) {
      throw new SubmissionError({
        firstName: 'The First name field is required',
        _error: 'Form cannot be submitted!',
      });
    } else if (!values.surname) {
      throw new SubmissionError({
        surname: 'The Surname field is required',
        _error: 'Form cannot be submitted!',
      });
    } else if (!validateEmail(values.email || '')) {
      console.log(validateEmail(values.email || ''));
      throw new SubmissionError({
        email: 'The email is invalid or the field is empty',
        _error: 'Form cannot be submitted!',
      });
    } else {
      setFormSubmitted(true);
    }
  };

  if (formSubmitted) {
    return <Summary />;
  } else if (showForm) {
    // @ts-ignore
    return <Form onFormSubmit={submit} />;
  } else {
    return (
      <div>
        <h5>Please click the ADD button to fill the form</h5>
        <button className="btn-large red" onClick={() => setShowForm(true)}>
          Add<i className="material-icons right">add</i>
        </button>
      </div>
    );
  }
};

export default Dashboard;
