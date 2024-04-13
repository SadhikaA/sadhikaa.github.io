import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

// import app from '../images/ucbugg/app.png';

export default function UCBUGG() {
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
          <p className={styles.contentTag}>Pixar RenderMan</p>
          <p className={styles.contentTag}>Adobe Illustrator</p>&nbsp;&nbsp;
          <a className={styles.links} href="https://www.youtube.com/watch?v=93SXaI1Zl-0">Video ↗</a>
          <hr></hr>
          <p>In the fall, I took a decal (class led by Berkeley students) on 3D modeling and animation. Over the course of the semester, we covered all parts of the animation pipeline from pre-production, modeling, rigging, shading, lighting, animation, and post-production. </p>
          <h4>Heading</h4>
          {/* <div className={styles.imageContainer}>
            <Image src={magnet} alt="magnetometer" width={350} className={styles.mobileImage}/>
          </div> */}
          <p>I build the app in Swift using the Core Bluetooth API. It works by taking in UUID...</p>
        </div>
      </Layout>
    </>
  );
}