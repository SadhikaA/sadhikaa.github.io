import styles from './notes_layout.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Link href="/">
            <h2 className={styles.date}>⬅ back to homepage</h2>
        </Link>
        <div className={styles.header}>
            <h2 className={styles.linkH}>Notebook</h2>
        </div>
        <BookCover
            title="Computer Graphics"
            backgroundColor="linear-gradient(135deg, #98b9df, #135afe)"
            boxShadow="4px 4px 2px rgba(28, 95, 158, 0.5)"
        />
        <BookCover
            title="Machine Learning"
            backgroundColor="linear-gradient(135deg, #f98b9d, #f135af)"
            boxShadow="4px 4px 2px rgba(158, 28, 95, 0.5)"
        />
        <BookCover
            title="Artificial Intelligence"
            backgroundColor="linear-gradient(135deg, #dfb998, #fe5a13)" 
            boxShadow="4px 4px 2px rgba(158, 95, 28, 0.5)"
        />
        <BookCover
            title="Hardware"
            backgroundColor="linear-gradient(135deg, #b998df, #5a13fe)"
            boxShadow="4px 4px 2px rgba(95, 28, 158, 0.5)"
        />
        <BookCover
            title="Embedded Systems"
            backgroundColor="linear-gradient(135deg, #df98d2, #fe13d5)"
            boxShadow="4px 4px 2px rgba(158, 28, 133, 0.5)"
        />
        <p className={styles.heading}>Heading 1</p>
        <p className={styles.date}>Chapter</p>
        <Link href="/graphics">
            <p className={styles.linkP}>Subtitle</p>
        </Link>
      </div>
      <div className={styles.rightColumn}>
        {children}
      </div>
    </div>
  );
}

const BookCover = ({ title, backgroundColor, boxShadow }) => {
    const bookCoverStyle = {
      width: '50px',
      height: '80px',
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
        <div className={styles.bookTitle}>{title}</div>
      </div>
    );
  };