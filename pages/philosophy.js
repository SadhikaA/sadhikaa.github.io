import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MarkdownCards from '../public/MarkdownCards';

export default function Notebook() {
  return (
    <>
      <Head>
        <title>Philosophy</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/notes" className={styles.pages}>writing</a>
        <hr></hr>
          <h3>🧠 Philosophy</h3>
          <hr></hr>
          <ul>
            <li><a href="#mind" className={styles.contentsLink}>Philosophy of Mind</a></li>
          </ul>
          <h4 id="mind">Philosophy of Mind</h4>
          <MarkdownCards />
      </Layout>
    </>
  );
}