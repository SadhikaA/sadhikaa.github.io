import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import exec from '../images/swe/exec.JPG';
import coaster_AH from '../images/laser/coaster_AH.png';

export default function TUI() {
  return (
    <>
      <Head>
        <title>Tangible User Interface Project</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/portfolio" className={styles.pages}>portfolio</a>
          <hr></hr>
          <h3>🪑 Tangible User Interface Final Project</h3>
          <hr></hr>
          <ul>
            <li><a href="#ideation" className={styles.contentsLink}>Initial Ideas</a></li>
            <li><a href="#final_idea" className={styles.contentsLink}>Final Idea</a></li>
            <li><a href="#demo_day" className={styles.contentsLink}>Demo Day</a></li>
          </ul>
          <h4 id="ideation">Initial Ideas</h4>
          <p>I started making coasters for my friends.</p>
          <h4 id="final_idea">Final Idea</h4>
          <p>Name tags for our SWE conference, if I were to make these again, I would shorten the width. I would also make the business card out of acrylic next time.</p>
          <h4 id="demo_day">Demo Day</h4>
          <div className={styles.imageContainer}>
            <Image src={exec} alt="exec" width={400} className={styles.mobileImage} />
          </div>
      </Layout>
    </>
  );
}