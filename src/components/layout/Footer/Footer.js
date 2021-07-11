import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getClausule } from '../../../redux/clausuleRedux';

//Material UI
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import styles from './Footer.module.scss';

const Component = (props) => (
  <div className={styles.root}>
    <Divider />
    <Typography variant="body2">{props.clausule}</Typography>

  </div>
);

Component.propTypes = {
  clausule: PropTypes.string,
};

const mapStateToProps = state => ({
  clausule: getClausule(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as Footer,
  Container as Footer,
  //Component as FooterComponent,
};
