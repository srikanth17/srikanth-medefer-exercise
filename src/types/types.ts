export interface FormFields {
  label: string;
  name: string;
}

export interface FormData {
  firstName: string;
  surname: string;
  email: string;
  query?: string;
}

export interface FormState {
  form: {
    Form: {
      values: FormData;
    };
  };
}
