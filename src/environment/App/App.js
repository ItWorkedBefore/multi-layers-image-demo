import React from 'react';
import {PngRandomAvatar, SvgRandomAvatar, ConfigWithSeed} from 'lib';

import classes from './App.module.css';

const App = () => (
  <>
    <div className={classes.description}>
      <p>
        This page show you how works the library{' '}
        <a href="https://www.npmjs.com/package/multi-layers-image">
          multi-layers-image
        </a>
      </p>
      <p>
        You can show the code of the page on the demo project{' '}
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
