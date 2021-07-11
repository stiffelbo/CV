import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const MainLayout = ({children}) => (
  <div>
    <main>
      <Container>
        {children}
      </Container>
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
