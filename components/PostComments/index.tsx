//REACT
import React, { useState } from 'react';

//COMPONENTS
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';

type CommentObj = {
  id: number;
  text: string;
  createdAt: string;
  user: {
    fullname: string;
    avatarUrl: string;
  };
};

interface PostCommentsProps {
  items: CommentObj[];
}

export const PostComments: React.FC<PostCommentsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
        <AddCommentForm />
        <div className="mb-20 mt-20">
          {items.map((obj) => (
            <Comment
              key={obj.id}
              user={obj.user}
              text={obj.text}
              createdAt={obj.createdAt}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};
