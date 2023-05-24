//REACT, NEXT
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { PostItem } from '@/utils/api/types';
import { Api } from '@/utils/api';

//COMPONENTS
import { MainLayout } from '@/layouts/MainLayout';
import { WriteForm } from '@/components/WriteForm';

interface WritePageProps {
  post: PostItem;
}

const WritePage: NextPage<WritePageProps> = ({ post }) => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm data={post} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params?.id;
    const post = await Api(ctx).post.getById(+id);
    const user = await Api(ctx).user.getMe();

    //If User is not an author of this post, then he will be redirected to home page
    if (post.user.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    //Return Post if User is author
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log('Write Page', error);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default WritePage;
