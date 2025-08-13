import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Icons
import BuildIcon from '@material-ui/icons/Build';

// SVG Icons
import javascript from '../../../icons/javascript.svg';
import php from '../../../icons/php.svg';
import mysql from '../../../icons/mysql.svg';
import react from '../../../icons/react.svg';
import redux from '../../../icons/redux.svg';
import git from '../../../icons/git.svg';
import jira from '../../../icons/jira.svg';
import asana from '../../../icons/asana.svg';

// Tech list
const techItems = [
  { name: 'PHP', icon: php },
  { name: 'MySQL', icon: mysql },
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'Redux', icon: redux },
  { name: 'Git', icon: git },
  { name: 'Jira', icon: jira },
  { name: 'Asana', icon: asana },
];

const Technologies = () => {
  const avatarStyle = { backgroundColor: '#22252c' };
  const rowItem = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  };

  return (
    <section>
      <List>
        <ListItem divider={true}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatarStyle}>
                <BuildIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Technologies" />
          </div>
        </ListItem>

        <ListItem>
          <Grid container spacing={2}>
            {techItems.map((item) => (
              <Grid item key={item.name}>
                <Box display="flex" flexDirection="column" alignItems="center" width={70}>
                  <Avatar
                    src={item.icon}
                    alt={item.name}
                    style={{ width: 40, height: 40, marginBottom: 6 }}
                  />
                  <Typography variant="body2" align="center">
                    {item.name}
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

export default Technologies;
