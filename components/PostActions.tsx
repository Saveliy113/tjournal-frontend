//REACT
import React from 'react';
import { CSSProperties } from 'react';

//COMPONENTS
import { IconButton } from '@material-ui/core';

//ICONS
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from '@material-ui/icons';

const styles: CSSProperties = {
  position: 'relative',
  top: '5',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0',
  margin: '0',
  listStyle: 'none',
};

export const PostActions: React.FC = () => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
