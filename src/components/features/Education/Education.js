import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEducation } from '../../../redux/educationRedux';

//Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
//icons
import SchoolIcon from '@material-ui/icons/School';

import styles from './Education.module.scss';

const Component = (props) => {

  const rowItem = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    marginBottom: '0.5em',
  };

  return(
    <section>
      <List>
        <ListItem divider={true}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Wykształcenie"
            />
          </div>
        </ListItem>
        {props.education.map(item =>
          <ListItem key={item.years}>

            <ListItemText primary={item.school} secondary={`${item.years} - ${item.course}`}/>
          </ListItem>
        )}
      </List>
    </section>
  );
};

Component.propTypes = {
  education: PropTypes.object,
};

const mapStateToProps = state => ({
  education: getEducation(state),
});

const Container = connect(mapStateToProps, null)(Component);


export {
  //Component as Education,
  Container as Education,
  // Component as EducationComponent,
};
