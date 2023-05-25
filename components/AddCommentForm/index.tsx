//REACT
import React, { useState } from 'react';

//COMPONENTS
import { Button, Input } from '@material-ui/core';

//STYLES
import styles from './AddCommentForm.module.scss';
import { Api } from '@/utils/api';
import { CommentItem } from '@/utils/api/types';

interface AddCommentFormProps {
  postId: number;
  onSuccessAdd: (obj: CommentItem) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({
  postId,
  onSuccessAdd,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const onAddComment = async () => {
    try {
      setLoading(true);
      const comment = await Api().comment.create({ postId, text });
      onSuccessAdd(comment);
      setClicked(false);
      setText('');
    } catch (error) {
      console.warn('Add Comment Error: ', error);
      alert('Ошибка при добавлении комментария');
    } finally {
      setLoading(false);
    }
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
        disabled={loading}
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
