import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLanguages } from '../../../redux/languagesRedux';

// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LanguageIcon from '@material-ui/icons/Language';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Component = (props) => {
  const avatarStyle = { backgroundColor: '#22252c' };
  const rowItem = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '0.5em',
  };

  return (
    <section>
      <List>
        <ListItem divider={true}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatarStyle}>
                <LanguageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Languages" />
          </div>
        </ListItem>

        <ListItem>
          <Grid container spacing={2}>
            {props.languages.map((item) => (
              <Grid item key={item.name}>
                <Box display="flex" flexDirection="column" alignItems="center" width={80}>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {item.level}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ListItem>
      </List>
    </section>
  );
};

Component.propTypes = {
  languages: PropTypes.array,
};

const mapStateToProps = (state) => ({
  languages: getLanguages(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  Container as Languages,
};
