//REACT
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '@/utils/validations';
import { setCookie } from 'nookies';

//COMPONENTS
import { Button } from '@material-ui/core';
import { FormField } from '@/components/FormField';
import { UserApi } from '@/utils/api';
import { LoginDto } from '@/utils/api/types';
import { Alert } from '@material-ui/lab';

interface EmailProps {
  onOpenRegisterForm: () => void;
}

export const Email: React.FC<EmailProps> = ({ onOpenRegisterForm }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, '_token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
    } catch (error: any) {
      console.warn('Register Error', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField label="Почта" name="email" />
        <FormField label="Пароль" name="password" />

        {errorMessage && (
          <Alert className="mb-20" severity="error">
            {errorMessage}
          </Alert>
        )}

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
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
