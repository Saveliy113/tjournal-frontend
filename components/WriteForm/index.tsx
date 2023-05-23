//REACT, NEXT
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

//COMPONENTS
import { Button, Input } from '@material-ui/core';

//CSS
import styles from './WriteForm.module.scss';
import { Api } from '@/utils/api';

const Editor = dynamic(
  () => import('../Editor').then((module) => module.Editor),
  { ssr: false }
);

interface WriteFormProps {
  data?: any;
}

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [blocks, setBlocks] = useState([]);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const post = await Api().post.create({
        title,
        body: blocks,
      });
      console.log(post);
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
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        onClick={onAddPost}
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        Опубликовать
      </Button>
    </div>
  );
};
