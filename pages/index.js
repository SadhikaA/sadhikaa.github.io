import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sadhika Akula</title>
        <meta name="description" content="personal website of Sadhika Akula" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.iframeContainer}>
            <iframe src='https://my.spline.design/miniroomcopy-05a620742bb6e9d82b49f1076cffcd72/' frameborder='0' width='100%' height='100%'></iframe>
          </div>
        </div>
      </Layout>
    </>

  );
}