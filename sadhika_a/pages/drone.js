import styles from '../components/layout.module.css';
import Layout from '../components/layout';

export default function Drone() {
  return (
    <Layout>
      <div className={styles.leftColumn}>
      </div>
      <div className={styles.rightColumn}>
        <p>Drone</p>
      </div>
    </Layout>
  );
}