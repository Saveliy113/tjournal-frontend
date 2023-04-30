//NEXT, REACT
import React from 'react';
import Head from 'next/head';
import clsx from 'clsx';

//COMPONENTS
import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
import { LeftMenu } from '@/components/LeftMenu';
import { SideComments } from '@/components/SideComments';

interface MainLayoutProps {
  children?: any;
  hideComments?: boolean;
  contentFullWidth?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
}) => {
  return (
    <div>
      <Head>
        <title>TJournal</title>
        <meta name="description" content="TJournal app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className={clsx('content', { 'content--full': contentFullWidth })}>
          {children}
        </div>
        {!hideComments && (
          <div className="rightSide">
            <SideComments />
          </div>
        )}
      </div>
    </div>
  );
};
