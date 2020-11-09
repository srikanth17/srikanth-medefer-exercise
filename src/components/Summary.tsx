import React from 'react';
import { connect } from 'react-redux';
import formFields from '../utils/formFields';
import { FormData, FormState } from '../types/types';

const mapState = ({ form }: FormState) => ({
  formValues: form.Form.values,
});

interface SummaryProps {
  formValues: FormData;
}

const Summary = ({ formValues }: SummaryProps) => {
  console.log(formValues);
  return (
    <div>
      <h5>Summary of submitted form</h5>
      {formFields.map(({ name, label }) => (
        <div key={name}>
          <label>{label}</label>
          <div>{(formValues as any)[name]}</div>
        </div>
      ))}
    </div>
  );
};

export default connect(mapState)(Summary);
