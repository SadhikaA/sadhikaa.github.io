import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import exec from '../images/swe/exec.JPG';
import coaster_AH from '../images/laser/coaster_AH.png';
import coaster_SA from '../images/laser/coaster_SA.png';

export default function Laser() {
  return (
    <>
      <Head>
        <title>Laser Cutting Experiments</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/portfolio" className={styles.pages}>portfolio</a>
          <hr></hr>
          <h3>🪵 Laser Cutting Experiments</h3>
          <hr></hr>
          <ul>
            <li><a href="#coasters" className={styles.contentsLink}>Coasters</a></li>
            <li><a href="#name_tags" className={styles.contentsLink}>Name Tags</a></li>
          </ul>
          <p>Random laser cutting projects throughout fall 2024 and spring 2025.</p>
          <h4 id="coasters">Coasters</h4>
          <p>I started making coasters for my friends.</p>
          <div className={styles.imageContainer}>
          <Image src={coaster_AH} alt="exec" width={250} className={styles.mobileImage} />
          <Image src={coaster_SA} alt="exec" width={250} className={styles.mobileImage} />
        </div>
          <h4 id="name_tags">Name Tags</h4>
          <p>Name tags for SWE, looking back, these should've been a little shorter.</p>
          <div className={styles.imageContainer}>
            <Image src={exec} alt="exec" width={400} className={styles.mobileImage} />
            </div>
      </Layout>
    </>
  );
}