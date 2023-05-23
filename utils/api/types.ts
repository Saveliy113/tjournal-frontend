import { OutputData } from '@editorjs/editorjs';

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type UserResponse = {
  id: number;
  email: string;
  fullName: string;
  token: string;
  createdAt: string;
  updatedAt: string;
};

export type PostItem = {
  id: number;
  title: string;
  body: OutputData['blocks'];
  description: string;
  tags: null | string;
  views: number;
  createdAt: string;
  updatedAt: string;
};
