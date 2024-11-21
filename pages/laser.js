import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import exec from '../images/swe/exec.JPG';
import coaster_AH from '../images/laser/coaster_AH.png';
import coaster_SA from '../images/laser/coaster_SA.png';
import coaster_VO from '../images/laser/coaster_VO.png';
import card from '../images/laser/card.png';
import keychain from '../images/laser/keychain.png';

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
            <li><a href="#name_tags" className={styles.contentsLink}>Name Tags & Business Cards</a></li>
          </ul>
          <p>Random laser cutting projects throughout 2023 and 2024.</p>
          <h4 id="coasters">Coasters</h4>
          <p>I started making coasters for my friends.</p>
          <div className={styles.imageContainer}>
          <Image src={coaster_AH} alt="coaster" width={200} className={styles.mobileImage} />
          <Image src={coaster_VO} alt="coaster" width={200} className={styles.mobileImage} />
          <Image src={coaster_SA} alt="coaster" width={200} className={styles.mobileImage} />
          </div>
          <h4 id="name_tags">Name Tags & Business Cards</h4>
          <p>Name tags for our SWE conference, if I were to make these again, I would shorten the width. I would also make the business card out of acrylic next time.</p>
          <div className={styles.imageContainer}>
            <Image src={exec} alt="exec" width={400} className={styles.mobileImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={card} alt="card" width={400} className={styles.mobileImage} />
          </div>
          <p>Keychains for SWE's mini university program:</p>
          <div className={styles.imageContainer}>
            <Image src={keychain} alt="keychain" width={600} className={styles.mobileImage} />
          </div>
      </Layout>
    </>
  );
}