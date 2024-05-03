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
	}
	function(req, res) {
		res.end('Hello World!')
	}
	function(req, res) {
		res.json({title:'Hello World!'})
	}
	```

**[ Back to Top ⬆ ](#table-of-contents---express-js)**


8. ### How to set http response status using express?   
	
	we can either use **res.status()** or **res.sendStatus()**
	```
	res.status(404).send('File not found')
	
	//if sendStatus we no need to write send method , i will pre send a few inbuilt messages upon using that
	
	res.sendStatus(200)
	// === res.status(200).send('OK')

	res.sendStatus(403)
	// === res.status(403).send('Forbidden')

	res.sendStatus(404)
	// === res.status(404).send('Not Found')

	res.sendStatus(500)
	// === res.status(500).send('Internal Server Error')
	```

**[ Back to Top ⬆ ](#table-of-contents---express-js)**
9. ### What are the different http status codes?   
	
	Routing is the process of determining what should happen when a URL is called, or also which parts of the application should handle a specific incoming request.<br/>

	In the Hello World example we used this code<br/>

	```
    app.get('/', function(req, res) { 
     /* */ 
	})
	//This creates a route that maps accessing the root domain URL / using the HTTP GET method to the response we want to provide.
	```
	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

14. ###   What are the tasks that a middleware can do? 
	
	Middleware functions can perform the following tasks:<br/>

    Execute any code.<br/>
    Make changes to the request and the response objects.<br/>
    End the request-response cycle.<br/>
    Call the next middleware function in the stack.<br/>

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

15. ###   What are the different types of middleware?
	
	An Express application can use the following types of middleware:<br/>

    
    Application-level middleware<br/>
    Router-level middleware<br/>
    Error-handling middleware<br/>
    Built-in middleware<br/>
    Third-party middleware

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

16. ###    How to serve static assests from express?
	
	It’s common to have images, CSS and more in a public subfolder, and expose them to the root level:

    
    ```
	const express = require('express')
	const app = express()

	app.use(express.static('public'))

	app.listen(3000, () => console.log('Server ready'))
	```

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**
17. ###   How to provide file download using express?
	
	Express provides a handy method to transfer a file as attachment: Response.download().<br/>

	Once a user hits a route that sends a file using this method, browsers will prompt the user for download.<br/>

	The Response.download() method allows you to send a file attached to the request, and the browser instead of showing it in the page, it will save it to disk.<br/>
	```
	app.get('/', (req, res) => res.download('./file.pdf'))
	```

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**

18. ###   How to use the Response.cookie() method to manipulate your cookies?
	
	Cookies are small pieces of data sent from a website and are stored in user's web browser while user is browsing that website. Every time the user loads that website back, the browser sends that stored data back to website or server, to distinguish user's previous 	activity.
	

	```
	res.cookie('username', 'Adam')
	
	This method accepts a third parameter which contains various options:
	res.cookie('username', 'Adam', { domain: '.bangalore.com', path: '/administrator', secure: true })

	res.cookie('username', 'Adam', { expires: new Date(Date.now() + 900000), httpOnly: true })
	
	//clear cookie
	res.clearCookie('username')
	```
	
	The most useful parameters you can set are:
	| Value | Description |
	| ----- | ----------- |
	| domain | the cookie domain name|
	|expires|set the cookie expiration date. If missing, or 0, the cookie is a session cookie|
	|httpOnly|set the cookie to be accessible only by the web server. See HttpOnly|
	|maxAge|set the expiry time relative to the current time, expressed in milliseconds|
	|path|the cookie path. Defaults to /|
	|secure|Marks the cookie HTTPS only|
	|signed| 	set the cookie to be signed|
	|sameSite|Value of SameSite|

	
**[ Back to Top ⬆ ](#table-of-contents---express-js)**



	
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



### Table of Contents - MongoDB and Mongoose

| No. | Questions |
| --- | --------- |
|   | **MongoDB and Mongoose** |
| 1 | [What is MongoDB?](#what-is-mongodb)|
| 2 | [What are the difference between NoSQL and SQL](#what-are-the-difference-between-nosql-and-sql)|
| 3 | [How to establish MongoDB database connection in a node application?](#how-to-establish-mongodb-database-connection-in-a-node-application)|
| 4 | [What are virtual property in mongoose](#what-are-virtual-property-in-mongoose)|
| 5 | [How can we add or create our own instance methods in mongoose](#how-can-we-add-or-create-our-own-instance-methods-in-mongoose)|
| 6 | [How can we add or create our own static methods in mongoose](#how-can-we-add-or-create-our-own-static-methods-in-mongoose)|
| 7 | [What are the mongoose middlewares?](#what-are-the-mongoose-middlewares)|
| 8 | [How to query data using mongoose?](#how-to-query-data-using-mongoose)|
| 9 | [What is Population in mongoose](#what-is-population-in-mongoose)|
| 10| [What is Datamasking?](#what-is-datamasking)|
| 11| [What is hashing and explain how it works?](#what-is-hashing-and-explain-how-it-works)|
| 12| [What are salts and why are they so important?](#what-are-salts-and-why-are-they-so-important)|
| 13| [What are pepper and why are they so important?](#what-are-pepper-and-why-are-they-so-important)|
| 14| [What are JWT?](#what-are-jwt)|
| 15| [What are different authentication methods?](#what-are-different-authentication-methods)|
| 16| [What are disadvantages of using session based authentication?](#what-are-disadvantages-of-using-session-based-authentication)|
| 17| [What are disadvantages of using jwt based authentication?](#what-are-disadvantages-of-using-jwt-based-authentication)|

  ```

1. ### What is MongoDB?
	console.log()
	console.log(user.fullName)  // Output the full name
	//The code above will output the following:

	{ _id: 5a7a4248550ebb9fafd898cf,
		firstName: 'Thomas',
		lastName: 'Anderson' }
	//Thomas Anderson
  ```

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**


5. ### How can we add or create our own instance methods in mongoose?

   We can create custom helper methods on the schema and access them via the model instance. These methods will have access to the model object and they can be used quite creatively
   
   ```
	userSchema.methods.details = function() {
	return this.username + ' - ' +  this.email
	}
	//This method will be accessible via a model instance:
	const user = new User({
	username: 'user2',
	email: 'user2@gmail.com'
	})
	```

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**


6. ### How can we add or create our own static methods in mongoose?

  Similar to instance methods, we can create static methods on the schema. Let’s create a method to retrieve all users in the database:
  ```
  userSchema.statics.getUsers = function() {
  return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if(err) {
        console.error(err)
        return reject(err)
      }
      resolve(docs)
			})
		})
	}
  ```

**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**


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
13. ### What are pepper and why are they so important?

	A pepper is a secret added to an input such as a password prior to being hashed with a cryptographic hash function<br/>
	A pepper performs a comparable role to a salt, but while a salt is not secret (merely unique) and can be stored alongside the hashed output<br/> A pepper is secret and must not be stored with the output. The hash and salt are usually stored in a database, but a pepper must be stored separately (e.g. in a configuration file) to prevent it from being obtained by the attacker in case of a database breach. <br/> Where the salt only has to be long enough to be unique, a pepper has to be secure to remain secret (at least 112 bits is recommended by NIST), otherwise an attacker only needs one known entry to crack the pepper.<br/> Finally, the pepper must be generated anew for every application it is deployed in, otherwise a breach of one application would result in lowered security of another application.


  
**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

14. ### What are JWT?

	JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object<br/>
	some scenarios where JSON Web Tokens are useful:<br/>
	**Authorization**: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.<br/>

	**Information Exchange**: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.<br/>
	
	![jwt](https://research.securitum.com/wp-content/uploads/sites/2/2019/10/jwt_ng1_en.png)


  
**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

15. ### What are different authentication methods?

	

    Use **API keys** if you expect developers to build internal applications that don’t need to access more than a single user’s data.<br/>
    Use **OAuth** access tokens if you want users to easily provide authorization to applications without needing to share private data or dig through developer documentation.<br/>
	Use **session cookies**, here server is responsible for creating a session for the particular user when the user log's in, after that the id of the session is stored in a cookie on the user browser. For every request sent by the user, the cookie will be sent too, where the server can compare the session id from the cookie with the session information stored on the server so the user identity is verified.
  


**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**


16. ### What are disadvantages of using session based authentication?

	

   **Compromised Secret Key** : The best and the worst thing about JWT is that it relies on just one Key. Consider that the Key is leaked by a careless or a rogue developer/administrator, the whole system is compromised!<br/>
  **Cannot manage client from the server**<br/>**Cannot push Messages to clients** <br/>**Crypto-algo can be deprecated**<br/>**Data Overhead** : The size of the JWT token will be more than that of a normal Session token<br/>Complicated to understand: JWT uses cryptographic Signature algorithms to verify the data and get the user-id from the token. Understanding the Signing Algo in itself requires basics of cryptography. <br/>



  
**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**


17. ### What are disadvantages of using jwt based authentication?

	

   **Session based authentication**:<br/> Because the sessions are stored in the server’s memory, scaling becomes an issue when there is a huge number of users using the system at once.<br/>Cookies normally work on a single domain or subdomains and they are normally disabled by browser if they work cross-domain (3rd party cookies). It poses issues when APIs are served from a different domain to mobile and web devices.



  
**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

      ### Table of Contents - Golang

| No. | Questions |
| --- | --------- |
|   | **Golang** |
| 1 | [What is Golang?](#what-is-golang)|
| 2 | [What are the pros and cons of Golang?](#what-are-the-pros-and-cons-of-golang)|
| 3 | [What kind of projects are suitable to be built in Golang?](#what-kind-of-projects-are-suitable-to-be-built-in-golang)
| 4 | [Is Golang an object oriented language?](#is-golang-an-object-oriented-language)
| 5 | [What are the data types in Golang?](#what-are-the-data-types-in-golang)
| 6 | [Can you return multiple values from a function?](#can-you-return-multiple-values-from-a-function)
| 7 | [What is a GOPATH?](#what-is-a-gopath)
| 8 | [What are Goroutines?](#what-are-goroutines)
| 9 | [What is nil in Go?](#what-is-nil-in-go)
| 10 | [What is the difference between array and slice in Go?](#what-is-the-difference-between-array-and-slice-in-go)
| 11 | [How does a go compiler work?](#how-does-a-go-compiler-work)
| 12 | [What is an Interface and Why do you use it?](#what-is-an-interface-and-why-do-you-use-it)
| 13 | [What are concurrency and parralism and what is the difference between both?](#what-are-concurrency-and-parralism-and-what-is-the-difference-between-both)
| 14 | [What are the difference between goroutines and threads?](#what-are-the-difference-between-goroutines-and-threads)
| 15 | [What are channels for?](#what-are-channels-for)
| 16 | [Can you do something in goroutines using channels?](#can-you-do-something-in-goroutines-using-channels)
| 17 | [What is a Closure?](#what-is-a-closure)
| 18 | [What are runtime  and runtime packages?](#what-are-runtime--and-runtime-packages)
| 19 | [How can you get how many cores your computer has?](#how-can-you-get-how-many-cores-your-computer-has)
| 20 | [How would you tell a goroutine to use less core than what you have?](#how-would-you-tell-a-goroutine-to-use-less-core-than-what-you-have)
| 21 | [How would you determine the type of a variable and Which package to use for it?](#how-would-you-determine-the-type-of-a-variable-and-which-package-to-use-for-it)
| 22 | [What all types can map store?](#what-all-types-can-map-store)
| 23 | [What are microservices?](#what-are-microservices)
| 24 | [Why are there no classes in Go?](#why-are-there-no-classes-in-go)
| 25 | [Difference between Compile time and runtime?](#difference-between-compile-time-and-runtime)
| 26 | [How to generate a true random number in golang?](#how-to-generate-a-true-random-number-in-golang)
| 27 | [Why are goroutines light-weight?](#why-are-goroutines-light-weight)
| 28 | [If capacity is not defined in slice, what would the capacity be?](#if-capacity-is-not-defined-in-slice,-what-would-the-capacity-be)
| 29 | [What is the easiest way to check if a slice is empty?](#what-is-the-easiest-way-to-check-if-a-slice-is-empty)
| 30 | [What is an advantage of Go evaluating implicit types at compile time?](#what-is-an-advantage-of-go-evaluating-implicit-types-at-compile-time)
1. ### What is Golang?


   Golang is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Golang was designed at Google in 2007 to improve programming productivity in an era of multicore, networked machines and large codebases.


**[ Back to Top ⬆ ](#table-of-contents---golang)**


2. ### What are the pros and cons of Golang?

	**Pros:**
	* Ease of use
    * A Smart Standard library
    * Strong security built-in
    * Garbage collected language.
    * Minimalism & Readability
    * Concurrency


    **Cons:**
    * No generics
    * Error-handling boilerplate & lack of compile-time checks unhandled errors
    * Shortage of high-level parallelism and concurrency features



**[ Back to Top ⬆ ](#table-of-contents---golang)**


3. ### What kind of projects are suitable to be built in Golang?
     * Cloud services 
     * Media platforms
     * Broadcast providers
     * Projects with microservice architecture

  **[ Back to Top ⬆ ](#table-of-contents---golang)**

4. ### Is Golang an object oriented language?
    
    Golang has types and methods and allows an object-oriented style of programming, there is no type hierarchy.Golang has some properties of object oriented programming like Encapsulation , Composition , but it doesn't have inheritance , classes , function overloading .


  **[ Back to Top ⬆ ](#table-of-contents---golang)**

5. ### What are the data types in Golang?

    1. **Basic type**: Numbers, strings, and booleans .
    2. **Aggregate type**: Array and structs .
    3. **Reference type**: Pointers, slices, maps, functions, and channels .
    4. **Interface type**


  **[ Back to Top ⬆ ](#table-of-contents---golang)**

6. ### Can you return multiple values from a function?

    Yes. A Go function can return multiple values, each separated by commas in the return statement.

    ```go
	    package main

        import "fmt"
        
        func foo() (string, string) {
           return "foo", "ball"
        }
        
        func main() {
           fmt.Println(foo())
        }
	```


  **[ Back to Top ⬆ ](#table-of-contents---golang)**    


7. ### What is a GOPATH?


    The GOPATH environment variable specifies the location of your workspace. It defaults to a directory named go inside your home directory    <br/>  
    The command go env GOPATH prints the effective current GOPATH; it prints the default location if the environment variable is unset.          

  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

8. ### What are Goroutines?

    Goroutines are incredibly lightweight “threads” managed by the go runtime. They enable us to create asynchronous parallel programs that can execute some tasks far quicker than if they were written in a sequential manner.

  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

9. ### What is nil in Go?
    nil is a predeclared identifier in Go that represents zero values for pointers, interfaces, channels, maps, slices and function types.

  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

10. ### What is the difference between array and slice in Go ?
        import "fmt"
          
        // Creating an interface
        type tank interface {
          
            // Methods
            Tarea() float64
            Volume() float64
        }
          
        type myvalue struct {
            radius float64
            height float64
        }
          
        // Implementing methods of
        // the tank interface
        func (m myvalue) Tarea() float64 {
          
            return 2*m.radius*m.height +
                2*3.14*m.radius*m.radius
        }
          
        func (m myvalue) Volume() float64 {
          
            return 3.14 * m.radius * m.radius * m.height
        }
          
        // Main Method
        func main() {
          
            // Accessing elements of
            // the tank interface
            var t tank
            t = myvalue{10, 14}
            fmt.Println("Area of tank :", t.Tarea())
            fmt.Println("Volume of tank:", t.Volume())
        }    
	```

    Interfaces can make code clearer, shorter, more readable, and they can provide a good API between packages, or clients (users) and servers (providers).

  **[ Back to Top ⬆ ](#table-of-contents---golang)**   


  13. ### What are concurrency and parralism and what is the difference between both?
   
    **Concurrency** :  
    Defination 1 : Dealing with multiple things at once. <br/>
    Defination 2 : A Composition of independently executing processes(Example: suppose there are two tasks A and B , the way this work is A task done 70% meanwhile it has to wait for something , so it picks up task B and try to complete if suppose B task has to wait at 60% , for something then it picks up A task them completes it and comes back to B )    

    **Parralism** : 
     Defination 1 : Parallelism is about doing lots of things at once. <br/>
     Defination 2 : It is the simultaneous execution of (possibly related) computations. (Example: suppose there are two tasks A and B , it takes both tasks and try to complete both together )

    ![cocurrency_parllel](/img/cocurrency_parllel.jpg)
 
  **[ Back to Top ⬆ ](#table-of-contents---golang)**   
  14. ### What are the difference between goroutines and threads?
      **Threads** : A thread is just a sequence of instructions that can be executed independently by a processor. Threads  use a lot of memory due to their large stack and requires call to OS for resources (such as memory) which is slow. so doesn’t always guarantee a better performance than processes in this multi-core processor world.

      **Goroutines**:Goroutines exists only in the virtual space of go runtime and not in the OS. and A goroutine is created with initial only 2KB of stack size. Each function in go already has a check if more stack is needed or not and the stack can be copied to another region in memory with twice the original size. This makes goroutine very light on resources.
   
  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

  15. ### What are channels for?
     
      Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.
   
  **[ Back to Top ⬆ ](#table-of-contents---golang)**    

  16. ### Can you do something in goroutines using channels?
         * Channels are goroutine-safe and can store and pass values between goroutines
         * Channels provide FIFO semantics.
         * Channels cause goroutines to block and unblock, which we just learned about. 
   
  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

  17. ### What is a Closure?
    
         A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables.<br/>
   
  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

  18. ### What are runtime  and runtime packages?
  
      The runtime library implements garbage collection, concurrency, stack management, and other critical features of the Go language. The Package runtime contains operations that interact with Go's runtime system, such as functions to control goroutines.
   
  **[ Back to Top ⬆ ](#table-of-contents---golang)**   

  19. ### How can you get how many cores your computer has?
      With the help of runtime package
     
      ```go
	     package main

         import (  
              "fmt"
              "runtime"
                )

            func main() {
            fmt.Println(runtime.NumCPU())
            }
	  ```
   
  **[ Back to Top ⬆ ](#table-of-contents---golang)**   
 20. ### How would you tell a goroutine to use less core than what you have?
                }
			```
        * **reflect.ValueOf.Kind() Function** : Using the golang inbuilt package reflect we can find the Type of variable

             ```go
			    package main
  
              
                import (
                    "fmt"
                    "reflect"
                )

                func main(){
                var string_type =  "Hello Go";
                var complex_type =  complex(9, 15);
                
                 fmt.Println("string_type", reflect.ValueOf(string_type).Kind())
                 fmt.Println("complex_type = ", reflect.TypeOf(complex_type).Kind())
                }
			```
        * **%T with Printf** : You can use Printf also to find value of variable

            ```go
			    package main
  
             
                import (
                    "fmt"
                    "reflect"
                )

                func main(){
                var string_type =  "Hello Go";
                var complex_type =  complex(9, 15);
                
                 fmt.Printf("string_type=%T\n", string_type)
                 fmt.Printf("complex_type =%T\n", complex_type)
                }
			```
      
      **[ Back to Top ⬆ ](#table-of-contents---golang)**   
 22. ### What all types can map store?
| 7 | [What does Eventually Consistent Mean?](#what-does-eventually-consistent-mean)
| 8 | [What is indexing in SQL?](#what-is-indexing-in-sql)
| 9 | [How does SQL create an Index?](#how-does-sql-create-an-index)
| 10 | [What is difference between index scan and index only scan?](#what-is-difference-between-index-scan-and-index-only-scan)

1. ### What is ACID Model in Database?
   
    The ACID database transaction model ensures that a performed transaction is always consistent. This makes it a good fit for businesses which deal with online transaction processing (e.g: finance institutions) or online analytical processing (e.g: data warehousing). These organizations need database systems which can handle many small simultaneous transactions. There must be zero tolerance for invalid states


**[ Back to Top ⬆ ](#table-of-contents---database-engineering)**

2. ### What does ACID acronym mean?
    * A - Atomicity
    * C - Consistency
    * I - Isolation
    * D - Durability

3. ### Explain in brief the ACID Model?
    * **Atomicity**: Each transaction is either properly carried out or the process halts and the database reverts back to the state before the transaction started. This ensures that all data in the database is valid .<br/>
    * **Consistency**: The database must remain in a consistent state after any transaction. No transaction should have any adverse effect on the data residing in the database , also a DB should have Atomicity and Isolation for this property.<br/>
    * **Isolation**: Any reads or writes performed on the database should not be impacted by other reads and writes of separate transactions occurring on the same database.<br/>
    * **Durability**: The database should be durable enough to hold all its latest updates even if the system fails or restarts .

**[ Back to Top ⬆ ](#table-of-contents---database-engineering)**

4. ### What are the read phenomena in Isolation?
    * **Dirty Read**:A Dirty read is the situation when a transaction reads a data that has not yet been committed .<br/>
    * **Non Repeatable read**: Non Repeatable read occurs when a transaction reads same row twice, and get a different value each time.<br/>
    * **Phantom Read**:  Phantom Read occurs when two same queries are executed, but the rows retrieved by the two, are differen i.e a new row might have been inserted or deleted

**[ Back to Top ⬆ ](#table-of-contents---database-engineering)**

5. ### What are the four Isolation levels?
    * **Read Uncommitted** – Read Uncommitted is the lowest isolation level. In this level, one transaction may read not yet committed changes made by other transaction

    * **Read Committed** – This isolation level guarantees that any data read is committed at the moment it is read. Thus it does not allows dirty read. The transaction holds a read or write lock on the current row, and thus prevent other transactions from reading, updating or deleting it.
    
    * **Repeatable Read** - This is the most restrictive isolation level. The transaction holds read locks on all rows it references and writes locks on all rows it inserts, updates, or deletes. Since other transaction cannot read, update or delete these rows, consequently it avoids non-repeatable read.

    * **Serializable** - Transactions are serialized , occur one by one

 **[ Back to Top ⬆ ](#table-of-contents---database-engineering)**

6. ### Which isolation levels can prevent problems that occur in read phenomena?   
    Refer Image for a comparison  

     ![isolation](/img/acid.png)



**[ Back to Top ⬆ ](#table-of-contents---database-engineering)**


7. ### What does Eventually Consistent Mean ?
    
    **Eventual Consistency** concept is that while a database may have some inconsistencies at any point in time, it will eventually become consistent when all updates cease i.e eventually all nodes will receive the latest consistent updates.

**[ Back to Top ⬆ ](#table-of-contents---database-engineering)**




