//REACT, NEXT
import React from 'react';
import { NextPage } from 'next';

//COMPONENTS
import { MainLayout } from '@/layouts/MainLayout';
import { WriteForm } from '@/components/WriteForm';

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};



export default WritePage;
