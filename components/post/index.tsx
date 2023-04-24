//COMPONENTS
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

//CSS
import styles from './Post.module.scss';
import React from 'react';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        Кот прилег отдохнуть в английском парке миниатюр - и стал героем шуток и
        фотожаб о "гигантском пушистом захватчике
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не могли соотнести размеры животного и окружения, другие
        начали создавать апокалиптические сюжеты с котом в главной роли.
      </Typography>
      <Image
        alt="post-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTEgAxY8ynbyFFUxVhg_xmnTKQp7oKHgp6IZd9gv4yIQkMje2UHBGq-S3wX63zbqV-vw&usqp=CAU"
        height={400}
        width={600}
      />
    </Paper>
  );
};
