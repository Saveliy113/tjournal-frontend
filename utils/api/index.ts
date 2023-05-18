import axios from 'axios';
import { CreateUserDto, UserResponse, LoginDto } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:7777/',
});

export const UserApi = {
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: UserResponse }>(
      '/auth/register',
      dto
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: UserResponse }>(
      '/auth/login',
      dto
    );
    return data;
  },
};
