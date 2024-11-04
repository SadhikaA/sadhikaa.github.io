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
      <div className={styles.header}>
          <Link href="/">
            <h2 className={styles.linkH}>Sadhika Akula</h2>
          </Link>
          <div className={styles.icons}>
            <a href="https://github.com/SadhikaA" className={styles.icon}>
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/sadhika-akula/" className={styles.icon}>
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:sadhika.akula@berkeley.edu" className={styles.icon}>
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      <p className={styles.heading}>about</p>
        <p>Hi! I'm a senior at UC Berkeley studying Electrical Engineering and Computer Science. I'm interested in the intersection of human-computer interaction, computer graphics, and future hardware. Currently, I'm taking classes in tangible interfaces, machine learning, and philosophy. I also enjoy reading, playing tennis, and learning new languages. This website is my space to document projects and share what I've built or are currently working on.</p>
        {/* <p>Hi! I'm a software engineer at Apple working on the Vision Pro. Previously, I graduated from UC Berkeley and studied Electrical Engineering and Computer Science. In my spare time, I can be found reading, playing tennis, attempting latte art, and learning new languages. This website is my space to document projects and share what I've built.</p> */}
        <p className={styles.heading}>portfolio</p>
        {/* <Link href="/notes">
          <p className={`${styles.tag} ${styles.tagGraphics}`}>Notes</p>
        </Link>
        <Link href="/bookshelf">
          <p className={`${styles.tag} ${styles.tagGraphics}`}>Bookshelf</p>
        </Link> */}
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
          {/* <li>
            <p className={`${styles.tag} ${styles.tagHardware}`}>hardware</p>
            <Link href="/printing">
              <p className={styles.linkP}>3D printing experiments</p>
            </Link>
          </li> */}
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
        {/* <p className={styles.heading}>writing</p>
        <ul>
          <li>
            <p className={styles.date}>MAY 2024</p>
            <Link href="/berkeley">
              <p className={styles.linkP}>berkeley class reviews</p>
            </Link>
          </li>
        </ul> */}
      </Layout>
    </>

  );
}
