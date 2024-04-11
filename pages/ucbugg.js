import styles from '../components/layout.module.css';
import Layout from '../components/layout';

export default function Animation() {
  return (
    <Layout>
      <div className={styles.leftColumn}>
      </div>
      <div className={styles.rightColumn}>
        <p>UCBUGG</p>
      </div>
    </Layout>
  );
}