import styles from "./page.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.header}>
          <h2>Sadhika Akula</h2>
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
        <p>Hi! I'm a junior at UC Berkeley studying Electrical Engineering and Computer Science. I'm interested in the intersection of human-computer interaction, computer graphics, and future hardware. Currently, I'm taking classes in interface design, operating systems, and computer graphics. I also enjoy reading, playing tennis, and learning new languages. This summer I'll be an intern at Apple working on Vision Pro.</p>
        <p className={styles.heading}>projects</p>
        <ul>
          <li>
            <p>making a (better) flashcard app</p>
            <p className={`${styles.tag} ${styles.tagRed}`}>iOS</p>
          </li>
          <li>
            <p>redesigning the UC Berkeley SWE website</p>
            <p className={`${styles.tag} ${styles.tagGreen}`}>web</p>
          </li>
          <li>
            <p>creating my own markdown parser</p>
            <p className={`${styles.tag} ${styles.tagPurple}`}>design</p>
          </li>
          <li>
            <p>making an animated short</p>
            <p className={`${styles.tag} ${styles.tagBlue}`}>graphics</p>
          </li>
          <li>
            <p>building a GPS-navigated drone</p>
            <p className={`${styles.tag} ${styles.tagOrange}`}>hardware</p>
          </li>
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.iframeContainer}>
          <iframe src='https://my.spline.design/miniroomcopy-05a620742bb6e9d82b49f1076cffcd72/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
      </div>
    </div>
  );
}