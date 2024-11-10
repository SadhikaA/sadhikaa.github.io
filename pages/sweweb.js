import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import design from '../images/swe/design.jpg';
import exec from '../images/swe/exec.JPG';
import poster from '../images/swe/poster.png';
import tote from '../images/swe/tote.png';
import week1 from '../images/swe/week1.png';
import week2 from '../images/swe/week2.png';
import flyer1 from '../images/swe/flyer1.png';
import flyer2 from '../images/swe/flyer2.png';
import flyer3 from '../images/swe/flyer3.png';
import tshirt from '../images/swe/tshirt.jpg';
import sweatshirt from '../images/swe/sweatshirt.jpg';
import homefigma from '../images/swe/homefigma.png';
import involvedfigma from '../images/swe/involvedfigma.png';
import originalhome from '../images/swe/originalhome.png';
import originalinvolved from '../images/swe/originalinvolved.png';
import originaloutreach from '../images/swe/originaloutreach.png';
import originalcorporate from '../images/swe/originalcorporate.png';
import newhome from '../images/swe/newhome.png';
import newinvolved from '../images/swe/newinvolved.png';
import newoutreach from '../images/swe/newoutreach.png';
import newcorporate from '../images/swe/newcorporate.png';

export default function Markdown() {
  return (
    <>
      <Head>
        <title>SWE Website</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/portfolio" className={styles.pages}>portfolio</a>
        <hr></hr>
        <h3>🟣 Designing for UCB Society of Women Engineers</h3>
        <p className={styles.contentTag}>Canva</p>
        <p className={styles.contentTag}>Figma</p>
        <p className={styles.contentTag}>HTML, CSS, JS</p>&nbsp;&nbsp;
        <a className={styles.links} href="https://github.com/ucbsweweb/ucb_swe_public_html">Github ↗</a>
        <hr></hr>
        <p>As Webmaster and Secretary of the UC Berkeley SWE section, I worked on various design and marketing projects throughout my junior and senior year.</p>
        <h4 id="design">Design and Marketing</h4>
        <div className={styles.imageContainer}>
          <Image src={exec} alt="exec" width={500} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>laser cut name tags</caption>
        </div>
        <div className={styles.imageContainer}>
          <Image src={flyer1} alt="exec" width={230} className={styles.mobileImage} />
          <Image src={flyer2} alt="exec" width={230} className={styles.mobileImage} />
          <Image src={flyer3} alt="exec" width={230} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>various flyers</caption>
        </div>
        <div className={styles.imageContainer}>
          <Image src={week1} alt="exec" width={350} className={styles.mobileImage} />
          <Image src={week2} alt="exec" width={350} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>welcome week flyers</caption>
        </div>
        <div className={styles.imageContainer}>
          <Image src={poster} alt="exec" width={720} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>general marketing poster</caption>
        </div>
        <h4 id="merch">Merchandise</h4>
        <div className={styles.imageContainer}>
          <Image src={tshirt} alt="exec" width={200} className={styles.mobileImage} />
          <Image src={sweatshirt} alt="exec" width={200} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={tote} alt="exec" width={300} className={styles.mobileImage} />
        </div>
        <h4 id="website">Website</h4>
        <p>I started by designing what I wanted the new website to look like, determining which parts we wanted to keep from the original, and what we wanted the new one to look like.</p>
        <div className={styles.imageContainer}>
          <Image src={design} alt="design" width={550} className={styles.mobileImage} />
        </div>
        <p>I then converted this design into a Figma design.</p>
        <div className={styles.imageContainer}>
          <Image src={homefigma} alt="homefigma" width={350} className={styles.mobileImage} />
          <Image src={involvedfigma} alt="involvedfigma" width={350} className={styles.mobileImage} />
        </div>
        <p>In the end, I combined parts of these two design changes that I liked and settled on converting the existing webpage into one that was more modern, readable, and focused on simplicity of information.</p>
        <div className={styles.imageContainer}>
          <Image src={originalhome} alt="old" width={350} className={styles.mobileImage} />
          <Image src={newhome} alt="new" width={350} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>original and new home page</caption>
        </div>
        <div className={styles.imageContainer}>
          <Image src={originalinvolved} alt="old" width={350} className={styles.mobileImage} />
          <Image src={newinvolved} alt="new" width={350} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>original and new involved page</caption>
        </div>
        <div className={styles.imageContainer}>
          <Image src={newcorporate} alt="new" width={550} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>new corporate page</caption>
        </div>
        <div className={styles.imageContainer}>
          <Image src={newoutreach} alt="new" width={550} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <caption>new outreach page</caption>
        </div>
      </Layout>
    </>
  );
}