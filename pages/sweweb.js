import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

// import app from '../images/ucbugg/app.png';

export default function Markdown() {
  return (
    <>
      <Head>
        <title>SWE Website</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>🟣 UCB Society of Women Engineers Website</h3>
          <p className={styles.contentTag}>Next.js</p>
          <p className={styles.contentTag}>React</p>&nbsp;&nbsp;
          <a className={styles.links} href="">Github ↗</a>
          <hr></hr>
          <p>In the fall...</p>
          <h4>Heading</h4>
          {/* <div className={styles.imageContainer}>
            <Image src={magnet} alt="magnetometer" width={350} className={styles.mobileImage}/>
          </div> */}
          <p>I build the app...</p>
        </div>
      </Layout>
    </>
  );
}