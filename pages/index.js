import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Spline from '@splinetool/react-spline';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Sadhika Akula</title>
        <meta name="description" content="personal website of Sadhika Akula" />
      </Head>
      <Layout>
        <div className={utilStyles.container}>
          <h1>Sadhika Akula</h1>
          <p className={utilStyles.subheading}>hello world!</p>
          <p style={{ marginTop: '5px' }}>I’m a student at UC Berkeley, studying Electrical Engineering and Computer Science. I'm interested in the intersection of human-computer interaction, artificial intelligence, and future hardware. Currently, I'm tinkering with SwiftUI and taking classes in interface design, operating systems, and computer graphics. I also enjoy reading, playing tennis, and learning new languages. </p>
          <p className={utilStyles.subheading}>find me also at ↴</p>
          <button className={utilStyles.button}>Github</button>
          <button className={utilStyles.button}>LinkedIn</button>
          <button className={utilStyles.button}>Email</button>
          <p></p>
          <p className={utilStyles.subheading}>explore my website ↴</p>
          <button className={utilStyles.pageNavigation}>&nbsp;/projects</button>
          <button className={utilStyles.pageNavigation}>&nbsp;/experience</button>
          <button className={utilStyles.pageNavigation}>&nbsp;/notes</button>
          <button className={utilStyles.pageNavigation}>&nbsp;/blog</button>
          <button className={utilStyles.pageNavigation}>&nbsp;/bookshelf</button>
        </div>
        <div className={utilStyles.container}>
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.22/build/spline-viewer.js"></script>
          <spline-viewer url="https://prod.spline.design/mDpLLkIv8yao7omE/scene.splinecode"></spline-viewer>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}> {title}</Link>
                <br />
                <small className={utilStyles.lightGrayText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};
