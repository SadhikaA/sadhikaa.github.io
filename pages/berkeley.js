import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';

export default function Berkeley() {
    return (
        <>
            <Head>
                <title>Berkeley Course Reviews</title>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
            </Head>
            <Layout>
                <div className={styles.leftColumn}>
                </div>
                <div className={styles.rightColumn}>
                    <h3>🐻 Berkeley Course Reviews</h3>
                    <hr></hr>
                        <ul>
                            <li><a href="#sem1" className={styles.contentsLink}>Semester 1 - Fall 2021</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#cs61a" className={styles.contentsLink}>CS 61A</a></li>
                                <li><a href="#eecs16a" className={styles.contentsLink}>EECS 16A</a></li>
                                <li><a href="#econ1" className={styles.contentsLink}>ECON 1</a></li>
                                <li><a href="#ugba10" className={styles.contentsLink}>UGBA 10</a></li>
                                <li><a href="#indeng95" className={styles.contentsLink}>INDENG 95</a></li>
                                <li><a href="#eecs" className={styles.contentsLink}>EECS DeCal</a></li>
                            </ul>
                            <li><a href="#sem2" className={styles.contentsLink}>Semester 2 - Spring 2022</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#cs61b" className={styles.contentsLink}>CS 61B</a></li>
                                <li><a href="#eecs16b" className={styles.contentsLink}>EECS 16B</a></li>
                                <li><a href="#sasianr5b" className={styles.contentsLink}>SASIAN R5B</a></li>
                                <li><a href="#stat20" className={styles.contentsLink}>STAT 20</a></li>
                                <li><a href="#iOS" className={styles.contentsLink}>iOS DeCal</a></li>
                            </ul>
                            <li><a href="#sem3" className={styles.contentsLink}>Semester 3 - Fall 2022</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#cs61c" className={styles.contentsLink}>CS 61C</a></li>
                                <li><a href="#cs70" className={styles.contentsLink}>CS 70</a></li>
                                <li><a href="#sanskr100a" className={styles.contentsLink}>SANKSR 100A</a></li>
                            </ul>
                            <li><a href="#sem4" className={styles.contentsLink}>Semester 4 - Spring 2023</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#cs170" className={styles.contentsLink}>CS 170</a></li>
                                <li><a href="#cs188" className={styles.contentsLink}>CS 188</a></li>
                                <li><a href="#eecs127" className={styles.contentsLink}>EECS 127</a></li>
                                <li><a href="#cs195" className={styles.contentsLink}>CS 195</a></li>
                            </ul>
                            <li><a href="#sem5" className={styles.contentsLink}>Semester 5 - Fall 2023</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#eecs149" className={styles.contentsLink}>EECS 149</a></li>
                                <li><a href="#phys7b" className={styles.contentsLink}>PHYS 7B</a></li>
                                <li><a href="#eps109" className={styles.contentsLink}>EPS 109</a></li>
                                <li><a href="#ucbugg" className={styles.contentsLink}>UCBUGG DeCal</a></li>
                            </ul>
                            <li><a href="#sem6" className={styles.contentsLink}>Semester 6 - Spring 2024</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#cs162" className={styles.contentsLink}>CS 162</a></li>
                                <li><a href="#cs184" className={styles.contentsLink}>CS 184</a></li>
                                <li><a href="#engin157ac" className={styles.contentsLink}>ENGIN 157AC</a></li>
                            </ul>
                            <li><a href="#sem7" className={styles.contentsLink}>Semester 7 - Fall 2024</a></li>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><a href="#cs189" className={styles.contentsLink}>CS 189</a></li>
                                <li><a href="#info262" className={styles.contentsLink}>INFO C262</a></li>
                                <li><a href="#philos3" className={styles.contentsLink}>PHILOS 3</a></li>
                                <li><a href="#ugba135" className={styles.contentsLink}>UGBA 135</a></li>
                            </ul>
                        </ul>
                    <hr></hr>
                    <h3 id="sem1">Semester 1 - Fall 2021</h3>
                    <h4 id="cs61a">COMPSCI 61A: Structure and Interpretation of Computer Programs</h4>
                    <p>One of the largest and most discussed courses at Berkeley, CS 61A challenged me as a freshman and I faced a steep learning curve even with prior coding experience. We covered three different programming languages (Python, SQL, Scheme) and multiple topics (abstraction, recursion, higher order functions, basic data structures). The key to the class was actively engaging with the information from labs, discussions, projects, and homeworks which provided varying levels of difficulty to step from one to the other to learn. The projects, much like my future CS classes, were my favorite part of the class. We built an automated typing software, Scheme interpreter, and various games.</p>
                    <h4 id="eecs16a">EECS 16A: Designing Information Systems and Devices I</h4>
                    <p>This class covered lots of content across linear algebra, differential equations, and circuits which made it mostly prep for EECS 16B. The labs were also diverse, and my favorite lab was building a resistive and a capacitive touchscreen.</p>
                    <h4 id="econ1">ECON 1: Introduction to Economics</h4>
                    <p>I was considering double majoring in business or economics so I took both ECON 1 and UGBA 10 this semester. I had a great professor who was able to explain economics concepts as they related to real-world events and made the class a lot more interesting. Since it covered topics from AP Economics, I already knew most of the material and was able to enforce my interests in economics and decided to switch to double majoring in economics after this class.</p>
                    <h4 id="ugba10">UGBA 10: Introduction to Business</h4>
                    <p>This class is split up into 4 modules (accounting, operations, marketing, leadership) with a market research simulation project at the end. It was very interesting to see how the business school was structured very different from engineering classes. The exams are focused on specific facts but the class content covered real-world applications. I decided not to double major in business after taking this class, but I really enjoyed the leadership and operation modules.</p>
                    <h4 id="indeng95">INDENG 95: Newton Lecture Series</h4>
                    <p>Now called ENGIN 183A, this class was about leadership and entrepreneurship. Each week we heard from past Berkeley alumni and entrepreneurs. This class helped me start my journey in entrepreneurship where I heard terms like venture capital, raising funding, and learning about public vs private companies for the very first time. During my semester, most notably, I heard from the CEO of Mozilla and Box.</p>
                    <h4 id="eecs">Going Down the EECS Stack</h4>
                    <p>This was the first DeCal (a class led by Berkeley students) I took where we got a high-level overview a new topic within EECS each week, discussing classes, research opportunities, and subtopics. While taking the class, I thought that the content we covered was extremely broad but in future semesters it was a lot more helpful to look back on the slides and find useful information. The topics we covered were machine learning, video and image processing, computer graphics, security and cryptography, CS theory, computer architecture, devices and analog circuits, controls, embedded systems, robotics, and human computer interaction.</p>
                    <h3 id="sem2">Semester 2 - Spring 2022</h3>
                    <h4 id="cs61b">COMPSCI 61B: Data Structures and Algorithms</h4>
                    <p>I took this class with Professor Hilfinger who retired after this semester so it made the class more special. This class was focused on data structures and algorithms in Java. My favorite part about this class were the projects which were extremely time consuming but rewarding. All of them were hard but 2 stood out: Enigma and Gitlet. Enigma was about recreating the Enigma encryption machine of World War II, debugging this project required computing ciphers by hand. Gitlet was about recreating entire Git commands on a smaller version control system. Together, these projects started my passion for CS history and learning more about Alan Turing, Ada Lovelace, and others and also a greater appreciation for Git.</p>
                    <h4 id="eecs16b">EECS 16B: Designing Information Systems and Devices II</h4>
                    <p>This class felt a lot more coherent than EECS 16A, because we were able to directly apply the ideas that we learnt. The labs were the best part and culminated in a voice controlled robot car, that combined software and hardware by using PCA to determine the commands and with circuits that were build from scratch. My favorite section in the class was learning about control as well as the analog and digital divide and how essential that was to the development of modern technology.</p>
                    <h4 id="sasianr5b">SASIAN R5B: India in the Writer's Eye</h4>
                    <p>This class was taken to fulfill a reading requirement but ended up being very creative and invigorating. The focus was on mysteries in India (both movies and books) and it was inspiring to analyze the works of famous directors like Satyajit Ray, gain a deeper understanding about post-colonial India through the lens of literature, and explore translation and multilingualism in India. As someone who absolutely loves a good mystery, I thoroughly enjoyed this class.</p>
                    <h4 id="stat20">STAT 20: Introduction to Probability and Statistics</h4>
                    <p>Another one of my favorite classes, it was the first that taught me about how to “hack” learning. I attended almost every lecture due to a good study group and a great professor. My professor was the best I’ve had at Berkeley so far with great slides, clear info, and perfect timing. All the labs were in R using RStudio which allowed me to learn a new skill. The data visualizations we created using R showed me the power of data science and I started devising lots of ways I could create experiments and use R to understand them.</p>
                    <h4 id="iOS">iOS DeCal: Intro to iOS Development</h4>
                    <p>This was my first introduction to SwiftUI as I had previously been building iOS apps using UIKit. I found the testing and development interface of XCode initially difficult but I did get better at it with practice. I do wish it was faster to launch the simulator and for a easier XCode interface, such as what Swift Playgrounds looks like. However, I really enjoyed being able to see the direct results of my code constantly while programming and know that I could immediately test it on my device or my computer without wondering how my app would look like.</p>
                    <h3 id="sem3">Semester 3 - Fall 2022</h3>
                    <h4 id="cs61d">COMPSCI 61C: Machine Structures and Computer Architecture</h4>
                    <p>This was one of my favorite classes at Berkeley. True to the EECS paradigm, it delved deep into hardware and software, as we wired a CPU in Logisim, coded in assembly (RISC-V), and low level programming (C). It almost made me want to switch into learning and researching in computer architecture. I had two amazing professors and it was my 2nd most attended class. I even decided to help teach it next semester as well. Some people find the varying topics of the class a little disorienting but I preferred this content over the more mathematical and theoretical side of some of my other classes.</p>
                    <h4 id="cs70">COMPSCI 70: Discrete Mathematics and Probability Theory</h4>
                    <p>Another much discussed class at Berkeley, I found that the discrete math section was enjoyable but the probability part was unrelated to the first part which made the class feel like 2 in 1. Side note: I’ve learned probability now 3 times at Berkeley (STAT 20, CS 70, and CS 188) and I never thought I would use it this much (along with linear algebra). This class is the keystone for all upper division classes, in fact you can’t take any until you take this class. Every class from here on out assumes that you know how to write proofs and have the ever elusive, “mathematical maturity” - something that I believe cannot be taught in one class and one semester, but needs to time to grow and perfect. However, I did find that the ideas in this course were essential to future semesters.</p>
                    <h4 id="sanskr100a">SANSKR 100A: Elementary Sanskrit</h4>
                    <p>I’ve had my eye on this class since committing to Berkeley and it did not disappoint. This class was much harder than expected (5 units!) due to the sheer amount of conjugations, rules, and details that the intricate language of Sanskrit has. I already knew Devanagari (the script), so writing and reading came naturally but quickly understanding and translating was a greater challenge. It made me gain more appreciation for translators and the work of people who keep various languages alive as it shows the true character of human nature in preserving our (possibly) most important achievement: communication.</p>
                    <h3 id="sem4">Semester 4 - Spring 2023</h3>
                    <h4 id="cs170">COMPSCI 170: Efficient Algorithms and Intractable Problems</h4>
                    <p>This class could also be titled Advanced Algorithms as it covered a lot of topics that were beyond the level of most SWE interviews. I enjoyed the teaching style of the professors that I took this class with and I was able to really appreciate the ingenuity of certain algorithms. The format of the class made it less interesting because it was a lot of pattern matching and being able to recognize what algorithms applied to certain problems but I felt like it was a nice combination of CS and math.</p>
                    <h4 id="cs188">COMPSCI 188: Introduction to Artificial Intelligence</h4>
                    <p>Aptly, I took this class the same semester ChatGPT grew in popularity with famed Professor Stuart Russell. This class was very different from what I expected. it fit well with the other classes I was taking, incorporating both algorithms and ML and I really felt like it was a combination of a logic class, a probability class, and a theory class. Overall, although some topics were very niche, I found that I understood some academic papers and research meetings better because I had seen the terms being discussed in this class before. It was one of my 3 favorite classes at Berkeley so far because of I felt like it really bridged together all the CS classes I had previously taken with a little bit of philosophy on the side.</p>
                    <h4 id="eecs127">EECS 127: Optimization Models in Engineering</h4>
                    <p>I like to call this class math for ML. It dives deep into the behind the scenes of gradient descent, optimization, loss functions with more complex linear algebra. This class was graduate level and fast-paced and I attended almost every single lecture but it was still definitely very challenging. However, in reading ML research papers, I now find that I can understand a lot more of the math that I would have previously glossed over.</p>
                    <h4 id="cs195">COMPSCI 195: Social Implications of Computer Technology</h4>
                    <p>This class about the ethical side of CS was very interesting. It was very timely to discuss how technology and capitalism work together at the same semester where the tech industry was going through massive shifts post-COVID. Various case studies also made me consider times when technology isn’t always the solution to every problem or how we could create people-centered technology rather than product-centered technology.</p>
                    <h3 id="sem5">Semester 5 - Fall 2023</h3>
                    <h4 id="eecs149">EECS 149: Introduction to Embedded Systems</h4>
                    <p>Going into this class, I didn't know what to expect. The labs were pretty interesting as we were using a different programming language (Lingua Franca with a C target) to program a Polulu robot and use its sensors, timers, and other features. The emphasis towards finite state machines (FSMs) in this class made me consider how many processes today are/could be represented by state machines. I enjoyed learning more about the intersection of hardware and software covering topics such as wireless sensing, networking, and IoT devices. My final project was my favorite part of the class which involved building a stabilizing drone from scratch.</p>
                    <h4 id="phys7b">PHYS 7B: Electricity and Magnetism</h4>
                    <p>I would say this class was pretty standard E&M physics, right-hand rule etc. It was a nice refreshed to pair along with EECS 149 and I enjoyed learning about the inner workings of many mechanical systems that we take for granted today. I would recommend taking this class before EECS 16A as usually suggested.</p>
                    <h4 id="eps109">EPS 109: Computer Simulations in Jupyter Notebooks</h4>
                    <p>I wasn't sure what to expect in this course but it did not disappoint. Using numpy,  matplotlib, and other math and Python packages, we created intricate simulations through the semester. This included Mandelbrot and Julia sets, partial and ordinary differential equations, as well as orbits, erosion, and random walks. I enjoyed working on my final project which aimed to simulate two neurons growing and connecting over time. Throughout the class, I was impressed with how just a few lines of code could create intricate animations.</p>
                    <h4 id="ucbugg">UCBUGG DeCal: Computer Animation</h4>
                    <p>This class really pushed me to learning a new technology within a semester and working on all parts of the pipeline from modeling to animation to rendering. I learned a lot about Maya and working with 3D technologies and concepts in computer graphics and computer animation. For a DeCal, I spent a lot of time on this class because of the sheer amount of restarting any 3D process requires but I really felt that I was learning by effort. By the end of the class, I had a much greater appreciation for any animated film I watch and finally answered so many questions I had about the animation pipeline. I hope to use the skills from this class to make more animated shorts.</p>
                    <h3 id="sem6">Semester 6 - Spring 2024</h3>
                    <h4 id="cs162">COMPSCI 162: Operating Systems</h4>
                    <p>I really enjoyed this class because it extended the topics of CS 61C and also covered many important ideas in operating systems. 162 removed many of the abstractions I had about memory, networking, file systems, and threads. Throughout the class, we worked on one project which was designing a mini operating system, specifically implementing user program systemw calls, threads, and a file system while handling design from the user and kernel perspective. While the projects were challenging and required thinking critically about the design of our code, they cemented the concepts taught in the class.</p>
                    <h4 id="cs184">COMPSCI 184: Computer Graphics</h4>
                    <p>This class was really well designed, covering many topics across graphics including optics, light, cameras, color, ray tracing, and shading. The projects required understanding existing libraries and code for these abstractions. Rendering and shading are also time consuming tasks which made it more difficult to work on the projects. Overall, I found this course to be distinctive because it explored subjects closely related to computer science yet remained highly relevant to the development of new technologies in computer graphics, an area of ongoing research.</p>
                    <h4 id="engin157ac">ENGIN 157AC: Engineering, Environment & Society</h4>
                    <p>This class covered aspects of engineering and how it influences environment and society, and whether or not it exacerbates existing issues. The class challenged ideas of growth, progress, capitalism, community, and made me reconcile with the impacts of being an engineer and engineering projects.</p>
                    <h3 id="sem7">Semester 7 - Fall 2024</h3>
                    <h4 id="cs189">COMPSCI 189: Machine Learning</h4>
                    <p></p>
                    <h4 id="infoc262">INFO C262: Theory and Practice of Tangible User Interfaces</h4>
                    <p></p>
                    <h4 id="philos3">PHILOS 3: Philosophy of Mind</h4>
                    <p></p>
                    <h4 id="ugba135">UGBA 135: Personal Finance</h4>
                    <p></p>
                </div>
            </Layout>
        </>
    );
}