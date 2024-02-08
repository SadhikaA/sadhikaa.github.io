import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Bookshelf() {
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
                <div className={utilStyles.container}>
                </div>
                <div className={utilStyles.container}>
                    <Link href="/"><button className={utilStyles.button}>/home</button></Link>
                    <h2 className={utilStyles.headingLg}>/bookshelf</h2>
                </div>
            </Layout>
        </>
    );
};
