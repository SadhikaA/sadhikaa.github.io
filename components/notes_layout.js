import styles from './notes_layout.module.css';
import Link from 'next/link';

export default function Layout({ children, title, tableOfContents }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Link href="/">
          <h2 className={styles.date}>⬅ back to homepage</h2>
        </Link>
        <div className={styles.header}>
          <h2 className={styles.linkH}>{title}</h2>
        </div>
        <div>
          {tableOfContents.map((item, index) => (
            <div key={index}>
              <Link href={`/notes/${format(title)}/${format(item.heading)}`}>
                <p className={styles.headingTOC}>{item.heading}</p>
              </Link>
              {item.chapters.map((chapter, chapterIndex) => (
                <Link href={`/notes/${format(title)}/${format(item.heading)}/#${format(chapter)}`}>
                    <p key={chapterIndex} className={styles.subheading}>{chapter}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>
        {children}
      </div>
    </div>
  );
}

function format(heading) {
    return heading.toLowerCase().replace(/\s+/g, '-');
  }