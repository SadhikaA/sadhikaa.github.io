import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import launch from '../images/voyager/cory.png';
import markers from '../images/voyager/markers.png';
import events from '../images/voyager/events.png';
import map from '../images/voyager/map.png';
import arview from '../images/voyager/arview.png';

export default function Voyager() {
  return (
    <>
      <Head>
        <title>Berkeley ARscapes</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
      </Head>
      <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
          <h3>🧭 Berkeley ARscape</h3>
          <p className={styles.contentTag}>SwiftUI</p>
          <p className={styles.contentTag}>MapKit</p>
          <p className={styles.contentTag}>ARKit</p>
          <p className={styles.contentTag}>RealityKit</p>&nbsp;&nbsp;
          <a className={styles.links} href="">Github ↗</a>
          <hr></hr>
            <ul>
                <li><a href="#goal" className={styles.contentsLink}>Goal and Design</a></li>
                <li><a href="#map" className={styles.contentsLink}>MapKit</a></li>
                <li><a href="#ar" className={styles.contentsLink}>ARKit and Geo Anchors</a></li>
                <li><a href="#spline" className={styles.contentsLink}>Spline</a></li>
                <li><a href="#results" className={styles.contentsLink}>Results</a></li>
            </ul>
          <hr></hr>
          <h4 id="goal">Goal</h4>
          <p>My goal was to create an app that could help people find events on campus when they were already there. A quick look up with the camera could help you see events going on that day and even show you routes. I aimed to use AR to highlight a path to follow and then a marker displayed outside the building to highlight what event was going on. In the long term, I also wanted to add a feature to track attendance using the AR marker as well.</p>
          <h4 id="map">MapKit</h4>
          <p>The first step was designing the map and allowing users to add event. I created buttons for these actions, and limited the search area for the location of an event to Berkeley in order to make sure that I didn’t show too many results.</p>
          <div className={styles.imageContainer}>
            <Image src={map} alt="map" width={400} className={styles.mobileImage}/>
          </div>
          <h4 id="spline">Spline</h4>
          <p>I designed these AR markers in Spline, to add a unique touch to advertising of events. I added some more common Berkeley events as designs. The goal is for these AR markers to be displayed next to the location of the event, allowing for users to quickly see what's going on nearby.</p>
          <div className={styles.imageContainer}>
            <Image src={markers} alt="markers" width={700} className={styles.mobileImage}/>
          </div>
          <h4 id="ar">ARKit and Geo Anchors</h4>
          <p>First, I had to check if geographical anchors were supported for Berkeley, as there are a handful of cities across the world where they are supported. Luckily, there are many cities and counties in California which have been mapped by LiDAR and I was able to pass the first check.</p>
          <p>I then added these markers as location anchors to the specific places where an event was happening. However, because Spline didn't convert to USDZ format for free, I used existing USDZ files in Reality Composer Pro.</p>
          <h4 id="results">Results</h4>
          <p>These were the final screens from the app, which include placing an event and using it during the daylight to see the AR anchor displayed at the location.</p>
          <div className={styles.imageContainer}>
            <Image src={launch} alt="launch" width={300} className={styles.mobileImage}/>
            <Image src={events} alt="events" width={300} className={styles.mobileImage}/>
          </div>
          <div className={styles.imageContainer}>
            <Image src={arview} alt="arview" width={300} className={styles.mobileImage}/>
          </div>
          <p>This app was mostly a SwiftUI prototype, with no server or database pulling in any list of events and no unique users. Instead, it was a test to see if this was something feasible/interesting to pursue and build an app for my own personal use case for fun! </p>
        </div>
      </Layout>
    </>
  );
}