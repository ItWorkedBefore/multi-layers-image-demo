import React from 'react';
import {PngRandomAvatar, SvgRandomAvatar, ConfigWithSeed} from 'lib';

import classes from './App.module.css';

const App = () => (
  <>
    <div className={classes.description}>
      <p>
        This page shows how the library works{' '}
        <a href="https://www.npmjs.com/package/multi-layers-image">
          multi-layers-image
        </a>
      </p>
      <p>
        Here is the link to the code repository on github{' '}
        <a href="https://github.com/ItWorkedBefore/multi-layers-image-demo">
          ItWorkedBefore/multi-layers-image-demo
        </a>
      </p>
    </div>
    <div className={classes.container}>
      <PngRandomAvatar />
      <SvgRandomAvatar />
      <ConfigWithSeed />
    </div>
  </>
);

export default App;
