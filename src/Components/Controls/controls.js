import React, { Component } from 'react';
import Button from '../Button/button.js';
import './styles.css';

export default () => (
  <div className="control-panel">
    <div className="button-row">
      <Button name="C" type='function' />
      <Button name="+/-" type='function' />
      <Button name="%" type='function' />
      <Button name="/" type='function' />
    </div>
    <div className="button-row">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" type='function' />
    </div>
    <div className="button-row">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" type='function' />
    </div>
    <div className="button-row">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" type='function' />
    </div>
    <div className="button-row">
      <Button name="0" type='zero' />
      <Button name="." type='function' />
      <Button name="=" type='function' />
    </div>
  </div>
);
