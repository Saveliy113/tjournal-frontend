//COMPONENTS
import { Button, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

//ICONS
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@material-ui/icons';

//CSS
import styles from './LeftMenu.module.scss';
import React from 'react';

export const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon />
            Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
