//REACT
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '@/utils/validations';

//COMPONENTS
import { Button, TextField } from '@material-ui/core';
import { FormField } from '@/components/FormField';

interface EmailProps {
  onOpenRegisterForm: () => void;
}

export const Email: React.FC<EmailProps> = ({ onOpenRegisterForm }) => {
  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <FormField label="Почта" name="email" />
        <FormField label="Пароль" name="password" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button type="submit" color="primary" variant="contained">
              Войти
            </Button>
            <Button onClick={onOpenRegisterForm} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
