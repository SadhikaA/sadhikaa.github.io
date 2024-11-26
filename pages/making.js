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
        <title>Making</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/notes" className={styles.pages}>writing</a>
        <hr></hr>
          <h3>🖍️ Fabrication</h3>
          <hr></hr>
          <ul>
            <li><a href="#heading-0" className={styles.contentsLink}>Laser Cutting</a></li>
            <li><a href="#heading-1" className={styles.contentsLink}>3D Printing</a></li>
          </ul>
          <MarkdownCards fileName="../makingcards.md" />
      </Layout>
    </>
  );
}