import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
    <>
    <Head>
        <title>Sadhika Akula</title>
        <meta name="description" content="personal website of Sadhika Akula" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>
      <Component {...pageProps} />
    </>
    )
  }