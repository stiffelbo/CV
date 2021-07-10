import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPersonal } from '../../../redux/personalRedux';

//import styles from './Personal.module.scss';

const Component = ({name, lastName, ocupation}) => (
  <div >
    <h5>Personal</h5>
    <h2>{name}</h2>
    <h2>{lastName}</h2>
    <h2>{ocupation}</h2>

  </div>
);

Component.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  ocupation: PropTypes.string,
};

const mapStateToProps = state => ({
  personal: getPersonal(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as Personal,
  Container as Personal,
  //Component as PersonalComponent,
};
