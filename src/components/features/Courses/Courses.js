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
//icons
import AssignmentIcon from '@material-ui/icons/Assignment';

//import styles from './Courses.module.scss';

const Component = (props) => {

  const rowItem = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    marginBottom: '0.5em',
  };

  const avatar = {
    backgroundColor : '#22252c',
  };

  return(
    <section>
      <List>
        <ListItem divider={true}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatar}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Kursy"
            />
          </div>
        </ListItem>

        {props.courses.map(item =>
          <ListItem key={item.name}>
            <ListItemText primary={item.name} secondary={item.school}/>
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
