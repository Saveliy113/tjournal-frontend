//NEXT, REACT

//COMPONENTS
import { MainLayout } from '@/layouts/MainLayout';
import { FullPost } from '@/components/FullPost';
import { PostComments } from '@/components/PostComments';
import { Api } from '@/utils/api';
import { GetServerSideProps, NextPage } from 'next';
import { PostItem } from '@/utils/api/types';

interface FullPostPageProps {
  post: PostItem;
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} blocks={post.body} />
      <PostComments postId={post.id} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params?.id;
    const post = await Api(ctx).post.getById(+id);

    //Return Post if User is author
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log('Full Post Page', error);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default FullPostPage;
