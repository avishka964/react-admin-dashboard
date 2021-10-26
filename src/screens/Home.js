import React from 'react';
import FeaturedInfo from '../components/FeaturedInfo/FeaturedInfo';
import Charts from '../components/Charts/Charts';
import {userData} from '../data'
import { Grid } from '@mui/material';
import WidgetSmall from '../components/WidgetSmall/WidgetSmall';
import WidgetLarge from '../components/WidgetLarge/WidgetLarge';

const Home = () => {
  return (
    <div>
      <FeaturedInfo />
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
      <Charts data={userData} title='User Analytics' grid dataKey='users'/>
      </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <WidgetSmall />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <WidgetLarge />
      </Grid>
      </Grid>
    </div>
  );
};

export default Home;
