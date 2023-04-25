//NEXT, REACT
import Head from 'next/head';

//COMPONENTS
import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
import { LeftMenu } from '@/components/LeftMenu';
import { MainLayout } from '@/layouts/MainLayout';

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
