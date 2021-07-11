import React from 'react';

import jb from '../../../data/jb.png';

const Component = () => {

  const profileImage = {
    maxHeight: '250px',
  };

  return(

    <img src={jb} style={profileImage} alt="profile"/>

  );
};

export {
  Component as Profile,
};
