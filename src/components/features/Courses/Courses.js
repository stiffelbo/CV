import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/coursesRedux';

//Material UI

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
//icons
import SchoolIcon from '@material-ui/icons/School';

//import styles from './Courses.module.scss';

const Component = (props) => {

  const rowItem = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    marginBottom: '0.5em',
  };

  const colListItem = {
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'flex-start',
  };

  const avatar = {
    backgroundColor : '#22252c',
  };

  const link = {
    color : '#2b64c7',
  };

  return(
    <section>
      <List>
        <ListItem divider={true}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatar}>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Education"
            />
          </div>
        </ListItem>

        {props.courses.map(item =>
          <ListItem key={item.name} style={colListItem}>
            <Link href={item.link} style={link}>
              <ListItemText primary={`${item.name} - ${item.school}`} />
            </Link>
            <ListItemText primary={item.years} />
            {item.summary && item.summary.map((value) => <ListItemText key={value} secondary={value}/>)}
          </ListItem>
        )}
      </List>
    </section>
  );
};

Component.propTypes = {
  courses: PropTypes.array,
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

const Container = connect(mapStateToProps, null)(Component);


export {
  //Component as courses,
  Container as Courses,
  // Component as coursesComponent,
};
