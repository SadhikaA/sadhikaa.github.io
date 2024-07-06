import styles from '../components/notes_layout.module.css';
import Layout from '../components/notes_layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Notes() {
    const title = 'Notebook';
    const tableOfContents = [];

    return (
        <>
            <Head>
                <title>Notebook</title>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
            </Head>
            <Layout title={title} tableOfContents={tableOfContents}>
                <div className={styles.leftColumn}>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.rightColumn}>
                        <div className={styles.bookGrid}>
                            <BookCover
                                title="Computer Graphics"
                                backgroundColor="linear-gradient(135deg, #98b9df, #135afe)"
                                boxShadow="4px 4px 2px rgba(28, 95, 158, 0.5)"
                                link="/notes/computer-graphics"
                            />
                            <BookCover
                                title="Machine Learning"
                                backgroundColor="linear-gradient(135deg, #f98b9d, #f135af)"
                                boxShadow="4px 4px 2px rgba(158, 28, 95, 0.5)"
                                link="/notes/machine-learning"
                            />
                            <BookCover
                                title="Artificial Intelligence"
                                backgroundColor="linear-gradient(135deg, #dfb998, #fe5a13)"
                                boxShadow="4px 4px 2px rgba(158, 95, 28, 0.5)"
                                link="/notes/artificial-intelligence"
                            />
                            <BookCover
                                title="Human-Computer Interaction"
                                backgroundColor="linear-gradient(135deg, #b998df, #5a13fe)"
                                boxShadow="4px 4px 2px rgba(95, 28, 158, 0.5)"
                                link="/notes/human-computer-interaction"
                            />
                            <BookCover
                                title="Software Engineering"
                                backgroundColor="linear-gradient(135deg, #df98d2, #fe13d5)"
                                boxShadow="4px 4px 2px rgba(158, 28, 133, 0.5)"
                                link="/notes/software-engineering"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

const BookCover = ({ title, backgroundColor, link, boxShadow }) => {
    const bookCoverStyle = {
        width: '60px',
        height: '90px',
        background: backgroundColor,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: boxShadow,
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
        padding: '20px',
        marginTop: '20px',
    };

    return (
        <div style={bookCoverStyle}>
            <Link href={link} className={styles.bookLink}><div className={styles.bookTitle}>{title}</div></Link> 
        </div>
    );
};