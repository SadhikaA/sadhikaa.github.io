import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import ExtremeMP from '../images/tennis/ExtremeMP.png';
import GravityPro from '../images/tennis/GravityPro.png';
import InstinctMP from '../images/tennis/InstinctMP.png';
import RadicalMP from '../images/tennis/RadicalMP.png';
import RadicalPro from '../images/tennis/RadicalPro.png';
import RadicalS from '../images/tennis/RadicalS.png';
import tennistable from '../images/tennis/tennistable.png';

export default function Racquets() {
  return (
    <>
      <Head>
        <title>Racquet Journey</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/notes" className={styles.pages}>writing</a>
        <hr></hr>
        <h3>🎾 Racquet Journey</h3>
        <hr></hr>
        <p>A reflection of my tennis journey along with a review of the racquets I've used throughout the years.</p>
        <p>Tennis has been a part of my life since age eight. I played on the Dougherty Valley High School Women's Tennis Team at the No. 1 Varsity singles position. I was on Varsity all four years of high school and an NCS Scholar-Athlete.</p>
        <p>Working through QuickStart guides and YouTube videos, my dad coached me to perfecting the basics of the game. We started with orange dot balls and Costco racquets as I developed tennis's essential components such as the forehand, backhand, and serve. As our knowledge increased, we recognized the importance of tennis-specific gear. We branched out into trying out different combinations of racquets and strings.</p>
        <p>As we understood the game better, we looked at local coaching academies and joined Tompkins Tennis. After six months of coaching, I played my first tournament with the academy and got a fourth place (my first trophy!). It was a huge victory and motivated me to compete in the United States Tennis Association (USTA) tournaments. Since my first tournament in August 2014, I have played over 200 matches, including high school tennis.</p>
        <p>While my dad was my central coach, I went to various tennis academies like Tompkins Tennis, Eagle Fustar, and the Innergy Tennis Academy. We also went to other well-known local and college coaches. Our approach was to learn tennis the right way with the proper technique and good sportsmanship. We used match play from tournaments to understand my game's shortcomings and improve day by day.</p>
        <p>Besides proper shoes, strings, balls, and clothing, the tennis racquet is an essential gear because it is like the extension of your hand. However, to get to the racquet that fits your game, it takes multiple iterations of racquet trials from different brands with different specifications. The following discusses my transition of racquets and how they have complimented my game throughout those moments. From power to control, 98 sq inches to 100 sq inches, thinner beam to thicker beam, this is my tennis journey through racquets.
        </p>
        <div className={styles.imageContainer}>
          <Image src={tennistable} alt="exec" width={600} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={RadicalS} alt="exec" width={350} className={styles.mobileImage} />
          <Image src={InstinctMP} alt="exec" width={350} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={RadicalMP} alt="exec" width={350} className={styles.mobileImage} />
          <Image src={ExtremeMP} alt="exec" width={350} className={styles.mobileImage} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={RadicalPro} alt="exec" width={350} className={styles.mobileImage} />
          <Image src={GravityPro} alt="exec" width={350} className={styles.mobileImage} />
        </div>
      </Layout>
    </>
  );
}