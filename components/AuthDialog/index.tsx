//REACT
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

//COMPONENTS
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from '@material-ui/core';
import { MainForm } from './forms/MainForm';
import { RegisterForm } from './forms/RegisterForm';
import { Email } from './forms/Email';

//ICONS
import {
  MailOutline as MailIcon,
  ArrowBack as GoBackIcon,
} from '@material-ui/icons';

//CSS
import styles from './AuthDialog.module.scss';

interface AuthDialogProps {
  onClose: () => void;
  open: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, open }) => {
  const [authType, setAuthType] = useState<'main' | 'email' | 'register'>(
    'main'
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {authType === 'main' ? (
                'Вход в TJ'
              ) : (
                <p
                  onClick={() => setAuthType('main')}
                  className={styles.backTitle}
                >
                  <GoBackIcon />К авторизации
                </p>
              )}
            </Typography>
            {authType === 'main' && (
              <MainForm setAuthType={() => setAuthType('email')} />
            )}

            {authType === 'email' && (
              <Email onOpenRegisterForm={() => setAuthType('register')} />
            )}

            {authType === 'register' && (
              <RegisterForm onOpenLogin={() => setAuthType('email')} />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
