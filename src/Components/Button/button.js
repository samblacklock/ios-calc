import React, { Component } from 'react';
import './styles.css';

export default (props) => (
  <div className={`button-wrapper ${props.type || 'num'}`}>
    <button>{props.name}</button>
  </div>
);
