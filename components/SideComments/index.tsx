//REACT
import React, { useState } from 'react';
import clsx from 'clsx';

//COMPONENTS
import { CommentItem } from './CommentItem';

//ICONS
import { ChevronRightOutlined as ArrowRight } from '@material-ui/icons';

//CSS
import styles from './SideComments.module.scss';

import data from '../../data.js';
export const SideComments: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.comments}>
      <div
        onClick={toggleVisible}
        className={clsx(styles.commentsTitle, !visible && styles.rotated)}
      >
        <h3>Комментарии</h3>
        <ArrowRight />
      </div>
      {visible &&
        data.comments.popular.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
    </div>
  );
};
