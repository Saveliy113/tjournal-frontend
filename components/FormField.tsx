//REACT
import React from 'react';
import { useFormContext } from 'react-hook-form';

//COMPONENTS
import { TextField } from '@material-ui/core';

interface FormFieldProps {
  name: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      {...register(name)}
      name={name}
      className="mb-30"
      size="small"
      label={label}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      fullWidth
    />
  );
};
