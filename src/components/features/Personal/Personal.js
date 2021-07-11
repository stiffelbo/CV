import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPersonal } from '../../../redux/personalRedux';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import styles from './Personal.module.scss';

const Component = (props) => {

  const occupationStyle = {
    color: '#2b64c7',
    fontStyle: 'bold',
    fontWeight: '800',
  };

  const {name, lastname, occupation} = props.personal;
  return(
    <List className={styles.root}>
      <ListItem>
        <Typography variant="h4">
          {`${name} ${lastname}`}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h4" style={occupationStyle}>
          {`${occupation}`}
        </Typography>
      </ListItem>
    </List>
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
