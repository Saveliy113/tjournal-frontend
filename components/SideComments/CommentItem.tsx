//REACT
import React, { useState } from 'react';

//COMPONENTS
import { Avatar } from '@material-ui/core';
import Link from 'next/link';

//CSS
import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentAuthor}>
        <Avatar
          style={{ backgroundColor: 'purple' }}
          className="mr-10"
          alt="Remy Sharp"
        >
          {user.fullname[0]}
        </Avatar>
        <Link href="/profile/1">
          <b>{user.fullname}</b>
        </Link>
      </div>
      <p>{text}</p>

      <Link href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </Link>
    </div>
  );
};
