import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import osexample from '../images/markdown/osexample.png';

export default function Markdown() {
  return (
    <>
      <Head>
        <title>Markdown Parser</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>Markdown Parser</h3>
          <p className={styles.contentTag}>Python</p>
          <p className={styles.contentTag}>React</p>&nbsp;&nbsp;
          <a className={styles.links} href="">Github ↗</a>
          <hr></hr>
          <p>I've always been pretty interested in tools for thought and ways to design for better learning. This spring I was motivated to make my own markdown parser after realizing there were a lot more features I wanted in my notes than Notion could provide. I also wanted to create the ultimate learning device and embed the ability to make flashcards within my markdown notes.</p>
          <h4>v1</h4>
          <div className={styles.imageContainer}>
            <Image src={osexample} alt="os example" width={650} className={styles.mobileImage}/>
          </div>
          <p>Version 1 of the markdown parser involved a simple python script that converted a md file into an html page and table of contents. I manually wrote the script to parse each line of md using my own stylistic choices sometimes, but mostly following normal markdown conventions. I also included latex and code support using MathJAX and Prism.</p>
          <p>However, this version required writing markdown, running the Python script, and reloading the html each time. Not ideal for taking a page of notes in lecture. I also wanted to include more features like hovering over a word to get its definition, automatic highlighting, inline conversion of markdown, comments, and a better table of contents.</p>
          <h4>v2</h4>
          <p>Feature list: </p>
          <p>inline notes, type and update directly in the document<br></br>
          editing mode and reading mode<br></br>
          vocab word highlighting<br></br>
          comments (cornell notes/footnotes type)<br></br>
          huge margins to help you read<br></br>
          table of contents on the side<br></br>
          have diff "pens" that you can switch on demand<br></br>
          one page at a time like textbook</p>
        </div>
      </Layout>
    </>
  );
}