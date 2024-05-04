import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
    <>
    <Head>
        <title>Sadhika Akula</title>
        <meta name="description" content="personal website of Sadhika Akula" />
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="favicon" href="/favicon.png"/>
        <link rel="apple-touch-icon" href="/favicon.png"/>
      </Head>
      <Component {...pageProps} />
    </>
    )
  }