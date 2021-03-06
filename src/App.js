import React from 'react';
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';
import styles from './App.module.scss';
//Material UI
import Grid from '@material-ui/core/Grid';

//components import
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Profile } from './components/common/Profile/Profile';
import { Education } from './components/features/Education/Education';
import { Courses } from './components/features/Courses/Courses';
import { Languages } from './components/features/Languages/Languages';
import { Interests } from './components/features/Interests/Interests';
import { Personal } from './components/features/Personal/Personal';
import { Contact } from './components/features/Contact/Contact';
import { Technologies } from './components/features/Technologies/Technologies';
import { Experience } from './components/features/Experience/Experience';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Profile />
        </Grid>
        <Grid item xs={9} style={{paddingLeft : '38px'}}>
          <Grid container spacing={3} className={styles.personalData}>
            <Personal />
            <Contact />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{marginTop: '36px'}}>
        <Grid item xs={3}>
          <Technologies />
          <Languages />
        </Grid>
        <Grid item xs={6}>
          <Experience />
          <Education />


        </Grid>
        <Grid item xs={3}>
          <Courses />
          <Interests />
        </Grid>
      </Grid>



    </MainLayout>
  </BrowserRouter>
);

export default App;
