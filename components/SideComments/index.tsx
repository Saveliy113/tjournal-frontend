//REACT
import React from 'react';

//COMPONENTS
import { CommentItem } from './CommentItem';

//ICONS
import { ChevronRightOutlined as ArrowRight } from '@material-ui/icons';

//CSS
import styles from './SideComments.module.scss';

export const comments = [
 
];

export const SideComments: React.FC = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.commentsTitle}>
        <h3>
          Комментарии
          <ArrowRight />
        </h3>
      </div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
};
