//REACT
import React, { useState } from 'react';
import { UserResponse } from '@/utils/api/types';

//COMPONENTS
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';

//ICONS
import { MoreHorizOutlined as MoreIcon } from '@material-ui/icons';

//STYLES
import styles from './Comment.module.scss';
import { Api } from '@/utils/api';

interface CommentPostProps {
  id: number;
  user: UserResponse;
  text: string;
  createdAt: string;
  currentUserId: number | undefined;
  onRemove: (id: number) => void;
}

export const Comment: React.FC<CommentPostProps> = ({
  id,
  user,
  text,
  createdAt,
  currentUserId,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить комментарий?')) {
      try {
        await Api().comment.remove(id);
        onRemove(id);
      } catch (error) {
        console.warn('Comment Delete Error', error);
        alert('Не удалось удалить комментарий');
      } finally {
        handleClose();
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar alt="Avatar" className={styles.avatar}>
          {user.fullName[0]}
        </Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>

      {user.id === currentUserId && (
        <>
          <span className={styles.replyBtn}>Ответить</span>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
          >
            <MenuItem onClick={handleClickDelete}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};
