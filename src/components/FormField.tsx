import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface FormFieldProps {
  label: string;
  type: string;
}

const FormField = ({
  input,
  label,
  type,
  meta: { error, touched },
}: WrappedFieldProps & FormFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default FormField;
