import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './styles/animationSwitch.scss';
//components import
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Education } from './components/common/Education/Education';
import { Personal } from './components/common/Personal/Personal';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Education >

        </Education>
        <Personal />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
