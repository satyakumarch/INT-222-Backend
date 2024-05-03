# Backend Interview Questions and Answers related to Node JS ,  Golang/Go , Express JS , MongoDB

> Click :star:   if you like the project. Pull Request are highly appreciated.<br/>
[Node JS](#table-of-contents---node-js)<br/>
[Express JS](#table-of-contents---express-js)<br/>
[MongoDB and Mongoose](#table-of-contents---mongodb-and-mongoose)<br/>
[Database Engineering](#table-of-contents---database-engineering)<br/>
[Golang](#table-of-contents---golang)<br/>


### Table of Contents - Node JS

| No. | Questions |
| --- | --------- |
|   | **Node JS** |
| 1 | [What is NodeJS?](#what-is-nodejs)|                                                                                                    
| 2 | [How can you avoid callback hells?](#how-can-you-avoid-callback-hells)|                         
| 3 | [When are background or worker processes useful?](#when-are-background-or-worker-processes-useful)|        
| 4 | [Why is NodeJS Single threaded?](#why-is-nodejs-single-threaded)|                                                                          
| 5 | [Name the types of API functions in Node?](#name-the-types-of-api-functions-in-node)|                                                          
| 6 | [Explain chaining in Nodejs?](#explain-chaining-in-nodejs)|                                                                                
| 7 | [What are streams in Nodejs Explain the different types of streams present in Nodejs?](#what-are-streams-in-nodejs-explain-the-different-types-of-streams-present-in-nodejs) |
| 8 | [What is package json?](#what-is-package-json)|                                                                                                       | | 9 | [Explain the purpose of module exports?](#explain-the-purpose-of-module-exports)|                                                           
| 10| [List down the major security implementations within Node.js?](#list-down-the-major-security-implementations-within-nodejs)|         
| 11| [Explain the concept of URL module?](#explain-the-concept-of-url-module)|                                        
| 12| [Explain the concept of middleware in Nodejs?](#explain-the-concept-of-middleware-in-nodejs)|                                            
| 13| [Explain libuv?](#explain-libuv)|
| 14| [List down the two arguments that async queue takes as input?](#list-down-the-two-arguments-that-async-queue-takes-as-input) |
| 15| [Differentiate between spawn and fork methods in Nodejs?](#differentiate-between-spawn-and-fork-methods-in-nodejs) |
| 16| [Explain the purpose of ExpressJS package?](#explain-the-purpose-of-expressjs-package) |
| 17| [Explain the usage of a buffer class in Nodejs?](#explain-the-usage-of-a-buffer-class-in-nodejs) |
| 18| [How does Nodejs handle the child threads?](#how-does-nodejs-handle-the-child-threads) |
| 19| [Explain stream in Nodejs along with its various types?](#explain-stream-in-nodejs-along-with-its-various-types) |
| 20| [Describe the exit codes of Nodejs?](#describe-the-exit-codes-of-nodejs) |
| 21| [Is cryptography supported in Nodejs?](#is-cryptography-supported-in-nodejs) |
| 22| [Explain the reason as to why Express app and server folder must be kept separate?](#explain-the-reason-as-to-why-express-app-and-server-folder-must-be-kept-separate) |
| 23| [What is the role of asset module in nodejs?](#what-is-the-role-of-asset-module-in-nodejs) |
| 24| [What is the role of async_hooks module in nodejs?](#what-is-the-role-of-async_hooks-module-in-nodejs) |
| 25| [What are buffer objects in nodejs?](#what-are-buffer-objects-in-nodejs) |
| 26| [What are the different ways of implementing Addons in NodeJS?](#what-are-the-different-ways-of-implementing-addons-in-nodejs) |
| 27| [How can we spawn the child process asynchronously without blocking the Nodejs event loop?](#how-can-we-spawn-the-child-process-asynchronously-without-blocking-the-nodejs-event-loop) |
| 28| [How can we take advantage of multi-core system in Nodejs as nodejs works on single thread?](#how-can-we-take-advantage-of-multi-core-system-in-nodejs-as-nodejs-works-on-single-thread) |
| 29| [What is the datatype of console?](#what-is-the-datatype-of-console) |
| 30| [Which are the different console methods available?](#which-are-the-different-console-methods-available) |
| 31| [Can node js perform cryptographic functions?](#can-node-js-perform-cryptographic-functions) |
| 32| [How can we read or write files in node js?](#how-can-we-read-or-write-files-in-node-js) |
| 33| [Which are the global objects in Node JS?](#which-are-the-global-objects-in-node-js) |
| 34| [How can we perform asynchronous network API in Node JS?](#how-can-we-perform-asynchronous-network-api-in-node-js) |
| 35| [What are the utilities of OS module in NodeJS?](#what-are-the-utilities-of-os-module-in-nodejs) |
| 36| [Which are the areas where it is suitable to use NodeJS?](#which-are-the-areas-where-it-is-suitable-to-use-nodejs) |
| 37| [Which are the areas where it is not suitable to use NodeJS?](#which-are-the-areas-where-it-is-not-suitable-to-use-nodejs) |
| 38| [What Are The Key Features Of NodeJs?](#what-are-the-key-features-of-nodejs) |
| 39| [Explain REPL In NodeJs?](#explain-repl-in-nodejs) |
| 40| [Can you write CRUD operations in Node js without using frameworks?](#can-you-write-crud-operations-in-node-js-without-using-frameworks) |
| 41| [Can You Create HTTP Server In Nodejs Explain The Code Used For It?](#can-you-create-http-server-in-nodejs-explain-the-code-used-for-it) |
| 42| [What Is The Difference Between Nodejs AJAX And JQuery?](#what-is-the-difference-between-nodejs-ajax-and-jquery) |
| 43| [What Is EventEmitter In NodeJs? ](#what-is-eventemitter-in-nodejs) |
| 44| [What Is A Child_process Module In NodeJs? ](#what-is-a-child_process-module-in-nodejs) |



## Node Js

1. ### What is NodeJS?

   Node.js is an open-source, cross-platform, **JavaScript runtime environment that executes JavaScript code outside of a browser**. Node JS was created by [Ryan Dahl](https://github.com/ry), Ryan Dahl is a software engineer and the original developer of the Node.js JavaScript runtime.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

2. ### How can you avoid callback hells?

   There are lots of ways to solve the issue of callback hells: <br /> 1.modularization: break callbacks into independent functions, <br /> 2.use a control flow library, like async. <br /> 3.use generators with Promises, <br /> 4.use async/await (note that it is only available in the latest v7 release and not in the LTS version

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

3. ### When are background or worker processes useful?

   Worker processes are extremely useful if you'd like to do data processing in the background, like sending out emails or processing images.
   <br/>
   There are lots of options for this like RabbitMQ or Kafka.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

4. ### Why is NodeJS Single threaded?

   Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved as opposed to the typical thread-based implementation.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

5. ### Name the types of API functions in Node?

   There are two types of functions in Node.js. <br/>
   1.Blocking functions - In a blocking operation, all other code is blocked from executing until an I/O event that is being waited on occurs. Blocking functions execute synchronously. <br/>2.Non-blocking functions - In a non-blocking operation, multiple I/O calls can be performed without the execution of the program being halted. Non-blocking functions execute asynchronously.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

6. ### Explain chaining in Nodejs?

   Chaining is a mechanism whereby the output of one stream is connected to another stream creating a chain of multiple stream operations.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

7. ### What are streams in Nodejs Explain the different types of streams present in Nodejs?

   Streams are objects that allow the reading of data from the source and writing of data to the destination as a continuous process.<br/>
   There are four types of streams.<br/>
   <Readable> to facilitate the reading operation.<br/>
   <Writable> to facilitate the writing operation.<br/>
   <Duplex> to facilitate both read and write operations.<br/>
   <Transform> is a form of Duplex stream that performs computations based on the available input.<br/>

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

8. ### What is package json?

   The package.json file in Node.js is the heart of the entire application. It is basically the manifest file that contains the metadata of the project where we define the properties of a package.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

9. ### Explain the purpose of module exports?

   A module in Node.js is used to encapsulate all the related codes into a single unit of code which can be interpreted by shifting all related functions into a single file

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

10. ### List down the major security implementations within Nodejs?

    Major security implementations in Node.js are:Authentications,Error Handling

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

11. ### Explain the concept of URL module?

    The URL module splits up a web address into readable parts

**[ Back to Top ⬆ ](#table-of-contents---node-js)**



