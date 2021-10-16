import React from 'react';
import PropTypes from 'prop-types';

import useLogic from './useLogic';
import classes from './Component.module.css';

const Component = ({initialValue = 0}) => {
  const {avatar, seed, setSeed} = useLogic(initialValue);

  return (
    <div className={classes.configWithSeed}>
      <h2 className={classes.header}>From seed</h2>
      <img src={avatar} alt="Random avatar from seed" />
      <input value={seed} onChange={e => setSeed(e.target.value)} name="Seed" />
    </div>
  );
};

Component.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default Component;
