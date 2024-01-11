---
title: 'Human-Computer Interaction: Foundation and Frontiers'
date: '2023-06-12'
---

This course is an introduction to human-computer interaction (HCI). It surveys the major topics in HCI, including: historical perspectives, human information processing, interaction design, user interface software and hardware, and the impact of computing and technology on society. The course emphasizes design and evaluation of user interfaces.

### Lecture 1: Ubiquitous and Tangible Computing

- **memex** = first idea of a "desktop"
- things that have been accurately predicted/have not changed much from their original inception
    - "encyclopedias .. with mesh of associative trails" => wikipedia
    - XEROX Alto from XEROX PARC => Modern MacOS desktop
    - more: computer mouse, QR codes (AR markers), swipe keyboards, AI-powered screen reader, filtering recommendation systems, fitness trackers, multi-touch interfaces
- tangible user interfaces/haptic feedback => adjusts to the 3D world around is
- **ubiquitous computing** = computers vanish into the background rather than focus our attention on a single box, this requires them to be:
    - **context-aware:** collect information about the user's environment and use it customize their computing experience
    - reactive: example is a wide-screen projector that needs to be able to map the room's surface
    - programmable, ambient, and embedded
- ubiquitous computing: tabs (like watches), pads (like iPads), and boards
- tangible computing: directly-manipulable physical interfaces to data and comparison

### Lecture 2: Input and Output

- inputs over the years: on-body input, voice input, gesture, environmental audio, muscle
- step 1: sensor input is: audio, video, accelerometers, vibration sensors, EM waves
- step 2: featurization: transform sensor input into a form that is informative for an ML algorithm
- step 3: train a classifier, operate under power and speed constraints
- midas touch problem: always listening means false positives can occur
- new ideas of displays for ubicomp: novel displays (textiles, body, tactiles, drones), augmented reality (lay virtual information onto the real world, projector-based, head-mounted displays), virtual reality (head-worn that occludes surrounding world and embeds you in a fully digital world)
- novel displays are embedded in objects and the environment
- tradeoffs:
    - novel displays require special hardware and devices, so difficult to generalize, but flexible design space
    - AR extends local environment with new behaviors and objects, but seams can show between physical and digital
    - VR: fully immersive, but illusion breaks when you run into your couch
- HCI combines social sciences, engineering, and design

#### The Computer for the 21st Century - Mark Weiser, 1991

- the most profound technologies are the ones that disappear
- first information technology can be thought of as writing
- personal computer "focuses our attention on just a simple box"
- virtual reality is only a map, not a territory
- tabs, pads, and boards instead - hundreds of these in a room, used unconsciously
- "no revolution in artificial intelligence is needed"
- "Most important, ubiquitous computers will help overcome the problem of information overload.There is more information available at our fingertips during a walk in the woods than in any computer system,yet people find a walk among trees relaxing and computers frustrating.Machines that fit the human environment,instead of forcing humans to enter theirs,will make using a computer as refreshing as taking a walk in the woods."
    - Weiser describes the fact that we shouldn't be subject to a single area - that our ideas should move along with us in the form of pads and tabs. However, since he also wants it to blend into the environment, Weiser proposes computers everywhere so that they can interact with you without you noticing that there are computers.

#### Tangible Bits - Hiroshi Ishii and Brygg Ulmer, 1997

- personal computers make us lose the grasping and manipulation that is so embued in human history - so we need to create haptic tech
- goal: rejoin richness of physical world in HCI
- bits and atoms: divide between our physical environment and cyberspace, constrained to just the GUI
- "lack of diversity of input/output media" + "bias towards graphical output at the expense of input from the real world"
- GUIs: WYSIWYG and seeing and pointing
- tangible user interface (TUI): the world becomes the interface
    - interactive surfaces: transform surfaces in architectural space into active interface between physical and virtual worlds
    - coupling of bits and atoms: couple everyday graspable objects with the digital information that pertains to them
    - ambient media: use sound, light, airflow, water to create background interfaces with cyberspace at the periphery of human perception
- augmented reality as visual overlay but with graspable objects
- examples of existing
    - ClearBoard - changing a "wall" into a board and back and forth
    - 3D neurosurgical visualization - users are given physical props as a mechanism for manipulating 3D models on a screen
    - Marble Answering Machine - when you get a phone call you take the marble and drop it to play the message, placing into a telephone would call the person
    - LiveWire - plastic cord that causes twitch when data passes through Ethernet network
- metaDESK - horizontal back-projected graphical surface, have to actually move things around to see them move around in real-time, example rotating a 3D dome, rotates the map as well
- ambientROOM - uses ambient media as a means for communicating information
- digital shadows - illuminated objects cast shadows reflecting their physical substance
- ex of bits and atoms: abacus
- What tradeoffs does Tangible Bits make through its strict adherence to input/output colocation?
    - The tradeoffs include more limited functionality, constrained ability to be able to produce results as fast as GUI since it factors in environment as input as well.

### Lecture 3: Activity, Health, and Behavior

- traditional frame: focused on improving usability for well-defined tasks, especially tasks of short duration and focused attention
- app-ification is limiting and against ubicomp
- can we create technologies that track public health? in a clinic for example
- can we solve problems without using commodity smartphones
- can we detect __ using a SINGLE point of sensing, avoids instrumenting people, use ML, leverage existing infrastructure
    - goal: avoid needing to instrument people in any way
    - use machine learning classification pipeline
    - leverage infrastructure already available in the environment aka infrastructure-mediated sensing
        - ex: wifi doppler shifts, pressure changes in HVAC system
- ideas: physical health, mental health, elder care, neurodiversity, etc
- tradeoffs: privacy, autonomy, consent, ethics
- identify a long-lived activity or resilient societal challenge - ask whether computing can help produce the data or intervention necessary to move the needle in a meaningful way - answer may be no!

#### BeWell - Lane, Mohammod, Lin, Yang, Lu, Ali, Doryab, Berke, Choudhury, Campbell, 2012

- envision a new class of "personal wellbeing applications" that are capable of monitoring multiple dimensions of human behavior, encompassing physical, mental, and social dimensions of wellbeing
- what enables this vision are recent advances in smartphones: accelerometer, digital compass, gyroscope, GPS, microphone, camera
- can infer a range of behaviors on the phone in real-time, allowing users to receive feedback in response to everyday life choices
- current shortcomings: only focused on 1 health dimension - diet, exercise, stress, etc and/or require manual input (tedious)
- bewell infers behavioral patterns using sensors embedded in smartphones
- using existing guidelines provided by healthcare professionals, estimate multi-dimensional wellbeing scores that capture the relationship between behavioral patterns and health outcomes
- ex: uses gaussian function to calculate sleep score
- sensing daemon: network interface, GUI, storage, sleep model, ML library (classification models, feature extraction), sensors
- cloud infrastructure: restful interface for wellbeing model that connects to MySQL DB

#### Designing Ambient Narrative-Based Interfaces to Reflect and Motivate Physical Activity - Murnane, Jiang, Kong, Park, Shi, Soohoo, Vink, Xia, Xin, Yang-Sammataro, Young, Zhi, Moya, Landay, 2020

- current technologies for active lifestyles are quantitative data representations (charts, graphs, etc)
- goal is to find alternative, qualitative schemes for encoding personal information
- specifically, through comic-like stories delivered through ambient smartphone wallpapers
- central idea: narratology aka using narrative and storytelling to promote healthy behavior
- ambiently displaying as wallpaper means people can just glance at them
- supports both automated and manual logging, activity inference using Google Fit API
- multi-chapter graphic narratives that have a central character
- indicating and celebrating milestones, visually encoding activity
- research included user testing and study groups on factors such as interface glances, narrative engagement, psychological attitudes and shifts
- appreciated that the feedback was imagery-based, difference in aesthetic preferences, intelligent notification delivery routines, historical data views are important
