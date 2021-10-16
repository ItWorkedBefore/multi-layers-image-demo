import React from 'react';
import {PngRandomAvatar, SvgRandomAvatar} from 'lib';

import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <PngRandomAvatar />
    <SvgRandomAvatar />
  </div>
);

export default App;
