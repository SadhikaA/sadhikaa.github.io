// TwoColumnLayout.js
import React from 'react';
import layoutStyles from './layout.module.css';

const TwoColumnLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex'}}>
      <div className={layoutStyles.leftColumn}>{children[0]}</div>
      <div className={layoutStyles.rightColumn}>{children[1]}</div>
    </div>
  );
};

export default TwoColumnLayout;