import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Bookshelf() {
  return (
    <>
      <Head>
        <title>Bookshelf</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
          <hr></hr>
          <h3>📚 Bookshelf</h3>
          <hr></hr>
          <ul>
            <li><a href="#2024" className={styles.contentsLink}>2024</a></li>
          </ul>
          <p>Log of books I've read, starting from March 2024.</p>
          <h4 id="2024">2024</h4>
          <p className={styles.contentTag}>Slouching Towards Bethelhem - Joan Didion</p>
          <p>I picked this book up since I enjoy rereading Didion's short but famous piece, On Self-Respect. As someone from California, the descriptions of San Francisco and Central California are really interesting to read about.</p>
          <p className={styles.contentTag}>Portraits of the Mind - Carl Schoonover</p>
          <p>My machine learning professor had some images from this book on the slides covering neural networks. I was interested in the history of the brain and picked this book up to see more visuals and learn about some of the early pioneers of brain imaging/analysis, including Cajal, da Vinci, Golgi, and more. The coolest picture was mapping the different parts of the brain and the way they were connected using a circuit diagram, which really branched the EECS and the art side together.</p>
          <p className={styles.contentTag}>Dune - Frank Herbert</p>
          <p>I had wanted to read Dune for a while, but the popularity of the movies inspired me to actually pick up the book. I thought Dune was unique in terms of much inspiration coming from . I could see how many aspects of Herbert's vision of our future was aligned with </p>
          <p className={styles.contentTag}>The Brothers Karamazov - Fyodor Dostoevsky</p>
          <p>I didn't know what to expect reading this book, it definitely got better as I progressed through the book since the first half is a lot of background. I particularly enjoyed Dostoesvky's writing style and ability to capture the situation, the characters, the emotions, all at once without overdoing anything. Certain quotes really struck with me along with the characters of Mitya + Grushenka, Kolya, and Smerdyakov. I also thoroughly enjoyed the drama of the court case and the fact that there was no real conclusion to some of the characters.</p>
          <p className={styles.contentTag}>Tomorrow, Tomorrow, and Tomorrow - Gabrielle Zevin</p>
          <p>A good deep dive into the struggles of working on a technical project with people you are close to, but also a great story about friendship. The last third of the book was difficult to be as passionate about the plot compared to the first two thirds of the book. I enjoy revisiting this book as a litmus test to see how my perspective changes over time.</p>
      </Layout>
    </>
  );
}