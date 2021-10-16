import React from 'react';
import {PngRandomAvatar, SvgRandomAvatar, ConfigWithSeed} from 'lib';

import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <PngRandomAvatar />
    <SvgRandomAvatar />
    <ConfigWithSeed />
  </div>
);

export default App;
