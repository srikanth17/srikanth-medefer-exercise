import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import FormField from './FormField';
import formFields from '../utils/formFields';

interface FormProps extends InjectedFormProps {
  onFormSubmit: (values: any) => void;
}

const Form = (props: FormProps) => {
  const { handleSubmit, error, onFormSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {formFields.map(field => (
          <Field
            key={field.name}
            label={field.label}
            type="text"
            name={field.name}
            component={FormField}
          />
        ))}
        {error && <strong>{error}</strong>}
        <button type="submit" className="green btn-flat right white-text">
          Submit
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

export default reduxForm<{}, FormProps>({
  form: 'Form',
  destroyOnUnmount: false,
})(Form);
