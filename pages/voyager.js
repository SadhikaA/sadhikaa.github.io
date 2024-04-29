import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import original from '../images/voyager/original.png';

export default function Voyager() {
  return (
    <>
      <Head>
        <title>Voyager</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>🧭 Voyager</h3>
          <p className={styles.contentTag}>SwiftUI</p>
          <p className={styles.contentTag}>MapKit</p>
          <p className={styles.contentTag}>ARKit</p>
          <p className={styles.contentTag}>RealityKit</p>&nbsp;&nbsp;
          <a className={styles.links} href="">Github ↗</a>
          <hr></hr>
            <ul>
                <li><a href="#goal" className={styles.contentsLink}>Goal and Design</a></li>
                <li><a href="#map" className={styles.contentsLink}>MapKit</a></li>
                <li><a href="#ar" className={styles.contentsLink}>ARKit and Geo Anchors</a></li>
                <li><a href="#reality" className={styles.contentsLink}>RealityKit</a></li>
            </ul>
          <hr></hr>
          <h4 id="goal">Goal & Design</h4>
          <div className={styles.imageContainer}>
            <Image src={original} alt="original" width={250} className={styles.mobileImage}/>
          </div>
          <h4 id="map">MapKit</h4>
          <h4 id="ar">ARKit and Geo Anchors</h4>
          <p>works well bc geotracking is enabled for CA, specifically alameda</p>
          <h4 id="reality">RealityKit</h4>
        </div>
      </Layout>
    </>
  );
}