import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import blogStyles from '../styles/blog.module.css';
import { getSortedPostsData } from '../lib/noteposts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Notes({ allPostsData}) {
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
                    <Link href="/"><button className={utilStyles.button}>← Home</button></Link>
                    <h2 className={utilStyles.headingLg}>/notes</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <small className={utilStyles.lightGrayText}>
                                    <div className={blogStyles.blogtag}><Date dateString={date} /></div>
                                </small>
                                <Link href={`/noteposts/${id}`}><button className={blogStyles.bloglink}>{title}</button></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </>
    );
};