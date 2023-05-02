//NEXT, REACT

//COMPONENTS
import { MainLayout } from '@/layouts/MainLayout';
import { FullPost } from '@/components/FullPost';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

export default function Home() {
  return (
    <MainLayout contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
      </Paper>
    </MainLayout>
  );
}
