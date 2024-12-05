import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Notes() {
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
        <h3>📓 Writing</h3>
        <hr></hr>
        <ul>
          <li>
            <p className={styles.date}>DEC 2024</p>
            <Link href="/berkeley">
              <p className={styles.linkP}>berkeley class reviews</p>
            </Link>
          </li>
          <li>
            <p className={styles.date}>MAY 2021</p>
            <Link href="/tennis">
              <p className={styles.linkP}>life lessons from tennis</p>
            </Link>
          </li>
          <li>
            <p className={styles.date}>OCT 2020</p>
            <Link href="/racquets">
              <p className={styles.linkP}>racquet review</p>
            </Link>
          </li>
        </ul>
      </Layout>
    </>
  );
}