//REACT
import React from 'react';

//COMPONENTS
import { CommentItem } from './CommentItem';

//ICONS
import { ChevronRightOutlined as ArrowRight } from '@material-ui/icons';

//CSS
import styles from './SideComments.module.scss';

export const comments = [
  {
    id: 1,
    user: {
      fullname: 'Вася Пупкин',
      avatarUrl: '"https://avatars.githubusercontent.com/u/114129917?v=4"',
    },
    text: 'Теперь каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и ...',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toString(),
  },
  {
    id: 2,
    user: {
      fullname: 'Вася Пупкин',
      avatarUrl: '"https://avatars.githubusercontent.com/u/114129917?v=4"',
    },
    text: 'Теперь каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и ...',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toString(),
  },
  {
    id: 3,
    user: {
      fullname: 'Вася Пупкин',
      avatarUrl: '"https://avatars.githubusercontent.com/u/114129917?v=4"',
    },
    text: 'Теперь каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и ...',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toString(),
  },
];

export const SideComments: React.FC = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.commentsTitle}>
        <h3>
          Комментарии
          <ArrowRight />
        </h3>
      </div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
};
