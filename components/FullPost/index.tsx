//REACT
import React from 'react';

//COMPONENTS
import { Paper, Typography, Avatar } from '@material-ui/core';
import { PostActions } from '../PostActions';
import { Button } from '@material-ui/core';

//ICONS
import {
  TextsmsOutlined as MessageIcon,
  PersonAddOutlined as UserAddIcon,
} from '@material-ui/icons';

//CSS
import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          Superjet, летящий из Волгограда в Москву, подал сигнал бедствия.
          Возможно, в полете произошла разгерметизация.
        </Typography>
        <div>
          <Typography>
            Самолет, летящий из Волгограда в Москву, подал сигнал бедствия. Об
            этом сообщает "Интерфакс" со ссылкой на информированный источник.
          </Typography>

          <Typography>
            По данным источника, самолет резко снизился над Тамбовской областью.
            Возможной причиной этого собеседник агенства назвал разгерметизацию.
          </Typography>

          <Typography>
            Самолет продолжает полет на высоте примерно 3000 метров.
          </Typography>

          <Typography>
            Источник не уточнил названия авиакомпании и номера рейса. Судя по
            данным Flightradar24, сейчас в небе находится один SSJ1000, летящий
            в Москву из Волгограда. Это - самолет "Аэрофлота", выполняющий рейс
            SU6416. На момент написания заметки он уже пересек Тамбовскую
            область и пролетает к Москве.
          </Typography>

          <Typography>
            Самолет совершил посадку в Шереметьево в 14:28 по Московскому
            времени.
          </Typography>

          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>

          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <Avatar
                alt="Donnie Darko"
                style={{ backgroundColor: 'lightblue' }}
              >
                D
              </Avatar>
              <b>Donnie Darko</b>
              <span>+1685</span>
            </div>

            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
