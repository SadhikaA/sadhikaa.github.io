import styles from '../components/layout.module.css';
import Layout from '../components/notes_layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Notes() {
  return (
    <>
      <Head>
        <title>Notebook</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.contentTag}>Computer Graphics / Introduction</p>
          <h3>Drawing Triangles</h3>
          <p className={styles.links}>Subtitle</p>
          <hr></hr>
          <p>I've always been pretty interested in tools for thought and ways to design for better learning. This spring I was motivated to make my own markdown parser after realizing there were a lot more features I wanted in my notes than Notion could provide. I also wanted to create the ultimate learning device and embed the ability to make flashcards within my markdown notes.</p>
          <h4>v1</h4>
          <p>Version 1 of the markdown parser involved a simple python script that converted a md file into an html page and table of contents. I manually wrote the script to parse each line of md using my own stylistic choices sometimes, but mostly following normal markdown conventions. I also included latex and code support using MathJAX and Prism.</p>
          <p>However, this version required writing markdown, running the Python script, and reloading the html each time. Not ideal for taking a page of notes in lecture. I also wanted to include more features like hovering over a word to get its definition, automatic highlighting, inline conversion of markdown, comments, and a better table of contents.</p>
          <h4>v2</h4>
          <p>Feature list: </p>
          <p>vocab word highlighting + hover for definition?<br></br>
          comments (cornell notes/footnotes type)<br></br>
          large margins for readability<br></br>
          table of contents on the side<br></br>
          one page at a time<br></br>
          good use of visuals to detail the notes</p>
        </div>
      </Layout>
    </>
  );
}