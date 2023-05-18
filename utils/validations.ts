import * as yup from 'yup';

export const LoginFormSchema = yup
  .object({
    email: yup.string().email('Неверная почта').required('Почтая обязательна'),
    password: yup
      .string()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .required('Пароль обязательный'),
  })
  .required();

export const RegisterFormSchema = yup
  .object({
    email: yup.string().required('Логин обязателен'),
    fullName: yup.string().required('Имя и фамилия обязательны'),
    password: yup
      .string()
      .min(6, 'Пароль должен содержать не менее 6 символов')
      .required('Пароль обязательный'),
  })
  .required();
