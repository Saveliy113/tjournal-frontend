import axios from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next/types';
import Cookies, { parseCookies } from 'nookies';
import { UserApi } from './user';
import { PostApi } from './post';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
};

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies._token;

  const instance = axios.create({
    baseURL: 'http://localhost:7777',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
  };
};
