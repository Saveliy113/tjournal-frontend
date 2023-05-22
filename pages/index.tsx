//NEXT, REACT
import { wrapper } from '@/redux/store';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

//COMPONENTS
import { Post } from '@/components/Post';
import { MainLayout } from '@/layouts/MainLayout';
import { UserApi } from '@/utils/api';
import { setUserData } from '@/redux/slices/user';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    try {
      const { _token: authToken } = parseCookies(context);

      const userData = await UserApi.getMe(authToken);

      store.dispatch(setUserData(userData))

      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });
