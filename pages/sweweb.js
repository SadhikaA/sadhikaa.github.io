import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import design from '../images/swe/design.jpg';

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
          <p>As webmaster and secretary of the UC Berkeley SWE section, I wanted to update our website from its previous design to show new faces, new projects, and work with a more modern tech stack.</p>
          <h4>Design</h4>
          <p>I started by designing what I wanted the new website to look like, determining which parts we wanted to keep from the original, and what we wanted the new one to look like.</p>
          <div className={styles.imageContainer}>
            <Image src={design} alt="design" width={550} className={styles.mobileImage}/>
          </div>
        </div>
      </Layout>
    </>
  );
}