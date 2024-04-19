import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import character from '../images/ucbugg/character.png';
import rig from '../images/ucbugg/rig.png';
import final from '../images/ucbugg/final.png';
import toon from '../images/ucbugg/toon.png';
import storyboard2 from '../images/ucbugg/storyboard2.png';

export default function UCBUGG() {
  return (
    <>
      <Head>
        <title>Animated Short</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>Animated Short</h3>
          <p className={styles.contentTag}>Maya</p>
          <p className={styles.contentTag}>Pixar RenderMan</p>
          <p className={styles.contentTag}>After Effects</p>
          <p className={styles.contentTag}>Illustrator</p>&nbsp;&nbsp;
          <a className={styles.links} href="">Video ↗</a>
          <hr></hr>
          <p>In the fall, I took a decal (class led by Berkeley students) on 3D modeling and animation. Over the course of the semester, we covered all parts of the animation pipeline from pre-production, modeling, rigging, shading, lighting, animation, and post-production. I've wanted to learn about how Pixar movies were really made for a long time but this class truly gave me the greatest insights into the process and made me garner a new respect for all of the work that went into making these animated movies. My final project for the class culminated in making an animated short, which was worked on parallel with the content of the course.</p>
          <h4>Pre-Production</h4>
          <div className={styles.imageContainer}>
            <Image src={character} alt="character" width={350} className={styles.mobileImage}/>
          </div>
          <h4>Modeling</h4>
          <p>I built...</p>
          <h4>Rigging</h4>
          <div className={styles.imageContainer}>
            <Image src={rig} alt="character" width={650} className={styles.mobileImage}/>
          </div>
          <h4>Shading</h4>
          <div className={styles.imageContainer}>
            <Image src={toon} alt="character" width={650} className={styles.mobileImage}/>
          </div>
          <h4>Animation</h4>
          <h4>Rendering</h4>
          <h4>Post-Production</h4>
          <p>Post-production mostly involved adding music and final edits.</p>
          <p>In the same semester, I worked on both this my drone project, making the end of the semester pretty hectic, but I got two great learning experiences out of it in hardware and animation.</p>
        </div>
      </Layout>
    </>
  );
}