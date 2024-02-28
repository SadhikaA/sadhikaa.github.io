---
title: Operating Systems 
---

# 💾 Operating Systems

### Simulatenous Multithreading 

It will swap them for you 
Similar to having 2 cores but not as fast 

## Scheduling 

### Shortest Run Time First (SRTF) 

- SRTF leads to starvation. 
- How do we predict future? build model of past, if program was random, no point in predicting 
- Make SRTF ==adaptive== where we change policy based on past behavior 
- Use an estimator on previous CPU bursts 
- Estimate next time burst such as using exponential averaging 
- Downside: if prediction model costs more than what you're scheduling then you're burning out of time and cycles
- How do we handle simultaneous mix of different types of apps? How to best schedule them? How do we recognize one from the other? 
- Apps that sleep a lot and have short bursts must be interactive apps (they should get high priority).
- Apps that compute a lot should get lower priority since they won't notice intermittent bursts from interactive apps.

### Multi Level Feedback Scheduling 

- Each queue has a different scheduling technique. 
- Things at top run with higher priority. 
- A way of approximating SRTF because short things go up, long things go down.
- We give priority to tasks at the top. 
- High priority queues are often considered background tasks. 
- CPU bound ones drop, short running I/O bound 
- User can foil CPU (add in a bunch of I/O or print statements means that we could run much faster)

### Case Study: O(1) Scheduler

- 140 levels of priority (lower = higher)
- 40 for user tasks (set by nice, which gives it lower priority)
- 100 for realtime/kernel
- two seperate priority queues, active and expired 

### Multi Core Scheduling

- Not a huge difference from single core scheduling
- !Affinity scheduling!: once a thread is scheduled on a CPU, OS tries to reschedule it on the same CPU 

Spinlock: doesn't put calling thread to sleep, it just busy waits 
- when do we want this: waiting for limited number of threads 

```c 
int value = 0;     // free 
acquire() {
    while(test&set(&value)) { }  // spin while busy 
}
release() {
    value = 0;   // atomic store 
}
```

## Real Time Scheduling

We don't care about running fast, we want to predict performance. What is the guarenteed worst case? When car slams on brake, car needs to brake deadline needs to be met. 

Each task has a hard real-time that it must meet. Ideally we want to determine this in advance. (EDF and rate monitononic scheduling - RMS)
Soft real time means that we need to attempt to meet deadlines with high probability (constant bandwidth server - CBS)

Tasks have deadlines (D) and known computation times (C).

We only have one core. None of current schedulers help. 

### Earliest Deadline First (EDF)

Tasks are **periodic** with period `P` and computation `C` in each period, $\((P_i, C_i\))$ for each task `i`

Find the one whose deadline expires first.


