//REACT
import React from 'react';

//COMPONENTS
import { Avatar } from '@material-ui/core';
import Link from 'next/link';

//CSS
import styles from './SideComments.module.scss';

export const CommentItem: React.FC = () => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.commentAuthor}>
        <Avatar
          style={{ backgroundColor: 'purple' }}
          className="mr-10"
          alt="Remy Sharp"
        >
          R
        </Avatar>
        <Link href="/profile/1">
          <b>Remy Sharp</b>
        </Link>
      </div>
      <p>
        Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать
        еще на часок. Ну и...
      </p>

      <Link href="#">
        <span className={styles.postTitle}>Какая у вас дома ванна?</span>
      </Link>
    </div>
  );
};
