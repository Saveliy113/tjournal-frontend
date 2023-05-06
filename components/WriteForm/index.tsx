//REACT, NEXT
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

//COMPONENTS
import { Button, Input } from '@material-ui/core';

const Editor = dynamic(
  () => import('../Editor').then((module) => module.Editor),
  { ssr: false }
);

//CSS
import styles from './WriteForm.module.scss';

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input
        classes={{ root: styles.fieldTitle }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
