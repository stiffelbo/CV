import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import {Footer} from '../Footer/Footer';

const MainLayout = ({children}) => {

  const container = {
    minHeight : '100vh',
    position: 'relative',
  };

  const footer = {
    position : 'absolute',
    bottom: 0,
    left: 0,
    rigth: 0,
  };

  return (
    <div>
      <main>
        <Container style={container}>
          {children}
          <Footer style={footer}/>
        </Container>

      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
