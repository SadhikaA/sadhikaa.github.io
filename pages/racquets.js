import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

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
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>👟 Racquet Journey</h3>
          <hr></hr>
          <p>Inspired by <a className={styles.links} href="https://rileywilson.co/posts/2021-09-13-tennis/">this blog post</a>, I thought I would write some of my own generalizations that I’ve learnt on things that translate off the court.</p>
          <h4>Hard Work &gt; Talent</h4>
          <p>Talent and hard work go hand-in-hand. It's easy to say that someone has more "natural skill" but that doesn't account for all the days of practice and repetition they may have. Focus instead on making your own luck, the player is not hitting a random ball, they're hitting the ball <em>you</em> sent back. So find ways to create your own ripples towards success.</p>
          <h4>Persistance is Rewarded</h4>
          <p>The match isn't over until you shake hands. It's always possible to come back from 2 sets down, or 0-5, or 0-40 in a game. Tennis, like life, is a game of focus and not giving up on yourself.</p>
          <h4>Let Your Emotions Flow</h4>
          <p>The stress of a competitive match can create a lot of conflicting emotions. Much like common anxieties, learn to see these emotions as separate from you. Talk to yourself the way you would if you were coaching someone else. By quieting emotions that are less helpful, you can focus your mind and see the bigger picture.</p>
          <h4>Routine Matters</h4>
          <p>There are a few key actions we have in our day and in matches that we repeat each day or moment. By having a routine for serving, returning, and between the points, you can free up mental space for strategies and "get in the zone".</p>
          <h4>The Game's Between Your Ears</h4>
          <p>At the end of the day, tennis is like chess. The smarter player usually wins when technique is level. Being able to see a few points ahead, or find weaknesses in your opponent can quickly turn the game or match in your favor.</p>
          <h4>Repetition, Repetition, Repetition</h4>
          <p>There's a saying that you need 10,000 hours of practice to master a skill. An even better saying is that you need 10,000 <em>iterations</em> to master a skill. There is no shortcut to hitting as many balls as possible, trying different techniques, and putting yourself in challenging and tough situations against harder opponents. If we compare ourselves with the current state we're at, we can feel accomplished. But if we're focused on iterating, as we get better, we see that we still have a lot more to learn and improve on.</p>
          <h4>Write Observations</h4>
          <p>This one is pretty specific to me. I find that breaking down matches and keeping a daily practice log can actually be helpful in reinforcing and remember new techniques or ideas. By keeping track of things daily, you can notice patterns that appear and choose to react on them. It's also great to look back on my tennis notebook and find things that I learnt in the past but may have forgotten now.</p>
          <h4>Winners != Losers</h4>
          <p>This may seem obvious, but there is a clear line between winning and losing. Although it may be just a couple points that change the course of the outcome, the emotions that come with winning and losing are much different. Keeping mind of this can help put persistance, routine, and practice into greater importance.</p>
          <h4>Learn by Example</h4>
          <p>With current technology (see SwingVision), it's now extremely easy to be able to record yourself and watch professional tennis players online and learn on your own. There are thousands of videos on tennis at all levels and pattern matching your game to someone else is a good place to start. Learn to notice key changes and put yourself in player's shoes to really be able to understand the mental and physical aspects of playing tennis.</p>
          <h4>Have Fun</h4>
          <p>It is much easier to play if you are enjoying what you're doing. After all, you're usually playing for low stakes (unless you're in a Grand Slam) so there is nothing stopping you from experimenting and constantly learning.</p>
        </div>
      </Layout>
    </>
  );
}