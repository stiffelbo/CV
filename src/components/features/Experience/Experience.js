import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExperience } from '../../../redux/experienceRedux';

//Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

//icons
import WorkIcon from '@material-ui/icons/Work';

//import styles from './Experience.module.scss';

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

  return(
    <section>
      <List>
        <ListItem divider={true}>
          <div style={rowItem}>
            <ListItemAvatar>
              <Avatar style={avatar}>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Experience"
            />
          </div>
        </ListItem>
        {props.experience.map(item =>
          <ListItem key={item.years} style={colListItem}>

            <ListItemText primary={item.company} secondary={`${item.years} - ${item.role}`}/>
            {item.summary && item.summary.map((value) => <ListItemText key={value} secondary={value}/>)}
          </ListItem>
        )}
      </List>
    </section>
  );
};

Component.propTypes = {
  experience: PropTypes.array,
};

const mapStateToProps = state => ({
  experience: getExperience(state),
});

const Container = connect(mapStateToProps, null)(Component);


export {
  //Component as Experience,
  Container as Experience,
  // Component as ExperienceComponent,
};
