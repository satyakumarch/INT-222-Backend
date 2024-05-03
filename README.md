# Backend Interview Questions and Answers related to Node JS ,  Golang/Go , Express JS , MongoDB
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

12. ### What are salts and why are they so important?

  It's a unique value that can be added to the end of the password to create a different hash value. This adds a layer of security to the hashing process<br/>
  They are so important as they prevent **brute force attacks**(Trying all possible combintaion of password) and also against **rainbow table**(a table containing all common hashed text and their respective passwords)<br/>
  
**[ Back to Top ⬆ ](#table-of-contents---mongodb-and-mongoose)**

13. ### What are pepper and why are they so important?

	A pepper is a secret added to an input such as a password prior to being hashed with a cryptographic hash function<br/>
	A pepper performs a comparable role to a salt, but while a salt is not secret (merely unique) and can be stored alongside the hashed output<br/> A pepper is secret and must not be stored with the output. The hash and salt are usually stored in a database, but a pepper must be stored separately (e.g. in a configuration file) to prevent it from being obtained by the attacker in case of a database breach. <br/> Where the salt only has to be long enough to be unique, a pepper has to be secure to remain secret (at least 112 bits is recommended by NIST), otherwise an attacker only needs one known entry to crack the pepper.<br/> Finally, the pepper must be generated anew for every application it is deployed in, otherwise a breach of one application would result in lowered security of another application.
**[ Back to Top ⬆ ](#table-of-contents---database-engineering)**
