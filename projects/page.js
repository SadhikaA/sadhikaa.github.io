import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Projects() {
    return (
        <>
            <Layout>
            <div className={utilStyles.container}>
                this is the left column
            </div>
            <div className={utilStyles.container}>
                this is the right column
                <Link href="/">Back to home</Link>
            </div>
            </Layout>
        </>
    );
};