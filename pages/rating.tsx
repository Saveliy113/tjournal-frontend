//NEXT, REACT
import Head from 'next/head';

//COMPONENTS
import {
  Paper,
  Button,
  Tab,
  Tabs,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { MainLayout } from '@/layouts/MainLayout';
import { FollowButton } from '@/components/FollowButton';

export default function Rating() {
  return (
    <MainLayout>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography
          variant="h5"
          style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}
        >
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получают
          Plus-аккаунт на месяц.
        </Typography>
        <Tabs
          className="mt-10"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За все время" />
        </Tabs>
      </Paper>

      <Paper className="pl-20 pt-20 pr-20" elevation={0}>
        <Table aria-label="Table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="mr-15">1</span>Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
}
