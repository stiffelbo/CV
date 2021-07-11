import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechnologies } from '../../../redux/technologiesRedux';

//Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
//icons
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import BuildIcon from '@material-ui/icons/Build';

//import styles from './Technologies.module.scss';

const Component = props =>{
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

  const levelStars = (level) => {
    let stars = {
      0.5 : <div><StarHalfIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>,
      1 : <div><StarIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>,
      1.5 : <div><StarIcon /><StarHalfIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>,
      2 : <div><StarIcon /><StarIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>,
      2.5 : <div><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon /><StarOutlineIcon /></div>,
      3 : <div><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon /><StarOutlineIcon /></div>,
      3.5 : <div><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon /></div>,
      4 : <div><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon /></div>,
      4.5 : <div><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></div>,
    };
    return stars[level];
  };

  return (

    <List>
      <ListItem divider={true}>
        <div style={rowItem}>
          <ListItemAvatar>
            <Avatar>
              <BuildIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Technologie"
          />
        </div>
      </ListItem>
      {props.technologies.map(item => <ListItem key={item.name} style={colListItem}>
        <ListItemText primary={item.name}>
        </ListItemText>
        {levelStars(item.level)}
      </ListItem>)}
    </List>

  );
};

Component.propTypes = {
  technologies: PropTypes.array,
};


const mapStateToProps = state => ({
  technologies: getTechnologies(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as Contact,
  Container as Technologies,
  //Component as ContactComponent,
};
