//REACT
import React from 'react';

//COMPONENTS
import Button from '@material-ui/core';

//ICONS
import { AddOutlined as AddIcon } from '@material-ui/icons';

//CSS
import styles from './FollowButton.module.scss';

export const FollowButton: React.FC = () => {
  return (
    <Button variant="contained" style={{ minWidth: 30, width: 35, height: 30 }}>
      <AddIcon />
    </Button>
  );
};
