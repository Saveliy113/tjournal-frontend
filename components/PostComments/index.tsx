//REACT
import React, { useEffect, useState } from 'react';

//DATA
import data from '../../data';

//COMPONENTS
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
import { Api } from '@/utils/api';
import { CommentItem } from '@/utils/api/types';
import { useAppSelector } from '@/redux/hooks';
import { selectUserData } from '@/redux/slices/user';

interface PostComments {
  postId: number;
}

export const PostComments: React.FC<PostComments> = ({ postId }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const userData = useAppSelector(selectUserData);

  useEffect(() => {
    (async () => {
      try {
        const commentsData = await Api().comment.getAll();
        setComments(commentsData);
      } catch (error) {
        console.warn('Fetch comments error', error);
      }
    })();
  }, []);

  const onAddComment = (obj: CommentItem) => {
    setComments((prev) => [...prev, obj]);
  };

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          value={activeTab}
          className="mt-20"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        {userData && (
          <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />
        )}
        <div className="mb-20 mt-20">
          {comments.map((obj) => (
            <Comment
              key={obj.id}
              id={obj.id}
              user={obj.user}
              text={obj.text}
              createdAt={obj.createdAt}
              currentUserId={userData?.id}
              onRemove={onRemoveComment}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};
