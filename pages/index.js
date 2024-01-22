import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

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
                <div className={utilStyles.container}></div>
                <div className={utilStyles.container}>
                    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.31/build/spline-viewer.js"></script>
                    <spline-viewer hint url="https://prod.spline.design/mDpLLkIv8yao7omE/scene.splinecode"></spline-viewer>
                </div>
            </Layout>
        </>
    );
};
