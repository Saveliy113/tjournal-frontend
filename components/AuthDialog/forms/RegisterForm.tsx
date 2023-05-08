//REACT
import React from 'react';
import { RegisterFormSchema } from '@/utils/validations';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//COMPONENTS
import { Button, TextField } from '@material-ui/core';
import { FormField } from '@/components/FormField';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    resolver: yupResolver(RegisterFormSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <FormField label="Имя и фамилия" name="fullname" />
        <FormField label="Логин" name="email" />
        <FormField label="Пароль" name="password" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!form.formState.isValid}
            >
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
