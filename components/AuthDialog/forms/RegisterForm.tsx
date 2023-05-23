//REACT
import React, { useState } from 'react';
import { RegisterFormSchema } from '@/utils/validations';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { useAppDispatch } from '@/redux/hooks';
import { setUserData } from '@/redux/slices/user';

//COMPONENTS
import { Button } from '@material-ui/core';
import { FormField } from '@/components/FormField';
import { UserApi } from '@/utils/api/user';
import { CreateUserDto } from '@/utils/api/types';
import { Alert } from '@material-ui/lab';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm({
    resolver: yupResolver(RegisterFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      setCookie(null, '_token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
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
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Логин" />
        <FormField name="password" label="Пароль" />

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
