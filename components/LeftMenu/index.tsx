//REACT
import React from 'react';

//COMPONENTS
import { Button, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

//ICONS
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@material-ui/icons';

//CSS
import styles from './LeftMenu.module.scss';
import { useRouter } from 'next/router';
import { log } from 'console';

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
  { text: 'Рейтинг TJ', icon: <TrendingIcon />, path: '/rating' },
  { text: ' Подписки', icon: <ListIcon />, path: '/follows' },
];

export const LeftMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <Button
                variant={router.asPath === obj.path ? 'contained' : 'text'}
              >
                {obj.icon}
                {obj.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
