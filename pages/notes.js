import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Notebook() {
  return (
    <>
      <Head>
        <title>Notebook</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <hr></hr>
          <h3>📓 Notes</h3>
          <hr></hr>
          <ul>
            <li><a href="#hci" className={styles.contentsLink}>Human Computer Interaction</a></li>
            <li><a href="#philos" className={styles.contentsLink}>Philosophy</a></li>
            <li><a href="#brain" className={styles.contentsLink}>Brain, Mind, and Behavior</a></li>
            <li><a href="#kannada" className={styles.contentsLink}>Kannada</a></li>
            <li><a href="#telugu" className={styles.contentsLink}>Telugu</a></li>
            <li><a href="#sanskrit" className={styles.contentsLink}>Sanskrit</a></li>
            <li><a href="#french" className={styles.contentsLink}>French</a></li>
          </ul>
          <h4 id="philos">Philosophy</h4>
          <p className={styles.contentTag}>subtitle tag</p>
          <p>notebooks go here</p>
          <ul>
          <li>
            <p className={styles.date}>DEC 2024</p>
            <Link href="/berkeley">
              <p className={styles.linkP}>berkeley class reviews</p>
            </Link>
          </li>
        </ul>
      </Layout>
    </>
  );
}