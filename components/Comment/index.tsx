//REACT
import React, { useState } from 'react';

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

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar alt="Avatar" className={styles.avatar}>
          S
        </Avatar>
        <b>Master Oogway</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        Суперджет это ад адский. Два раза летала и оба раза прощалась с жизнью.
        Трясет хуже, чем в копейке по плохой дороге.
      </Typography>
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
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
