//COMPONENTS
import { Post } from '@/components/Post';
import { MainLayout } from '@/layouts/MainLayout';
import { Api } from '@/utils/api';
import { PostItem } from '@/utils/api/types';
import { NextPage } from 'next';

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {/* <Post /> */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      posts: null,
    },
  };
};

export default Home;
