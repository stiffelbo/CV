import React from 'react';
import PropTypes from 'prop-types';

//Material UI

import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';


import { connect } from 'react-redux';
import { getPersonal } from '../../../redux/personalRedux';


import styles from './Contact.module.scss';

const Component = (props) => {
  const {address, city, zip, phone, email, github, linkedIn, relocation} = props.personal;
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
  const linkAvatar = {
    backgroundColor : '#2b64c7',
  };

  const avatar = {
    backgroundColor : '#22252c',
  };

  return(
    <>
      <Divider />
      <List className={styles.root}>
        <ListItem style={colListItem}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatar}>
                <PhoneAndroidIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={phone}
            />
          </div>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatar}>
                <MailOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={email}
            />
          </div>
        </ListItem>
        <ListItem className={styles.colListItem}>
          <Link href={github} style={rowItem} color="inherit">
            <ListItemAvatar>
              <Avatar style={linkAvatar}>
                <GitHubIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={github}
            />
          </Link>
          <Link href={linkedIn} style={rowItem} color="inherit">
            <ListItemAvatar>
              <Avatar style={linkAvatar}>
                <LinkedInIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={linkedIn}
            />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={avatar}>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${address}, ${city} ${zip}`}
            secondary={relocation}
          />
        </ListItem>
      </List>
      <Divider />
    </>
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
  //Component as Contact,
  Container as Contact,
  //Component as ContactComponent,
};
