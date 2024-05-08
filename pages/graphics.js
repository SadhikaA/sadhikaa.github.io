import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';


export default function Graphics() {
return (
<>
    <Head>
        <title>Computer Graphics Projects</title>
        <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
    </Head>
    <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
            <h3>🫖 Computer Graphics Projects</h3>
            <p className={styles.contentTag}>CGL (C Graphics Lib)</p>&nbsp;&nbsp;
            <a className={styles.links} href="">Github ↗</a>
            <hr></hr>
            <ul>
                <li><a href="#1" className={styles.contentsLink}>Assignment 1: Rasterization</a></li>
                <li><a href="#2" className={styles.contentsLink}>Assignment 2: Mesh Geometry</a></li>
                <li><a href="#3" className={styles.contentsLink}>Assignment 3: Ray Tracing</a></li>
                <li><a href="#4" className={styles.contentsLink}>Assignment 4: Animation</a></li>
            </ul>
            <hr></hr>
            <p></p>
            <h4 id="1">Rasterization</h4>
            {/* <div className={styles.imageContainer}>
    <Image src={osexample} alt="os example" width={550} className={styles.mobileImage}/>
</div> */}
            <p>https://cal-cs184-student.github.io/hw-webpages-sp24-SadhikaA/</p>
            <h4 id="2">Mesh Geometry</h4>
            <h4 id="3">Ray Tracing</h4>
            <h4 id="4">Animation</h4>
        </div>
    </Layout>
</>
);
}