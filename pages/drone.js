import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import magnet from '../images/drone/magnetometers.png';
import app from '../images/drone/app.png';
import drone from '../images/drone/drone.png';
import chart from '../images/drone/chart.png';

export default function Drone() {
  return (
    <>
      <Head>
        <title>Swift Flight: Stabilized Drone</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='100'>🌊</text></svg>" />
      </Head>
      <Layout>
        <a href="/" className={styles.pages}>/</a>
        <a href="/portfolio" className={styles.pages}>portfolio</a>
        <hr></hr>
          <h3>🚁 Swift Flight: Stabilized Drone</h3>
          <p className={styles.contentTag}>Arduino</p>
          <p className={styles.contentTag}>SwiftUI</p>
          <p className={styles.contentTag}>EPS32</p>&nbsp;&nbsp;
          <a className={styles.links} href="https://github.com/SadhikaA/drone">Github ↗</a> &nbsp;<a className={styles.links} href="https://www.youtube.com/watch?v=93SXaI1Zl-0">Video ↗</a>
          <hr></hr>
            <ul>
                <li><a href="#sensor" className={styles.contentsLink}>Sensor Calibration</a></li>
                <li><a href="#app" className={styles.contentsLink}>Bluetooth App</a></li>
                <li><a href="#results" className={styles.contentsLink}>Results</a></li>
            </ul>
          <hr></hr>
          <p>In my embedded systems class (EECS 149), my group and I decided to build a self-stabilizing drone from scratch for our final project using basic sensor readings. We started with the given materials and sensors from class including a 10 DOF IMU, BLE device, EPS32 microcontroller, drone motors, propellers, and a drone skeleton. I worked primarily on sensor calibration and a bluetooth app to communicate and maneuver the drone.</p>
          <h4 id="sensor">Sensor Calibration</h4>
          <p>I worked on sensor calibration for our IMU (inertial measurement unit). The IMU included a 3-axis gyro, 3-axis magnetometer, 3-axis accelerometer, and barometer. In order to adjust for the noise and error of the magnetometer, accelerometer, and magnetometer. I worked with my teammate to design a contraption that allows for measuring the values of the sensor readings and plotting it. After plotting these values, we adjusted the centers of these graphs and determined the noise and calibration values.</p>
          <div className={styles.imageContainer}>
            <Image src={magnet} alt="magnetometer" width={350} className={styles.mobileImage}/>
          </div>
          <h4 id="app">Bluetooth App</h4>
          <p>In order to navigate the drone, I utilized a bluetooth low energy module (BLE) for wireless communication between the mobile app and the ESP flight controller on the drone. I built the app in Swift using the Core Bluetooth API. I had never worked with bluetooth technology before so I had to read quite a bit on it.</p>
          <p>BLE modules work by using characteristics, data values that can be read and written to and are used to send handshake acknowledgements between the controller and the mobile app according to the protocol and write location. Each characteristic has a specific UUID identifier. In the project implementation, the mobile phone reads, writes and subscribes to characteristics’s notifications in peripherals, allowing the data to be shared wirelessly as intended. The system begins by initialization where the ESP32’s BLE server is named and started with a unique UUID for the service and each characteristic. The mobile application then finds a peripheral and then connects to the drone’s BLE service based on UUID. </p>
          <div className={styles.imageContainer}>
            <Image src={app} alt="app" width={600} className={styles.mobileImage}/>
          </div>
          <div className={styles.imageContainer}>
                <caption>iOS app to control the drone</caption>
            </div>
          <p>When the user moves the joystick on the application, a value corresponding to the change in yaw, pitch and roll is written to its respective characteristic along with the current scale value. Given the interrupt based system, the BLE interrupt handler on the flight controller caches the updated value and uses the value multiplied by the scale factor to perform calculations for motor and PID control. The app sends sensor data on a time-based interval which allows the controller to respond to the most recent value selected.</p>
          <h4 id="results">Results</h4>
          <p>I got to work on the code and design of many of the parts below as well: including the EKF  and IMU code.</p>
          <div className={styles.imageContainer}>
            <Image src={chart} alt="chart" width={450}/>
          </div>
          <p>Overall, we built this over a few days, working intensely on debugging and getting our drone to work. It was pretty cool to implement the topics I had learnt in my embedded systems class in a real-world setting. I learned a lot about hardware and sensors as well and got me into thinking about the future of IoT and bluetooth devices.</p>
          <div className={styles.imageContainer}>
            <Image src={drone} alt="drone" width={300}/>
          </div>
          <div className={styles.imageContainer}>
                <caption>Final drone</caption>
            </div>
      </Layout>
    </>
  );
}

