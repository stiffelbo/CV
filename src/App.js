import React from 'react';
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';
//Material UI
import Grid from '@material-ui/core/Grid';

//components import
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Education } from './components/features/Education/Education';
import { Personal } from './components/features/Personal/Personal';
import { Contact } from './components/features/Contact/Contact';
import { Technologies } from './components/features/Technologies/Technologies';
import { Experience } from './components/features/Experience/Experience';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <MainLayout>

      <Personal />
      <Contact />
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Experience />
          <Education />
        </Grid>
        <Grid item xs={5}>

        </Grid>
        <Grid item xs={2}>
          <Technologies />
        </Grid>
      </Grid>



    </MainLayout>
  </BrowserRouter>
);

export default App;
