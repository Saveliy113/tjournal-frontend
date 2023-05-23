//REACT
import React from 'react';

//COMPONENTS
import { PostActions } from '../PostActions';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

//CSS
import styles from './Post.module.scss';

interface PostProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>{title}</Link>
      </Typography>
      <Typography className="mt-10 mb-15">{description}</Typography>
      <div className={styles.image_container}>
        {imageUrl && (
          <Image
            className={styles.image}
            alt={title}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTEgAxY8ynbyFFUxVhg_xmnTKQp7oKHgp6IZd9gv4yIQkMje2UHBGq-S3wX63zbqV-vw&usqp=CAU"
            fill
          />
        )}
      </div>
      <PostActions />
    </Paper>
  );
};
