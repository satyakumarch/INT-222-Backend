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


12. ### Explain the concept of middleware in Nodejs?
    In Node.js, the spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor. When your child process returns a large amount of data to the Node you can invoke this method.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

16. ### Explain the purpose of ExpressJS package?

    Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in the server-side applications. It is a lightweight and flexible framework that provides a wide range of features required for the web as well as mobile application development. Express.js is developed on the middleware module of Node.js called connect. The connect module further makes use of http module to communicate with Node.js. Thus, if you are working with any of the connect based middleware modules, then you can easily integrate with Express.js.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

17. ### Explain the usage of a buffer class in Nodejs?

    Buffer class in Node.js is used for storing the raw data in a similar manner of an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. It is a global class that is easily accessible can be accessed in an application without importing a buffer module. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to handle octet streams.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

18. ### How does Nodejs handle the child threads?

    In general, Node.js is a single threaded process and doesn’t expose the child threads or thread management methods. But you can still make use of the child threads using spawn() for some specific asynchronous I/O tasks which execute in the background and don’t usually execute any JS code or hinder with the main event loop in the application. If you still want to use the threading concept in your application you have to include a module called ChildProcess explicitly.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

19. ### Explain stream in Nodejs along with its various types?

    Streams in Node.js are the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data. In Node.js, there are four fundamental types of streams:<br/>
    Readable: Used for reading large chunks of data from the source.<br/>
    Writeable: Use for writing large chunks of data to the destination.<br/>
    Duplex: Used for both the functions; read and write.<br/>
    Transform: It is a duplex stream that is used for modifying the data.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**


20. ### Describe the exit codes of Nodejs?

    In Node.js, exit codes are a set of specific codes which are used for finishing a specific process. These processes can include the global object as well. Below are some of the exit codes used in Node.js:<br/>
	*Uncaught fatal exception<br/>
	*Unused<br/>
	*Fatal Error<br/>
	*Internal Exception handler Run-time failure<br/>
	*Internal JavaScript Evaluation Failure<br/>

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

21. ### Is cryptography supported in Nodejs?
    cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
		});
	} 
	else {
		// Workers can share any TCP connection
		// In this case it is an HTTP server
	http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
	}).listen(8000);

	console.log(`Worker ${process.pid} started`);
	}
	
	//Running Node.js will now share port 8000 between the workers:
	
	$ node server.js
	Master 3596 is running
	Worker 4324 started
	Worker 4520 started
	Worker 6056 started
	Worker 5644 started
	```

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

29. ### What is the datatype of console?

    The datatype of console is an **object**

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

30. ### Which are the different console methods available?

    There are around 21 inbuilt console methods , we can also built our own prototypes using new Console constructor function<br/>
	here are a few popular one's<br/>
	1.**console.clear()** will clear only the output in the current terminal viewport for the Node.js binary.<br/>
	2.**console.error([data][, ...args])** Prints to stderr with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution<br/>
	3.**console.table(tabularData[, properties])**  a table with the columns of the properties of tabularData (or use properties) and rows of tabularData and log it.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**

31. ### Can node js perform cryptographic functions?
.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**


44. ###	What Is A Child_process Module In NodeJs?

    
    Node.js supports the creation of child processes to help in parallel processing along with the event-driven model.<br/>

	The Child processes always have three streams <child.stdin>, child.stdout, and child.stderr. The <stdio> stream of the parent process shares the streams of the child process.<br/>

	Node.js provides a <child_process> module which supports following three methods to create a child process.<br/>

		**exec** – <child_process.exec> method runs a command in a shell/console and buffers the output.
		**spawn** – <child_process.spawn> launches a new process with a given command.
		**fork** – <child_process.fork> is a special case of the spawn() method to create child processes.
	.

**[ Back to Top ⬆ ](#table-of-contents---node-js)**


### Table of Contents - Express JS


| No. | Questions |
| --- | --------- |
|   | **Express JS** |
| 1 | [What is ExpressJS?](#what-is-expressjs)|
| 2 | [What are some of the salient features of express?](#what-are-some-of-the-salient-features-of-express)|
| 3 | [Explain with an example a working of a simple express app?](#explain-with-an-example-a-working-of-a-simple-express-app)|
| 4 | [Mention few properties of request parameter in express?](#mention-few-properties-of-request-parameter-in-express)|
| 5 | [How to get the name parameters in express?](#how-to-get-the-name-parameters-in-express)|
| 6 | [How to retrieve the get query string parameters using express? ?](#how-to-retrieve-the-get-query-string-parameters-using-express)|
| 7 | [How to send a response back using express?](#how-to-send-a-response-back-using-express)|
| 8 | [How to set http response status using express?](#how-to-set-http-response-status-using-express)|
| 9 | [What are the different http status codes?](#what-are-the-different-http-status-codes)|
| 10 | [Mention few properties of request parameter in express?](#mention-few-properties-of-request-parameter-in-express)|
| 11 | [How can you change http header value of a response?](#how-can-you-change-http-header-value-of-a-response)|
| 12 | [How to redirect to other pages server-side?](#how-to-redirect-to-other-pages-server-side)|
| 13 | [How does routing work in express?](#how-does-routing-work-in-express)|
| 14 | [What are the tasks that a middleware can do?](#what-are-the-tasks-that-a-middleware-can-do)|
| 15 | [What are the different types of middleware?](#what-are-the-different-types-of-middleware)|
| 16 | [How to serve static assests from express? ](#how-to-serve-static-assests-from-express)|
| 17 | [How to provide file download using express?](#how-to-provide-file-download-using-express)|
| 18 | [How to use the Response.cookie() method to manipulate your cookies?](#how-to-use-the-response-cookie-()-method-to-manipulate-your-cookies)|
| 19 | [How to manage sessions using express?](#how-to-manage-sessions-using-express)|
| 20 | [How to provide file download using express?](#how-to-provide-file-download-using-express)|
| 21 | [How To Allow Cors In Expressjs  Explain With An Example?](#how-to-allow-cors-in-expressjs--explain-with-an-example)|



## Express Js
	|secure|Marks the cookie HTTPS only|
	|signed| 	set the cookie to be signed|
	|sameSite|Value of SameSite|

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

19. ###   How to manage sessions using express?
	
	We’ll use the express-session module, which is maintained by the Express team.When implemented, every user of you API or website will be assigned a unique session, and this allows you to store the userstate.as by default Express requests are sequential and no request can be linked to each other. There is no way to know if this request comes from a client that already performed a request previously.
	```
	const express = require('express')
	const session = require('express-session')

	const app = express()
	app.use(session(
	'secret': '343ji43j4n3jn4jk3n'
	))
	```
	All solutions store the session id in a cookie, and keep the data server-side. The client will receive the session id in a cookie, and will send it along with every HTTP request.

	We’ll reference that server-side to associate the session id with the data stored locally.

	Memory is the default, it requires no special setup on your part, it’s the simplest thing but it’s meant only for development purposes.

	The best choice is a memory cache like Redis, for which you need to setup its own infrastructure.

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

20. ###   How to process forms using Express? 
	
	The form data will be sent in the POST request body.

	To extract it, you will use the express.urlencoded() middleware, provided by Express:
	```
	const express = require('express')
	const app = express()

	app.use(express.urlencoded())
	```
	Now you need to create a POST endpoint on the /submit-form route, and any data will be available on Request.body:
	```
	app.post('/submit-form', (req, res) => {
	const username = req.body.username
	//...
	res.end()
	})
	```

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

21. ###   How To Allow Cors In Expressjs  Explain With An Example? 
  ```

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

7. ### What are the mongoose middlewares?

   Middleware are functions that run at specific stages of a pipeline. Mongoose supports middleware for the following operations:<br/>

	Aggregate<br/>
	Document<br/>
	Model<br/>
	Query<br/>

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

8. ### How to query data using mongoose?

   Mongoose has a very rich API that handles many complex operations supported by MongoDB. Consider a query where we can incrementally build query components.<br/>

	In this example, we are going to:<br/>

	Find all users<br/>
	Skip the first 100 records<br/>
	Limit the results to 10 records<br/>
	Sort the results by the firstName field<br/>
	Select the firstName<br/>
	Execute that query<br/>
	```
	User.find()                   // find all users
         .skip(100)                // skip the first 100 items
         .limit(10)                // limit to 10 items
         .sort({firstName: 1}      // sort ascending by firstName
         .select({firstName: true} // select firstName only
         .exec()                   // execute the query
         .then(docs => {
            console.log(docs)
          })
         .catch(err => {
            console.error(err)
          })
	```

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

9. ### What is Population in mongoose?

  Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query.

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

10. ### What is Datamasking?

  Data masking is a method of creating a structurally similar but inauthentic version of an organization's data that can be used for purposes such as software testing and user training. The purpose is to protect the actual data while having a functional substitute for occasions when the real data is not required.<br/>
  you can simply use **$project** to hide the mobile field<br/>
  Or perhaps you have an extra field in your document to indicate whether the information is public or not, i.e. given documents<br/>

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

11. ### What is hashing and explain how it works?

  Hashing is the process of converting an input of any length into a fixed size string of text, using a mathematical function.
  ![hashing](https://miro.medium.com/max/4000/0*Zkd2fcKuVGirbNpl.png)
  When the user provides a input it will be converted to a value of fixed length by a hashing function and the resulting value will be called as hashed text, and it should be always unique for different value
  
**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**



