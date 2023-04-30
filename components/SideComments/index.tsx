//REACT
import React from 'react';

//COMPONENTS
import { CommentItem } from './CommentItem';

//ICONS
import { ChevronRightOutlined as ArrowRight } from '@material-ui/icons';

//CSS
import styles from './SideComments.module.scss';

export const SideComments: React.FC = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.commentsTitle}>
        <h2>Комментарии</h2>
        <ArrowRight />
      </div>

      <CommentItem />
      <CommentItem />
    </div>
  );
};
