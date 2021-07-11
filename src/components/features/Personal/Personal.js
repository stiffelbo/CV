import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPersonal } from '../../../redux/personalRedux';

import Typography from '@material-ui/core/Typography';

import styles from './Personal.module.scss';

const Component = (props) => {
  console.log(props);
  const {name, lastname, occupation} = props.personal;
  return(
    <div className={styles.root}>
      <Typography variant="h4" gutterBottom>{name + ' ' + lastname}</Typography>
      <Typography variant="h4" gutterBottom>{occupation}</Typography>
    </div>
  );
};

Component.propTypes = {
  personal: PropTypes.object,
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
