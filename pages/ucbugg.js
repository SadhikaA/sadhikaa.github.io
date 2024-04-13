import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Drone() {
  return (
    <>
      <Head>
        <title>Animated Short</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>Animated Short</h3>
          <p className={styles.contentTag}>Maya</p>
          <p className={styles.contentTag}>Adobe Illustrator</p>
          <p className={styles.contentTag}>tool</p>
          <p><a className={styles.links} href="">Link ↗</a></p>
          <p>In my embedded systems class (EECS 149), my group and I decided to build a self-stabilizing drone from scratch for our final project. Using materials from class such as </p>
          <h4>Heading</h4>
          <p>I build the app in Swift using the Core Bluetooth API. It works by taking in UUID...</p>
        </div>
      </Layout>
    </>
  );
}

