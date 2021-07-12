import React from 'react';
import PropTypes from 'prop-types';

//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
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
    width: '32px',
    height: '32px',
  };

  const avatar = {
    backgroundColor : '#22252c',
    width: '32px',
    height: '32px',
  };

  const icon = {
    width: '0.75em',
    height: '0.75em',
  };

  return(
    <>
      <Grid container spacing={3}>
        <Grid item xs={4} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <PhoneAndroidIcon style={icon}/>
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{phone}</Typography>
        </Grid>
        <Grid item xs={8} className={styles.cell}>

          <Link href={github} className={styles.cell} color="inherit">

            <Avatar className={styles.avatar} style={linkAvatar}>
              <GitHubIcon style={icon}/>
            </Avatar>
            <Typography variant="body1" className={styles.text}>{github}</Typography>
          </Link>

        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <MailOutlineIcon style={icon}/>
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{email}</Typography>
        </Grid>
        <Grid item xs={8} className={styles.cell}>

          <Link href={linkedIn} className={styles.cell} color="inherit">
            <Avatar className={styles.avatar} style={linkAvatar}>
              <LinkedInIcon style={icon}/>
            </Avatar>
            <Typography variant="body1" className={styles.text}>{linkedIn}</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <HomeIcon style={icon}/>
          </Avatar>
          <Typography variant="subtitle1" className={styles.text}>{`${zip}, ${city}`}</Typography>
        </Grid>
        <Grid item xs={8} className={styles.cell}>
          <Avatar className={styles.avatar} style={avatar}>
            <MyLocationIcon style={icon}/>
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
