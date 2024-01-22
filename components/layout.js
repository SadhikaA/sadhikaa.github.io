// TwoColumnLayout.js
import React from 'react';
import layoutStyles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const TwoColumnLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className={layoutStyles.leftColumn}>{children[0]}
        <div className={utilStyles.container}>
          <h1>Sadhika Akula</h1>
          <p className={utilStyles.subheading}>hello world!</p>
          <p style={{ marginTop: '5px' }}>I’m a student at UC Berkeley, studying Electrical Engineering and Computer Science. I'm interested in the intersection of human-computer interaction, artificial intelligence, and future hardware. Currently, I'm tinkering with SwiftUI and taking classes in interface design, operating systems, and computer graphics. I also enjoy reading, playing tennis, and learning new languages.</p>
          <p className={utilStyles.subheading}>find me also at ↴</p>
          <Link href="https://github.com/SadhikaA"><button className={utilStyles.button}>Github</button></Link>
          <Link href="https://www.linkedin.com/in/sadhika-akula/"><button className={utilStyles.button}>LinkedIn</button></Link>
          <Link href="mailto:sadhika.akula@berkeley.edu"><button className={utilStyles.button}>Email</button></Link>
          <p></p>
          <p className={utilStyles.subheading}>explore my website ↴</p>
          <Link href="/projects"><button className={utilStyles.pageNavigation}>&nbsp;/projects</button></Link>
          <Link href="/notes"><button className={utilStyles.pageNavigation}>&nbsp;/notes</button></Link>
          <Link href="/experience"><button className={utilStyles.pageNavigation}>&nbsp;/experience</button></Link>
          <Link href="/blog"><button className={utilStyles.pageNavigation}>&nbsp;/blog</button></Link>
          <Link href="/bookshelf"><button className={utilStyles.pageNavigation}>&nbsp;/bookshelf</button></Link>
        </div>
      </div>
      <div className={layoutStyles.rightColumn}>{children[1]}</div>
    </div>
  );
};

export default TwoColumnLayout;