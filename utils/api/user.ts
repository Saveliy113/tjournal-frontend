import { AxiosInstance } from 'axios';
import { CreateUserDto, UserResponse, LoginDto } from './types';

export const UserApi = (instance: AxiosInstance) => ({
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
  async getMe() {
    const { data } = await instance.get<UserResponse>('/users/me');
    return data;
  },
});
