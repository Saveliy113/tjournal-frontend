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
import { OutputData } from '@editorjs/editorjs';

interface FullPostProps {
  title: string;
  blocks: OutputData['blocks'];
}

export const FullPost: React.FC<FullPostProps> = ({ title, blocks }) => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.postText}>
          {blocks.map((obj) => (
            <Typography
              key={obj.id}
              dangerouslySetInnerHTML={{ __html: obj.data.text }}
            />
          ))}

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
