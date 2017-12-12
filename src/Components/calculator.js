import React, { Component } from 'react';
import Display from './Display/display';
import Controls from './Controls/controls';

export default () => (
  <div className="calculator">
    <Display />
    <Controls />
  </div>
);
