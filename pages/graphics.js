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
            <p className={styles.contentTag}>CGL (C Graphics Lib)</p>
            <hr></hr>
            <ul>
                <li><a href="#1" className={styles.contentsLink}>Assignment 1: Rasterization</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#1a" className={styles.contentsLink}>Drawing Single-Color Triangles</a></li>
                    <li><a href="#1b" className={styles.contentsLink}>Antialiasing by Supersampling</a></li>
                    <li><a href="#1c" className={styles.contentsLink}>Transforms</a></li>
                    <li><a href="#1d" className={styles.contentsLink}>Barycentric Coordinates</a></li>
                    <li><a href="#1e" className={styles.contentsLink}>"Pixel Sampling" for Texture Mapping</a></li>
                    <li><a href="#1f" className={styles.contentsLink}>"Level Sampling" with mipmaps for Texture Mapping</a></li>
                </ul>
                <li><a href="#2" className={styles.contentsLink}>Assignment 2: Mesh Geometry</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#2a" className={styles.contentsLink}>Bezier Curves with 1D de Casteljau Subdivision</a></li>
                    <li><a href="#2b" className={styles.contentsLink}>Bezier Curves with Seperable 1D de Casteljau</a></li>
                    <li><a href="#2c" className={styles.contentsLink}>Area-Weighted Vertex Normals</a></li>
                    <li><a href="#2d" className={styles.contentsLink}>Edge Flip</a></li>
                    <li><a href="#2e" className={styles.contentsLink}>Edge Split</a></li>
                    <li><a href="#2f" className={styles.contentsLink}>Loop Subdivision for Mesh Upsampling</a></li>
                </ul>
                <li><a href="#3" className={styles.contentsLink}>Assignment 3: Ray Tracing</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#3a" className={styles.contentsLink}>Ray Generation and Scene Intersection</a></li>
                    <li><a href="#3b" className={styles.contentsLink}>Bounding Volume Hierarchy</a></li>
                    <li><a href="#3c" className={styles.contentsLink}>Direct Illumination</a></li>
                    <li><a href="#3d" className={styles.contentsLink}>Global Illumination</a></li>
                    <li><a href="#3e" className={styles.contentsLink}>Adaptive Sampling</a></li>
                </ul>
                <li><a href="#4" className={styles.contentsLink}>Assignment 4: Animation</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#4a" className={styles.contentsLink}>Masses and Springs</a></li>
                    <li><a href="#4b" className={styles.contentsLink}>Simulation via Numerical Integratio</a></li>
                    <li><a href="#4c" className={styles.contentsLink}>Handling Collisions</a></li>
                    <li><a href="#4d" className={styles.contentsLink}>Handling Self-Collisions</a></li>
                    <li><a href="#4e" className={styles.contentsLink}>Shaders</a></li>
                </ul>
            </ul>
            <hr></hr>
            <p></p>
            <h3 id="1">Rasterization</h3>
            <h4 id="1a">Drawing Single-Color Triangles</h4>
            {/* <div className={styles.imageContainer}>
    <Image src={osexample} alt="os example" width={550} className={styles.mobileImage}/>
</div> */}
            {/* <p>https://cal-cs184-student.github.io/hw-webpages-sp24-SadhikaA/</p> */}
            <h3 id="2">Mesh Geometry</h3>
            <h3 id="3">Ray Tracing</h3>
            <h3 id="4">Animation</h3>
        </div>
    </Layout>
</>
);
}