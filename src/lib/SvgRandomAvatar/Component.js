import React from 'react';
import PropTypes from 'prop-types';

import ImagePlaceholder from '../../components/ImagePlaceholder';
import useLogic from './useLogic';
import classes from './Component.module.css';

const Component = ({initialValue = 0}) => {
  const {avatar} = useLogic(initialValue);

  return (
    <div className={classes.svgRandomAvatar}>
      <h2 className={classes.header}>SvgRandomAvatar</h2>
      {avatar ? (
        <img src={avatar} alt="SVG random avatar" />
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
