# Singleton

The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the 
singleton.

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is 
a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application
ensuring that no connections are 'lost'.

Singletons reduce the need for global variables.
The module pattern is JavaScript`s manifestation of the Singleton pattern.

Several other patterns, such as Factory, Prototype, and Facade are frequently implementated as Singletons when only one instance is needed.

References:

[1] [Singleton Design Pattern in JS](http://www.dofactory.com/javascript/singleton-design-pattern)
