import React from 'react';
import PropTypes from 'prop-types';
//Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
//icons
import ToysIcon from '@material-ui/icons/Toys';

import { connect } from 'react-redux';
import { getInterests } from '../../../redux/interestsRedux';


import styles from './Interests.module.scss';

const Component = (props) => {

  const avatar = {
    backgroundColor : '#22252c',
  };

  const rowItem = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    marginBottom: '0.5em',
  };
  return (
    <List>
      <ListItem divider={true}>
        <div style={rowItem}>
          <ListItemAvatar>
            <Avatar style={avatar}>
              <ToysIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Zainteresowania"
          />
        </div>
      </ListItem>
      {props.interests.map(item =>
        <ListItem key={item}>
          <ListItemText primary={item} />
        </ListItem>
      )}
    </List>
  );
};

Component.propTypes = {
  interests: PropTypes.array,
};

const mapStateToProps = state => ({
  interests: getInterests(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as Interests,
  Container as Interests,
  //Component as InterestsComponent,
};
