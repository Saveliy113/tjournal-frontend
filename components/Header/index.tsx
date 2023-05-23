//REACT
import React, { useEffect } from 'react';
import { selectUserData } from '@/redux/slices/user';

//COMPONENTS
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import Link from 'next/link';
import { AuthDialog } from '../AuthDialog';

//ICONS
import {
  Search as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationIcon,
  ExpandMoreOutlined as ArrowDown,
  AccountCircleOutlined as LoginIcon,
} from '@material-ui/icons';

//STYLES
import styles from './Header.module.scss';
import { useAppSelector } from '@/redux/hooks';

export const Header: React.FC = () => {
  const userData = useAppSelector((store) => store.user.data);

  /* INITIAL STATE AND OPENING FUNCTIONS FOR AUTH DIALOG*/
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //--------------------------------------------------

  useEffect(() => {
    if (open && userData) {
      setOpen(false);
    }
  }, [open, userData]);

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

        <Link href="/write">
          <Button variant="contained" className={styles.createButton}>
            Новая запись
          </Button>
        </Link>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>

        {userData ? (
          <Link href="/profile/1" className="d-flex align-center">
            <Avatar
              className="ml-15 mr-10"
              alt="Saveliy Dmitriyev"
              src="https://avatars.githubusercontent.com/u/114129917?v=4"
            />
            <ArrowDown />
          </Link>
        ) : (
          <div className={styles.loginButton} onClick={handleClickOpen}>
            <LoginIcon />
            Войти
          </div>
        )}
      </div>

      <AuthDialog onClose={handleClose} open={open} />
    </Paper>
  );
};
