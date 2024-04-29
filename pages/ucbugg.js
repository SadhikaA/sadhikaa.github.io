import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import character from '../images/ucbugg/character.png';
import rig from '../images/ucbugg/rig.png';
import final from '../images/ucbugg/final.png';
import toon from '../images/ucbugg/toon.png';
import storyboard2 from '../images/ucbugg/storyboard2.png';
import walk from '../images/ucbugg/walk.jpg';

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
          <h3>🍄 Animated Short</h3>
          <p className={styles.contentTag}>Maya</p>
          <p className={styles.contentTag}>Pixar RenderMan</p>
          <p className={styles.contentTag}>After Effects</p>
          <p className={styles.contentTag}>Illustrator</p>&nbsp;&nbsp;
          <a className={styles.links} href="https://drive.google.com/file/d/1O701sCRdvRa7g6Y45aTVV8U3rzCpfHJa/view?usp=share_link">Video ↗</a>
          <hr></hr>
            <ul>
                <li><a href="#prepro" className={styles.contentsLink}>Pre-Production</a></li>
                <li><a href="#mod" className={styles.contentsLink}>Modeling & Rigging</a></li>
                <li><a href="#shade" className={styles.contentsLink}>Shading and Lighting</a></li>
                <li><a href="#animate" className={styles.contentsLink}>Animation</a></li>
                <li><a href="#render" className={styles.contentsLink}>Rendering</a></li>
            </ul>
          <hr></hr>
          <p>In the fall, I took a decal (class led by Berkeley students) on 3D modeling and animation, UCBUGG. Over the course of the semester, we covered all parts of the animation pipeline from pre-production, modeling, rigging, shading, lighting, animation, and post-production. I've wanted to learn about how Pixar movies were really made for a long time but this class truly gave me the greatest insights into the process and made me garner a new respect for all of the work that went into making these animated movies. Throughout the class, we worked on making an animation short from scratch, following a production schedule and rendering and compositing the final short.</p>
          <h4 id="prepro">Pre-Production</h4>
          <p>In UCBUGG, everyone pitched their own ideas for the plot of the short and then we were put into groups based on which storyboarding ideas we liked best. The story I worked on was about a flower character who feels bad about their "hair" and a mushroom character who grows a hat for her out of mushroom and makes her feel better. Overall, it was simple enough to be animated in two minutes, with not too many characters, and a clear story arc.</p>
          <div className={styles.imageContainer}>
            <Image src={storyboard2} alt="storyboard2" width={200} className={styles.mobileImage}/>
            <Image src={final} alt="storyboard" width={200} className={styles.mobileImage}/>
          </div>
          <p>The first few weeks were spent on learning how to model in Maya and designing character sheets. Here were some draft character sheets I drew up based on the stylistic choices from the storyboard:</p>
          <div className={styles.imageContainer}>
            <Image src={character} alt="character" width={350} className={styles.mobileImage}/>
          </div>
          <h4 id="mod">Modeling & Rigging</h4>
          <p>Modeling was one of the first more challenging aspects of Maya, for example, making sure the parent and child controllers corresponded correctly turned out to be extremely important for animation later on. After the character sheets were approved, we started modeling the characters in Maya. The key to modeling was becoming familiar with the keys and being able to make sure that the meshes had no holes in them and creating the design we wanted, while having good edge flow.</p>
          <div className={styles.imageContainer}>
            <Image src={rig} alt="rig" width={450} className={styles.mobileImage}/>
          </div>
          <h4 id="shade">Shading & Lighting</h4>
          <p>I worked on the toon shading for the flower character. Toon shading was easier to work with and fit better with the themes and inspiration we were going with. I also wanted to learn toon shading after seeing Marvel's <i>What If</i>, which used cel-shaded animation.</p>
          <p>Lighting was pretty simple overall and we used a few directional lights as well as global lighting to create the forest setting. I wasn't sure about how lighting worked too well or what the difference was between bounces of light, definitions of phong or lambert, but I eventually learnt a lot more when I took my computer graphics class in the following semester.</p>
          <div className={styles.imageContainer}>
            <Image src={toon} alt="toon" width={450} className={styles.mobileImage}/>
          </div>
          <h4 id="animate">Animation</h4>
          <p>Overall, it was really important to stay organized with this project. We had a production schedule which split up specific shots for each member in the group. I was assigned to do an eleven second portion where the mushroom character turned and walked over to the flower character.</p>
          <p>The challenging portion of this involved determining how best to animate a walk cycle and time the keyframes such that it looked natural. I redid the animation at least twenty times until it looked somewhat realistic. I also learned about how to pan the camera around so that it was ready for the next set of shots. The final animation that I worked on can be viewed in the video.</p>
          <div className={styles.imageContainer}>
            <Image src={walk} alt="walk" width={350} className={styles.mobileImage}/>
          </div>
          <h4 id="render">Rendering</h4>
          <p>Rendering and compositing was done with Pixar Renderman and Adobe Illustrator. Rendering took a lot longer than expected and I stayed up at night to push the next set of frames to be rendered in order to complete the animation on time. After some music and final edits, we were finally finished!</p>
          <p>In the same semester, I worked on both this and my drone project, making the end of the semester pretty hectic, but I got two great learning experiences out of it in hardware and animation.</p>
        </div>
      </Layout>
    </>
  );
}