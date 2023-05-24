//REACT, NEXT
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PostItem } from '@/utils/api/types';
import { Api } from '@/utils/api';

//COMPONENTS
import { Button, Input } from '@material-ui/core';

//CSS
import styles from './WriteForm.module.scss';
import { useRouter } from 'next/router';

const Editor = dynamic(
  () => import('../Editor').then((module) => module.Editor),
  { ssr: false }
);

interface WriteFormProps {
  data?: PostItem;
}

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(data?.title || '');
  const [blocks, setBlocks] = useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const obj = {
        title,
        body: blocks,
      };

      //If we haven't received any data from the backend, thats means we are creating a new post and use 'create' method from the API.
      // But if data isn't empty, it means that we are editing some post and use 'update' method
      if (!data) {
        const post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, obj);
      }
    } catch (error) {
      console.warn('Create post', error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        classes={{ root: styles.fieldTitle }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        onClick={onAddPost}
        variant="contained"
        color="primary"
        disabled={isLoading || !blocks.length || !title}
      >
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>
  );
};
