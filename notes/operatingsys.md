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
    acquire(&lock);       // no one is else is checking current state of policy 
    while ((AW + WW) > 0) {
        WR++;
        cond_wait(&okToRead, &lock);
        WR--;
    }
    AR++;
    release(&lock);
    // perform actual read-only access 
    AccessDatabase(ReadOnly);
    // now, check out of system 
    acquire(&lock);
    AR--;
    if (AR == 0 && WW > 0) {
        cond_signal(&okToWrite);
    }
}
```

### Writer Code

```c
Writer() {
    // first check self into system 
    acquire(&lock);
    while((AW + AR) > 0) {
        WW++;
        cond_wait(&okToWrite, &lock);
        WW--;
    }
    AW++;
    release(&lock);
    // perform actual read/write access
    AccessDatabase(ReadWrite);
    // now, check out of the system 
    acquire(&lock);
    AW--;
    if (WW > 0) {
        cond_signal(&okToWrite);
    } else if (WR > 0) {
        cond_broadcast(&okToRead);
    }
    release(&lock);
}
``` 

### Sample Simulation 

## Scheduling 

`thread_yield` - sets current thread back to READY, pushes it back on READY list, call schedule to select next thread to run upon iret 

`schedule` - selects next thread to run, calls switch_threads to change regs to point to stack for thread to resume, sets its status to RUNNING, if user thread (activate the process), returns back to intr_handler 

We want to prevent **==starvation==**, where a thread fails to make progress for an indefinite period of time, the scheduling policy will never run because the threads are waiting on each other or spinning.

Assume: 1 program per user, one thread per program, programs are independent 

Goals:
- minimize response time (minimize elapsed time to do an operation/job, response time is what the user sees - keystroke, compiling a program, etc)
- maximize throughput (maximize operations per second) 
- not identical to throughput! (minimizing response time will lead to more context switching than if you only maximized throughput) 
- minimize overhead (for example, context switching) 
- efficient use of resources (CPU, disk, memory) 
- fairness (share CPU among users in some equitable way) - we get a better average response time if we make system less fair 

### First Come First Serve (FCFS)

same as FIFO/run until done



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


