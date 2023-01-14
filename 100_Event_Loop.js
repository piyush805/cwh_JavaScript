/*
Event Loop explains how JS works under the hood, its asynchronous behaviour
It has call stack, eventloop, callback queue and other APIs
JS is single threaded, non blocking, asynchornous, concurrent language
V8 is JS rutime which has call stack and heap
Heap for memory allocation and stack for execution context
DOM, setTimeout, XML, httprequest dont exist in V8 source code
*/

//Callstack 

/*  ASYNC CALLBACK

-   for non blocking behaviour 
-   runtime can only do one thing at a time 
-   Browser gives us other things which work along with runtime like Web API
-   In node these are avilable as C++ APIs 
*/

/*  TASK QUEUE

-   except for one executing thing rest are queued waiting to be executed
-   runtime can only do one thing at a time 
-   When we run setTimeout, webapi will run a timer and push the function provided to setTimeout to task queue once the timer ends
-   Task will be pushed to stack where they can be executed 
*/

/*  EVENT LOOP

-   JS has a runtime model based on event loop, which is reponsible for executing the code, colleciton and processing events and executing queued sub tasks
-   Event loop pushes the task queue to the call stack
-   setTimeout (func1, 0) can be used to defer a function until all the pending task (so far) have been executed 
-   We can see how these things work in action by visiting
*/


