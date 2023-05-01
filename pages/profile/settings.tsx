//COMPONENTS
import { MainLayout } from '@/layouts/MainLayout';
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-20 mb-30" />
        <form>
          <TextField
            className="mb-30"
            size="small"
            label="Никнейм"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Эл.почта"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Пароль"
            variant="outlined"
            fullWidth
            required
          />
          <Divider className="mt-30 mb-20" />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
