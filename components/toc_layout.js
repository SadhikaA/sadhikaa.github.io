// Table of Contents Layout
import React from 'react';
import layoutStyles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const TocLayout = ({ children }) => {
  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.leftColumn}>{children[0]}
        <div className={utilStyles.container}>
         <h2>Contents</h2>
        </div>
      </div>
      <div className={layoutStyles.rightColumn}>{children[1]}</div>
    </div>
  );
};

export default TocLayout;