//REACT
import React from 'react';

//COMPONENTS
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import Link from 'next/link';

//ICONS
import {
  Search as SearchIcon,
  Create as CreateIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationIcon,
  ExpandMoreOutlined as ArrowDown,
} from '@material-ui/icons';

//STYLES
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <img
            height={35}
            className=" logo mr-20"
            src="/static/img/logo.svg"
            alt="Logo"
          />
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.createButton}>
          Новая запись
        </Button>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <Avatar
            className="ml-15 mr-10"
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/114129917?v=4"
          />
        </Link>
        <ArrowDown />
      </div>
    </Paper>
  );
};
