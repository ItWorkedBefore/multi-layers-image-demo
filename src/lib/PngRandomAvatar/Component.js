import React from 'react';
import PropTypes from 'prop-types';

import useLogic from './useLogic';
import classes from './Component.module.css';

const Component = ({initialValue = 0}) => {
  const {avatar} = useLogic(initialValue);

  return (
    <div className={classes.pngRandomAvatar}>
      <h2 className={classes.header}>PngRandomAvatar</h2>
      <img src={avatar} alt="Random avatar" />
    </div>
  );
};

Component.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default Component;
