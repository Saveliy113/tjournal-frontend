//REACT
import React from 'react';
import { RegisterFormSchema } from '@/utils/validations';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';

//COMPONENTS
import { Button } from '@material-ui/core';
import { FormField } from '@/components/FormField';
import { UserApi } from '@/utils/api';
import { CreateUserDto } from '@/utils/api/types';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    resolver: yupResolver(RegisterFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, '_token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } catch (error) {
      alert('Ошибка при регистрации');
      console.warn('Register Error', error);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Логин" />
        <FormField name="password" label="Пароль" />
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
