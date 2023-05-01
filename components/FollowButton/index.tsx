//REACT
import React, { useState } from 'react';

//COMPONENTS
import { Button } from '@material-ui/core';

//ICONS
import {
  AddOutlined as AddIcon,
  CheckOutlined as CheckIcon,
} from '@material-ui/icons';

//CSS
import styles from './FollowButton.module.scss';

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 30 }}
    >
      {followed ? (
        <AddIcon />
      ) : (
        <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />
      )}
    </Button>
  );
};
