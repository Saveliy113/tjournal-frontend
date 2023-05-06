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
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
}) => {
  return (
    <div>
      {/* <Header /> */}
      <div className={clsx('wrapper', className)}>
        {!hideMenu && (
          <div className="leftSide">
            <LeftMenu />
          </div>
        )}

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
