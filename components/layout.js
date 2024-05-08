import styles from './layout.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.header}>
          <Link href="/">
            <h2 className={styles.linkH}>Sadhika Akula</h2>
          </Link>
          <div className={styles.icons}>
            <a href="https://github.com/SadhikaA" className={styles.icon}>
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/sadhika-akula/" className={styles.icon}>
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:sadhika.akula@berkeley.edu" className={styles.icon}>
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
        <p className={styles.heading}>about</p>
        <p>Hi! I'm a junior at UC Berkeley studying Electrical Engineering and Computer Science. I'm interested in the intersection of human-computer interaction, computer graphics, and future hardware. Currently, I'm taking classes in interface design, operating systems, and computer graphics. I also enjoy reading, playing tennis, and learning new languages. This website serves as a way to log my work and keep track of what I've built or in progress.</p>
        {/* <p>Hi! I'm a junior at UC Berkeley studying Electrical Engineering and Computer Science. I'm interested in the intersection of human-computer interaction, computer graphics, and future hardware. Currently, I'm am intern at Apple on the Vision Pro Apps team. I also enjoy reading, playing tennis, and learning new languages. This website serves as a way to log my work and keep track of what I've built or in progress.</p> */}
        <p className={styles.heading}>portfolio</p>
        <ul>
          <li>
            <p className={styles.date}>MAY 2024</p>
            <p className={`${styles.tag} ${styles.tagGraphics}`}>graphics</p>
            <Link href="/graphics">
              <p className={styles.linkP}>CS 184 graphics assignments</p>
            </Link>
          </li>
          {/* <li>
            <p className={styles.date}>APR 2024</p>
            <p className={`${styles.tag} ${styles.tagiOS}`}>iOS</p>
            <Link href="/voyager">
              <p className={styles.linkP}>AR navigation and event app</p>
            </Link>
          </li> */}
          <li>
            <p className={styles.date}>MAR 2024</p>
            <p className={`${styles.tag} ${styles.tagDesign}`}>design</p>
            <p className={`${styles.tag} ${styles.tagWeb}`}>web</p>
            <Link href="/sweweb">
              <p className={styles.linkP}>redesign of the UC Berkeley SWE website</p>
            </Link>
          </li>
          <li>
            <p className={styles.date}>FEB 2024</p>
            <p className={`${styles.tag} ${styles.tagDesign}`}>design</p>
            <p className={`${styles.tag} ${styles.tagWeb}`}>web</p>
            <Link href="/markdown">
              <p className={styles.linkP}>markdown to textbook parser</p>
            </Link>
          </li> 
          <li>
            <p className={styles.date}>JAN 2024</p>
            <p className={`${styles.tag} ${styles.tagWriting}`}>writing</p>
            <Link href="/berkeley">
              <p className={styles.linkP}>berkeley class reviews</p>
            </Link>
          </li>
          <li>
            <p className={styles.date}>DEC 2023</p>
            <p className={`${styles.tag} ${styles.tagGraphics}`}>graphics</p>
            <Link href="/ucbugg">
              <p className={styles.linkP}>3D animated short</p>
            </Link>
          </li> 
          <li>
            <p className={styles.date}>DEC 2023</p>
            <p className={`${styles.tag} ${styles.tagHardware}`}>hardware</p>
            <Link href="/drone">
              <p className={styles.linkP}>GPS-navigated drone</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightColumn}>
        {children}
      </div>
    </div>
  );
}