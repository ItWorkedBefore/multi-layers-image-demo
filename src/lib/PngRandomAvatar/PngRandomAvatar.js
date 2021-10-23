import React from 'react';
import PropTypes from 'prop-types';

import ImagePlaceholder from '../../components/ImagePlaceholder';
import useLogic from './useLogic';
import classes from './PngRandomAvatar.module.css';

const Component = ({initialValue = 0}) => {
  const {avatar} = useLogic(initialValue);

  return (
    <div className={classes.pngRandomAvatar}>
      <h2 className={classes.header}>PngRandomAvatar</h2>
      {avatar ? (
        <img src={avatar} alt="Png random avatar" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
};

Component.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default Component;
