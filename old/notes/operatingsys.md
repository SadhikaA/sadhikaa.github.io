---
title: Operating Systems 
---

# 💾 Operating Systems

Operating systems provide abstractions to applications, translates from hardware interface to application interface. OS provides running program with its own process. It also manages sharing of resources among multiple applications. 

OS plays many roles: ==referee== (manage protection, isolation, sharing of resources), ==illusionist== (provide easy to use, clean abstractions of physical resources), ==glue== (common services - storage, window system, networking, sharing, authorization)

## Kernels 

**==Kernels==** have PCBs, TCBs, device drivers, and kernel stacks. All of these cannot be accessed by the user.

The **==kernel==** handles process management, terminal drivers, disk and tape drivers, CPU scheduling, page replacement, demand paging, virtual memory, file system management, device management, system calls, and security and protection. 

In **==x86 architecture==**, contains the stack pointer as `ESP` and the instruction pointer as `EIP`.

### Dual Mode Operation 

`0` = user mode / `3` = kernel mode

**User mode** calls **kernel mode** through a **syscall** (sends a syscall ID), **trap/exception** (synchronous event, segfault, divide by zero), **interrupt** (asynchronous timer, I/O device, independent of user process).

We need to save processor state in the thread control block when we make a context switch because the kernel may overwrite it. 

User has access to the GUIs, applications, CLIs, resource management. User can't access virtual addresses marked as kernel only in the page table, change the page table base pointer register, or enable/disable interrupts.

Syscall steps:
- library puts syscall number into register
- executes special trap instruction that atomically changes to kernel mode
- switches to kernel stack 
- saves user registers
- execustes syscall handler looked up from interrupt vector table (holds pointers and addresses to interrupt handlers, happens when we get an interrupt to kernel handler)

CPU switch from process A to process B: (all happens by the kernel)
- A is executing and then we got an interrupt/system call 
- we save the state into A's PCB
- reload state from B's PCB 
- execute B, then we get another interrupt/syscall
- save state into B's PCB
- reload state from A's PCB 
- execute A 

How do have safe kernel mode transfers? Use a separate kernel stack, locate arguments in registers/user stack, copy arguments from user memory to kernel memory, validate arguments, and then copy results back to user memory.

How do we have safe interrupts? Use an interrupt vector (limited number of entry points into the kernel). Use kernel interrupt stack (handler works regardless of state of user code). There is an atomic transfer of control and transparent restartable execution (user does not know that the interrupt has occurred).

### Disabling Interrupts 

- Used to temporarily prevent the CPU from responding to interrupts
- CPU will continue executing the current program without interruption, ignoring external events
- Interrupt requests that occur will be queued after
- Used during critical sections where interrupt handling could cause issues/disrupt the flow of execution (ensure the integrity of shared data structures accessed by multiple threads or interrupt handlers)
- Make sure to re-enable interrupts 

### System Calls

`exit` - terminates a process
`exec` - changes the program being run by the current process
`fork` - copies the current process
`wait` - waits for process to finish 
`kill` - sends a signal to another process (SIGINT is CtrlC, SIGKILL, SIGSTOP)
`sigaction` - takes in signal number, a pointer to a struct that represents the behavior of a signal handler, pointer to struct where previous behavior will be stored 

### Exec syscall

**==Exec==** will rewrite the entire image of the program and erase everything that was going to happen after.

- Operating System loads file into current process's address space
- Sets up `main` as entry point
- Closes any open file descriptors
- Memory space is replaced with memory of new program 
- New program starts from its entry point 

## Address Spaces 

An **==address space==** is a set of memory addresses that are accessible to the program to read/write to. The virtual address space is distinct from memory space of physical machine.

How does **address space translation** work? Translator translates virtual address into physical memory address. Hardware translates it using page tables.

32 bit processor means that we have $2^{32}$ addresses. 

`stack` - grows downward from 0xFFFF, region of memory used for automatic storage of local vars, function arguments, return addresses, function call info (each thread has its own and deallocated after function calls end)
`heap` - grows upward after stack, dynamically allocated region (malloc, calloc, realloc, free)
`static data` - initialized static data and global variables used by the program, also read only data (constants and string literals), initialized static data and global variables used by the program, also read only data (constants and string literals), initialized static arrays and structures 
`BSS (block started by symbol) segment` - uninitialized static data and global vars declared without explicit values, set to 0/NULL at the beginning 
`text/code` - executable code of the program 

### Base and Bound

Translates a program address to values that are in that process's memory space only (only access mmory between base and bound), but not used anymore because it limits the size of the address space, also if the location moves, then we have to redo things.

Why is B&B bad?
- wasteful becaues we have to dedicate physical memory for potential future usage
- fragmentation: kernel has to fit whole processes into this memory block 
- hard to share data between processes and between process and kernel (better is using page table translation)

## Processes and Threads

A **==process==** is an instance of a running program (contains PCB, threads, address space, files, and sockets)

There's a tradeoff with processes: communication is easier **within** processes, and harder **between** processes.

The ==process control block (PCB)== is stored in kernel memory (is how the kernel represents a single process). It holds the status, register state, process ID, etc.

==Multiprocessing== means we have multiple CPUs/cores.
==Multiprogramming== means we have multiple jobs/processes interleaving.
==Multithreading== is when we have multiple threads/processes.

### Threads

**==Threads==** share code, data, files, and heap. Threads also have their own unique thread control block, stack pointer, stack, and registers.

`running` = running (current registers hold the context of the thread)
`ready` = eligible to run, not currently reading
`blocked` = eligible to run 

If a thread is waiting for I/O to finish, the OS marks it as blocked. Once I/O finishes, OS marks it as ready. 

Threads allow us to have concurrency in our programs.

**==Concurrency==** means that we are executing multiple tasks or processes at the same time, interleaving occurs. !(overlapping execution)!

**==Parallelism==** means that we are executing multiple tasks/processes at the same time but on multiple cores, relies on multiplicity to do many things at the same itme. !(simulataneous execution)! 

Parallelism also allows us to take advantage of hardware. Concurrency allows us to easily handle I/O and other simultaneous events. Two threads on a single core system execute concurrently, but not in parallel. Parallelism implies concurrency, but concurrency does not equal parallel.

A **==multithreaded==** process means that there are multiple threads running concurrently in the same process. Each PCB (process control block) in a process has its own per thread state as well. 
 
**==Hyperthreading==** allows multiple threads to interleave instructions in a single CPU. Each thread has it's own set of registers and makes progress independently of other threads. Therefore, they operating both concurrently and parallel. 

The idea behind **==synchronization==** is that we want a second thread to have updated information from a previous thread, so how do we get the data between threads to be synchronized.

We have to be wary of **==non-determinism==**, if we have multiple threads acting on a global variable or a variable on the heap, we need to be careful of the order in which threads are running. For example, without `pthread_join` and `exit`, the main thread can exit before completion of another thread.

### Comparing Processes and Threads

- processes are created using `fork()` and threads are created with `pthread_create()` 
- processes have distinct page tables, threads have the same page table
- processes have distinct registers and instruction pointers 
- threads have distinct registers and instruction pointers 
- we do synchronization for processes using `wait()` and `waitpid()`, we do synchronization for threads using `pthread_join()` and semaphores and locks 
- processes have **higher overhead** than threads 
- processes have **greater protection** than threads 

**`Heaps and Static Variables`**
- for **!processes!**, both child and parent processes have their !own! heap, so they each have separate data in them 
- for **!threads!**, we need to be careful about what we are passing in to our helper function and where the variable was declared, because threads !share! the heap, so they can possibly overwrite each other 

**`Stacks`**
- for **!processes!**, processes that are related share copies of stacks from when they were forked, but their changes are specific to themselves --> they also cannot access each other's stacks 
- for **!threads!**, threads don't share the same stack but can access each other's stacks which means that they can modify other stacks 
- !how can we access other stacks?! if we pass in the address of a variable on the stack to a helper function and modify it in our `pthread_create` helper, and exit ad join correctly, it will modify the same address

**`File Descriptors`**
- for **!processes!**, processes have separate file descriptors, closing one doesn't close anothers, each process has its own pointer to the file descriptor, edits are shared
- for **!threads!**, file descriptors are shared, if one thread closes it the other thread cannot access it 

### Forking 

**`pid_t fork`** 
- forking a thread creates a parent and child process, the OS starts both of them
- fork returns pid of the current running process
- `if pid > 0`, then we are running in the parent process 
- `if pid = 0`, then we are running in the child process 
- `if pid < 0`, error
- when we fork, the entire virtual address and memory of the parent gets copied over (file descriptors and all variables)
- how do we create child process' heap'? **==Copy on write==** is where both processes use the same page table until once process changes something in order to save memory 
- we use `wait(&status)` to wait for the return value of the child thread
- to get the current PID of the current running process, `getpid()` 
- all processes have a common ancestor and can be traced back to the init process that started it

## Input/Ouput 

**==Overhead==** describes the additional resources/time required to perform a task beyond what is strictly necessary. Processes have a !higher! overhead than threads, but offer more protection.

Low level file API has lower overhead because we are closer to resources, have direct access to hardware and don't need to copy files. 

**Layer of I/O**

- High Level (streams, buffered I/O)
- Low Level (file descriptors: open(), read(), write(), close(),....)
- Open File descriptions 
- File System (files/directories/indexes)
- I/O Driver (commands and data transfers)
- Hardware (disks, flash, controllers, DMA)

### High Level File API

High level file API operates on **streams**, unformatted sequence of bytes (text/data) with a position. It is essential to check if opening a file returns NULL.

`FILE *fopen(const char *filename, const char *mode)` 
`int fclose(FILE *fp)` 

## Mutual Exclusion 

==Mutex (mutual exclusion)== - how do we make sure that two threads aren't accessing the same memory 

### Simulatenous Multithreading 

It will swap them for you 
Similar to having 2 cores but not as fast 

### Critical Section 

Code exactly one thread can execute at once. 

### Locks 

An object only one thread can hold at a time.

## Monitors 

**==Monitors==** are defined as a lock and zero or more condition variables for managing concurrent access to shared data.

Monitors contain **==condition variables==** which allow us to sleep inside a critical section by atomically releasing the lock at the time that we go to sleep. Unlike semaphores, we can't wait inside a critical selction. 

`cond_wait(&lock)` - atomically releases a lock and goes to sleep, will reacquire lock again before returning 
`cond_signal()` - wake up one waiter, if any 
`cond_broadcast()` - wake up all waiters 

We must hold the lock when doing condition variable operations.

```c
// Bounded Buffer example of Condition Variables 
lock buf_lock = initially unlocked
condition producer_CV = initially empty
condition consumer_CV = initially empty

Producer(item) {
    acquire(&buf_lock);
    while (buffer full) { cond_wait(&producer_CV, &buf_lock); }
    enqueue(item);
    cond_signal(&consumer_CV);
    release(&buf_lock);
}

Consumer() {
    acquire(&buf_lock);
    while (buffer empty) { cond_wait(&consumer_CV, &buf_lock); }
    item = dequeue();
    cond_signal(&producer_CV);
    release(&buf_lock);
    return item;
}
```

Thread will sleep, not !busywait!, so this is more useful.

### Basic Structure of Mesa Monitor Pattern 

- monitors represent the synchronization logic of the program (wait if necesary, signal when change something so that any waiting threads can proceed)

```c
/* check and/or update state variables, wait if necessary */
lock 
while (need to wait) {
    condvar.wait()
}
unlock 

// doing something so no need to wait 

/* check and/or update state variables */
lock 
condvar.signal();
unlock 
```

### Monitors from Semaphores

Condition variables have no history, but sempahores have history. 
- If a thread `signal`s and no one is waiting? Condition var/monitor does nothing. If a thread later waits, then the thread waits. For a semaphores, if the thread V's and no one is waiting we increment the semaphore. When a thread later does P, it decrements and then continues.

```c
Wait (Lock *thelock, Semaphore *thesame) {
    release(thelock);   
    // need to add ^ because cond_wait releases the lock 
    semaP(thesema);
    acquire(thelock);
}
Signal (Semaphore *thesema) {
    if semaphore queue is not empty:
        semaV(thesema);
}
```

## Pintos 

### Pintos Lists 

```c
struct list_elem* list_begin(struct list* lst);
struct list_elem* list_end(struct list* lst);
struct list_elem* list_next(struct list_elem* elem);

STRUCT* list_entry(LIST_ELEM, STRUCT, MEMBER);
```

## Readers & Writers 

Consider a shared database:
- readers never modify the database
- writers read and modify the database 

Rules:
- readers can't read while someone modifies 
- only one writer at a time
- can have multiple readers at the same time
- writers cannot be there when readers are reading

Correctness Constraints: 
- readers can access database when no writers 
- writers can access database when no readers or writers 
- only one thread manipulates state variables at a time 

Based on this, we want to have a solution that looks something like this:

```c
Reader()
    Wait until no writers
    Access database
    Check out - wake up a waiting writer
Writer()
    Wait until no active readers/writers 
    Access database
    Check out - wake up waiting readers or writer 
```

State variables (protected by lock):
`int AR` - number of active readers (initially 0) 
`int WR` - number of waiting readers (initially 0) 
`int AW` - number of active writers (initially 0) 
`int WW` - number of waiting writers (initially 0) 
`condition var okToRead = null    // for readers`
`condition var okToWrite = null    // for writers`

### Reader Code

```c
Reader() {
    // first check self into system 
    acquire(&lock);       // acquire lock so only one thread/R/W checking 
    while ((AW + WW) > 0) {    // is it ok to read? any active or waiting writers 
        WR++;                  // no, there are writers
        cond_wait(&okToRead, &lock);    // sleep on our condition var
        WR--;                  // no longer waiting 
    }
    AR++;       // we're an active reader now
    release(&lock);   // release lock for other readers + writers to be able to check 
    // lock doesn't protect database, it protects reader + writer checks 
    // access the database as a reader 
    AccessDatabase(ReadOnly); 
    // now, check out of system 
    acquire(&lock);       
    AR--;         // no longer an active reader 
    if (AR == 0 && WW > 0) {     // if there are no other active readers
        cond_signal(&okToWrite);    // wake up one writer 
    }
    release(&lock);
}
```

### Writer Code

```c
Writer() {
    // first check self into system 
    acquire(&lock);
    while((AW + AR) > 0) {     // is it safe to write?
        WW++;            // we're a waiting writer 
        cond_wait(&okToWrite, &lock);      // if there's an active writer or reader, go to sleep
        WW--;        // no longer waiting
    }
    AW++;       // we're now an active writer 
    release(&lock);      // release for others 
    // write to the database 
    AccessDatabase(ReadWrite);
    // now, check out of the system 
    acquire(&lock);     
    AW--;               // no longer active 
    // give writers priority over readers (WW before WR) because they can only be done one at a time and also because readers could prevent writers from ever going forward
    if (WW > 0) {            // is there a waiting writer 
        cond_signal(&okToWrite);      // signal them 
    } else if (WR > 0) {       // if there's a waiting reader 
        cond_broadcast(&okToRead);     // wake up all readers 
        // this is a broadcast instead of signal because we want to wake up ALL readers
        // this is fine because only one reader can acquire the lock so they won't all run
    }
    release(&lock);
}
``` 

### Sample Simulation of R+W

Consider this sequence of operators (order in which they want to access the database): `R1`, `R2`, `W1`, `R3`. Initially, `AR=0`, `WR=0`, `AW=0`, and `WW=0`.

Optimal setup: reader 1 and 2 should read at the same time, then let writer 1 write, then reader 3.

`AR = 0, WR = 0, AW = 0, WW = 0`

```c
// R1 comes first (no waiting threads)
Changes: AR++, accesses the database and releases lock 
AR = 1, WR = 0, AW = 0, WW = 0

// R2 comes along (R1 is accessing the database)
Changes: AR++, accesses the database, releases lock 
AR = 2, WR = 0, AW = 0, WW = 0 

// W1 comes along (R1 and R2 accessing database)
Changes: writer acquires SAME lock, since AR > 0, W1 cannot start because of the readers
Writer will wait on the condition variable and until cond_signal(&okToWrite)
AR = 2, WR = 0, AW = 0, WW = 1

// R3 comes along (R1 and R2 accessing, W1 waiting)
Changes: WW > 0 so WR++ and wait on the okToRead var
AR = 2, WR = 1, AW = 0, WW = 1

// suppose R2 finished (R1 accessing database, W1 and R3 waiting)
Changes: AR--, acquires lock to do the check, no signal okToWrite bc AR doesn't equal 0
AR = 1, WR = 1, AW = 0, WW = 1

// R1 finishes (W1 and R3 waiting)
Changes: AR--, singal the okToWrite because AR = 0, after all readers done writer W1 is signaled
AR = 0, WR = 1, AW = 0, WW = 1

// W1 receives signal (R3 still waiting)
Changes: WW--, AW++, wakes up its thread, acquires lock, accesses database
AR = 0, WR = 1, AW = 1, WW = 0

// W1 finishes (R3 still waiting)
Changes: AW--, WW is not > 0 (no additional waiting writers), but there is a waiting reader so cond_broadcast
AR = 0, WR = 1, AW = 0, WW = 0

// R3 receives signal 
Changes: WR--, AR++, access database, no one to signal so release lock and database is idle
AR = 1, WR = 0, AW = 0, WW = 0

// Final order: R1, R2, W1, R3
```

Can readers starve? Potentially because writers could keep coming in and readers never get to read based on this: `while ((AW + WW) > 0)`. How do we fix this? One idea: use some sort of queue 

What if we erase the condition check (`if (AR = 0 && WW > 0)`) in Reader exit? It won't break the code because the writer will check anyways so it's ok to signal the `okToWrite` all the time.

What if we turn `signal()` into `broadcast()`? We wake up all sleeping threads but only one will actually act so this is okay.

What if we use only one condition variable (`okContinue`) instead of two separate ones? Both readers AND writers will sleep on this variable. But we would need to use `broadcast()` instead of `signal()`. 

With this setup, writers !could! block readers from entering. `cond_wait` implicitly releases the lock.

## Scheduling 

Scheduling means deciding which threads are given access to resources from moment to moment. I/O bursts will be allowed to be completed without scheduling disrupting this, but CPU bursts will be where we may interfere with scheduling.

`thread_yield` - sets current thread back to READY, pushes it back on READY list, call schedule to select next thread to run upon iret 

`schedule` - selects next thread to run, calls switch_threads to change regs to point to stack for thread to resume, sets its status to RUNNING, if user thread (activate the process), returns back to intr_handler 

We want to prevent **==starvation==**, where a thread fails to make progress for an indefinite period of time, the scheduling policy will never run because the threads are waiting on each other or spinning.

Assume: 1 program per user, one thread per program, programs are independent 

Goals:
- minimize **==response time==** (elapsed time to do an operation/job, this is what the user sees - keystroke, compiling a program, etc, meet the deadlines imposed by the world)
- maximize **==throughput==** (operations per second) - can be done by either efficiently using resources (CPU, disk, memory) OR minimizing the context switching (overhead) 
- throughput is related to response time, but not identical, minimizing response time leads to more context switching than if you only maximized throughput) 
- fairness (share CPU among users in some equitable way) - we get a better average response time if we make system less fair 

### First Come First Serve (FCFS)

same as FIFO/run until done

The thread keeps the CPU until the thread is done. No interrupts.

```c
If we have 3 processes: P_1, P_2, P_3 with burst times 24, 3, 3.
We run P_1 from 0 to 24, P_2 from 24 to 27, and P_3 from 27 to 30.
// What is the waiting time for each process? 
P_1 had wait of 0, P_2 - 24, P_3 - 27 
Average waiting time: (0 + 24 + 27) / 3 = 17
Average completion time: (24 + 27 + 30) / 3 = 27 
```

This causes the **==convoy effect==** where short processes need to wait for long processes and the queue gets longer.

FCFS is potentially bad for short jobs, depends on submit order.

### Round Robin (RR) 

We add **preemption**. Each process gets a small unit of CPU time (a **quanta**). After the quantum expires, the process is goes back to the end of the ready queue and we pick the next process. If we have $n$ processes and time quantum of $q$, then each process gets $1/n$ of the CPU time in chunks of at most $q$ time units. No process will wait more than $(n-1)q$ time units.

If $q$ is very large, then we end up behaving like FCFS.
If $q$ is small, then we interleave a lot, hyperthreading.
$q$ should be larger than a context switch otherwise we are just context switching.

```c
If we have 4 processes: with burst times 53, 8, 68, 24.
// We still run them in order but only for time quantum (20 for this question).
We run:
    P_1 from 0 to 20
    P_2 from 20 to 28  // didn't need the whole quantum 
    P_3 from 28 to 48, P_4 from 48 to 68, P_1 from 68 to 88
    P_3 from 88 to 108, P_4 from 108 to 112
    P_1 from 112 to 125, P_3 from 125 to 145, P_3 from 145 to 153
// What is the waiting time for each process? 
P_1: (68 - 20) + (112 - 88) = 72
P_2: (20 - 0) = 20
P_3: (28 - 0) + (88 - 48) + (125 - 108) = 85
P_4: (48 - 0) + (108 - 68) = 85
Average waiting time: 66.25
Average completion time: (28 + 112 + 125 + 153) / 4 = 104.5 
```

Overall, round robin is better for short jobs and is more fair. The context switching time will add up for long jobs.

**How do we implement RR in the kernel?**
We use our FIFO ready queue. We use a timer interrupt to send the previous job to the back of the queue.
!How do we choose the time slice?! If it's too big, then the response time suffers. If it's infinite, then we are back to a FIFO queue. If it's too small, then less operations per second (less throughput) happening. 

### Comparing RR and FCFS 

- assuming zero cost switching time, is RR always better than FCFS? average completion time is worse under RR because we're constantly switching
- with RR, we must share cache state and memory between all jobs, but with FSFC we can devote it entirely to one job, therefore the total time for RR is longer even if we have a zero-cost switch
- RR is between the best case and worst case FCFS times, it may not give best result, but it will always be !better than worst FCFS!
- RR moderates and helps short jobs to run with better timeliness because scheduling matters more for short jobs than long jobs
- if all jobs have the same amount of time, then RR and FCFS finish at the same time

### Strict Priority Scheduling

We want higher priority jobs to run in preference to low priority jobs. 
**Issues**: starvation (lower priority jobs don't get to run because of higher priority jobs), deadlock (when a low priority task has a lock needed by the high priority task) 

**==Priority Inversion==**: 
!==`INSERT DESCRIPTION HERE`==!

Strict priority is not fair. **How do we implement fairness?** Give each priority queue some fraction of the CPU (like an express lane). We could increase the priority of the jobs that don't get service.

### Shortest Job First (SJF) 

- run whichever job has the least amount of computation to do (also called shortest time to completion first - STCF)

### Shortest Remaining Time First (SRTF) 

- preemptive version of SJF
- if a job arrives and has shorter time to completion than the remaining time on the current job, immediately preempt CPU

### Comparing SRTF with FCFS

- what if all jobs are the same length? SRTF becomes the same as FCFS, FCFS is best we can do if all jobs are the same length 
- what if jobs have varying length? with SRTF, short jobs will not be stuck behind long ones

### Shortest Run Time First (SRTF) 

- SRTF can leads to starvation if many small jobs 
- Pros: optimal average response time
- Con: unfair, can't predict the future so technically impossible
- How do we predict future? build model of past, if program was random, no point in predicting OR ask the user ahead of time 
- Make SRTF ==adaptive== where we change policy based on past behavior 
- Use an estimator on previous CPU bursts 
- Estimate next time burst such as using exponential averaging 
- Downside: if prediction model costs more than what you're scheduling then you're burning out of time and cycles
- How do we handle simultaneous mix of different types of apps? How to best schedule them? How do we recognize one from the other? 
- Apps that sleep a lot and have short bursts must be interactive apps (they should get high priority).
- Apps that compute a lot should get lower priority since they won't notice intermittent bursts from interactive apps.

### Multi Level Feedback Scheduling 

- Each queue has its own scheduling algorithm (can be RR, FCFS) 
- Also needs to do scheduling between queues like ==fixed priority scheduling== (serve from highest to lowest) but this could cause starvation so we can give each queue an amount of CPU time instead (70% to highest, 20% to next, etc) - approximate SRTF 
- Things at top run with higher priority because they have shorter CPU bursts
- Things at the bottom run for longer CPU time so we give it lower priority  
- A way of approximating SRTF because short things go up, long things go down.
- We give priority to tasks at the top. 
- I/O is always given higher priority (like `printf`) so we could potentially foil these plans by adding that in 
- High priority queues are often considered background tasks. 
- CPU bound ones drop, short running I/O bound 
- User can foil CPU (add in a bunch of I/O or print statements means that we could run much faster)
- How to adjust job's priority: job starts in the highest priority queue, if timeout expires, drop one level, otherwise, push up one level

### Case Study: O(1) Scheduler

- 140 levels of priority (lower = higher)
- 40 for user tasks (set by nice, which gives it lower priority)
- 100 for realtime/kernel
- two seperate priority queues, active and expired 
- real time has higher priority than user tasks 
- lots of heuristics to determine moving around the tasks 

### Multi Core Scheduling

- Not a huge difference from single core scheduling
- helpful to have per-core data structures for scheduling (limit context switching, greater cache coherence) 
- !Affinity scheduling!: once a thread is scheduled on a CPU, OS tries to reschedule it on the same CPU, allows us to reuse cache, predict branches 

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

- ==gang scheduling== for **parallel applications** - when multiple threads work together on a multi core system, try to schedule them together 

## Real Time Scheduling

We don't care about running fast, we want to predict performance. What is the guarenteed worst case? When car slams on brake, car needs to brake deadline needs to be met. 

Each task has a hard real-time that it must meet. Ideally we want to determine this in advance. (EDF and rate monitononic scheduling - RMS)
Soft real time means that we need to attempt to meet deadlines with high probability (constant bandwidth server - CBS)

Tasks have deadlines (D) and known computation times (C).
Task arrives when arrow goes up, occurs for time C, and needs to finish by deadline D.
They are also periodic so C keeps repeating.

### Earliest Deadline First (EDF)

Tasks are **periodic** with period `P` and computation `C` in each period, $\((P_i, C_i\))$ for each task `i`

- Preemptive priority-based dynamic scheduling: each task is assigned a current priority based on how close the absolute deadline is 
- scheduler will always schedule the active task with the closest absolute deadline
- for `n` tasks with computation time `C` and deadline `D`, a feasible schedule exists if sum of ratio $C_i/D_i$ is `<= 1`.

### Starvation 

- starvation means that a thread fails to make progress for an indefinite period of time 
- starvation is not the same as deadlock because starvation can resolve, deadlocks are unresolvable
- causes of starvation: scheduling policy never runs a particular thread on the CPU, threads wait for each other or are spinning in a way that will never be resolved 
- 
