import React from 'react';
import PropTypes from 'prop-types';

import styles from './EduItem.module.scss';

const Component = ( {years, school, course}) => (
  <div className={styles.root}>
    <div className={styles.col}>
      <h4>{years}</h4>
    </div>
    <div className={styles.col}>
      <h4>{school}</h4>
    </div>
    <div className={styles.col}>
      <h4>{course}</h4>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  years: PropTypes.string,
  school: PropTypes.string,
  course: PropTypes.string,
};

export {
  Component as EduItem,
};
