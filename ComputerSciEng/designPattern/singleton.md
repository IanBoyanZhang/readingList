# Singleton

The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the 
singleton.

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is 
a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application
ensuring that no connections are 'lost'.

Singletons reduce the need for global variables and namespacing
The module pattern is JavaScript`s manifestation of the Singleton pattern.

Several other patterns, such as Factory, Prototype, and Facade are frequently implementated as Singletons when only one instance is needed.

In many cases, some pages of a site run different JavaScript code than other pages. You can use the singleton namespacing technique to encapsulate page-specific
code and have it run when the page is finished loading

"Whilst has valid uses, often we find ourselves needing it in JavaScript that we may need to re-evaluate our design"

"They're often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a codebase."

"Singleton can be difficult to test due to issues ranging from hidden dependencies, the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on"

References:

[1] [Do factory: Singleton Design Pattern in JS](http://www.dofactory.com/javascript/singleton-design-pattern)

[2] [Joe Zim`js JavaScript Design Patterns: Singleton](http://www.joezimjs.com/javascript/javascript-design-patterns-singleton/)

[3] [Know when to use Singleton from IBM](http://www.ibm.com/developerworks/webservices/library/co-single/index.html)
