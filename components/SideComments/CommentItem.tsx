//REACT
import React, { useState } from 'react';

//COMPONENTS
import { Avatar } from '@material-ui/core';
import Link from 'next/link';

//CSS
import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
  };
  text: string;
  post: {
    id: number;
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
          alt="User avatar"
        >
          {user.fullname[0]}
        </Avatar>
        <Link href={`/profile/${user.id}`}>
          <b>{user.fullname}</b>
        </Link>
      </div>
      <p>{text}</p>

      <Link href={`/news/${post.id}`}>
        <span className={styles.postTitle}>{post.title}</span>
      </Link>
    </div>
  );
};
