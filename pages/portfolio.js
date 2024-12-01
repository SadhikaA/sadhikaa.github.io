import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sadhika Akula</title>
        <meta name="description" content="personal website of Sadhika Akula" />
        <meta name="environment" content="url=f1_racetrack.png"/>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="favicon" href="/favicon.png"/>
        <link rel="apple-touch-icon" href="/favicon.png"/>
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <hr></hr>
        <h3>💻 Projects</h3>
        <hr></hr>
        <ul>
          {/* <li>
            <p className={`${styles.tag} ${styles.tagDesign}`}>design</p>
            <p className={`${styles.tag} ${styles.tagHardware}`}>hardware</p>
            <Link href="/berkeley">
              <p className={styles.linkP}>tangible user interface final project</p>
            </Link>
          </li> */}
          <li>
            <p className={`${styles.tag} ${styles.tagDesign}`}>design</p>
            <p className={`${styles.tag} ${styles.tagWeb}`}>web</p>
            <Link href="/sweweb">
              <p className={styles.linkP}>UC Berkeley SWE design projects</p>
            </Link>
          </li>
          {/* <li>
            <p className={`${styles.tag} ${styles.tagGraphics}`}>graphics</p>
            <Link href="/sweweb">
              <p className={styles.linkP}>chai animation</p>
            </Link>
          </li> */}
          <li>
            <p className={`${styles.tag} ${styles.tagHardware}`}>hardware</p>
            <Link href="/printing">
              <p className={styles.linkP}>3D printing experiments</p>
            </Link>
          </li>
          <li>
            <p className={`${styles.tag} ${styles.tagHardware}`}>hardware</p>
            <Link href="/laser">
              <p className={styles.linkP}>laser cutting experiments</p>
            </Link>
          </li>
          <li>
            <p className={`${styles.tag} ${styles.tagGraphics}`}>graphics</p>
            <Link href="/graphics">
              <p className={styles.linkP}>CS 184 graphics assignments</p>
            </Link>
          </li>
          {/* <li>
            <p className={`${styles.tag} ${styles.tagiOS}`}>iOS</p>
            <Link href="/voyager">
              <p className={styles.linkP}>AR navigation and event app</p>
            </Link>
          </li> */}
          <li>
            <p className={`${styles.tag} ${styles.tagGraphics}`}>graphics</p>
            <Link href="/ucbugg">
              <p className={styles.linkP}>3D animated short</p>
            </Link>
          </li> 
          <li>
            <p className={`${styles.tag} ${styles.tagHardware}`}>hardware</p>
            <Link href="/drone">
              <p className={styles.linkP}>GPS-navigated drone</p>
            </Link>
          </li>
        </ul>
      </Layout>
    </>

  );
}
