//REACT
import React, { useState } from 'react';

//COMPONENTS
import { Button, Input } from '@material-ui/core';

//STYLES
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };
  return (
    <div className={styles.form}>
      <Input
        onChange={(event) => setText(event.target.value)}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        value={text}
        placeholder="Написать комментарий ..."
        fullWidth
        multiline
        minRows={clicked ? 5 : 1}
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
