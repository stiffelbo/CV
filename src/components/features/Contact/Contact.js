import React from 'react';
import PropTypes from 'prop-types';

//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyLocationIcon from '@material-ui/icons/MyLocation';



import { connect } from 'react-redux';
import { getPersonal } from '../../../redux/personalRedux';


import styles from './Contact.module.scss';


const Component = (props) => {
  const { city, zip, phone, email, github, linkedIn, relocation} = props.personal;

  const linkAvatar = {
    backgroundColor : '#2b64c7',
  };

  const avatar = {
    backgroundColor : '#22252c',
  };

  return(
    <>
      <Grid container spacing={3}>
        <Grid item xs={3} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <PhoneAndroidIcon />
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{phone}</Typography>
        </Grid>
        <Grid item xs={5} className={styles.cell}>

          <Link href={github} className={styles.cell} color="inherit">

            <Avatar className={styles.avatar} style={linkAvatar}>
              <GitHubIcon />
            </Avatar>
            <Typography variant="body1" className={styles.text}>{github}</Typography>
          </Link>

        </Grid>
        <Grid item xs={4} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <HomeIcon />
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{`${zip}, ${city}`}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <MailOutlineIcon />
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{email}</Typography>
        </Grid>
        <Grid item xs={5} className={styles.cell}>

          <Link href={linkedIn} className={styles.cell} color="inherit">

            <Avatar className={styles.avatar} style={linkAvatar}>
              <LinkedInIcon />
            </Avatar>
            <Typography variant="body1" className={styles.text}>{linkedIn}</Typography>
          </Link>

        </Grid>
        <Grid item xs={4} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <MyLocationIcon />
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{relocation}</Typography>
        </Grid>
      </Grid>
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
