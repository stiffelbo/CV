import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import {Footer} from '../Footer/Footer';

const MainLayout = ({children}) => (
  <div>
    <main>
      <Container>
        {children}
        <Footer />
      </Container>

    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
