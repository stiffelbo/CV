import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLanguages } from '../../../redux/languagesRedux';

//Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

//icons
import LanguageIcon from '@material-ui/icons/Language';

import styles from './Languages.module.scss';

const Component = (props) => {

  const colListItem = {
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'flex-start',
  };

  const rowItem = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    marginBottom: '0.5em',
  };

  const avatar = {
    backgroundColor : '#22252c',
  };

  return (
    <List>
      <ListItem divider={true}>
        <div style={rowItem}>
          <ListItemAvatar>
            <Avatar style={avatar}>
              <LanguageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Jezyki Obce"
          />
        </div>
      </ListItem>
      {props.languages.map(item =>
        <ListItem key={item.name} style={colListItem}>
          <ListItemText primary={item.name} secondary={item.level}>
          </ListItemText>
        </ListItem>)}
    </List>
  );
};

Component.propTypes = {
  languages: PropTypes.array,
};

const mapStateToProps = state => ({
  languages: getLanguages(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  // Component as Languages,
  Container as Languages,
  //Component as LanguagesComponent,
};
