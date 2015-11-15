# Controller and Events
Backbone departs from traditional MVC when it comes to Controllers - there is no Backbone.Controller! Instead, the Controller responsibility is addressed within
the View.

In a single-page application, events can be traditional browser DOM events (e.g. clicks) or internal application events such as Model changes.

URL routing, DOM events (e.g., mouse clicks), and Model events (e.g., attribute changes) all trigger handling logic in the view. The handlers update the DOM and Models,
which may trigger addtional events. 

Models are synced with Data Sources which may involve communicating with back-end servers.

## Models:

Persistent models: web browser`s localStorage data-store

## Views
render() callback could be a Model subscriber, so the View can be triggered to update when the Model changes.

When user interact with View. It is controller`s responsiblity to make a decision on what to do. In Backbone, this is achieved by adding an event listener 
to the corresponding element which delegates handling of the click to an event handler

## Controllers
Backbone`s Views typically contain "Controller" logic, and Routers are used to help manage application state

Note: The role of "Navigation" falls to a "router", which assists in managing application state. Router is neither a part of MVC nor present in every MVC-like framework

# Relation to design pattern
Observer(pub/sub), Strategy, and Composite patterns, Factory and Decorator patterns

#Performance consideration

It avoids run loops, two-way binding, and constant polling of your data structures for updates and tries to keep things simple where possible

Modules pattern with plugins and extensions available from vibrant community.

# design pattern and mechanism management in backbone

## Event binding

Events: off -->alias: (unbind)

View: remove

1. Removing the view (this delegates to jQuery, and jQuery removes it from the DOM)

```javascript
// To be called from inside your view ... otherwise its view.remove();
this.remove()
```

2. Removing all backbone events
```javascript
this.unbind();
```
## Memory Management
Anytime we make a call to the '.bind(...)' methond on any object, we need to be aware of the lifespan of the objects involved.

Lesson learnt from `Backbone js 1.0.0 nested view memory leak`:

1) Use tools to analyze memory leaks.

2) Dispose view with its DOM element using Backbone.View.remove().

3) Use Backbone.Events.listenTo() instead of Backbone.Events.on(), so that Backbone.View.remove() removes event handlers for you.

4) Don’t forget to remove all references to deleted views, so that garbage collector can free memory and detached DOM elements.

5) Console logging can cause caching of removed objects in Chrome and thus affect memory leak detection, so don’t forget to clear console before taking heap snapshot.

# TO RESEARCH
Backbone.js And JavaScript Garbage Collection

Terminology:
AMD (Asynchronous Module Definition)
Mediator Pattern

References: 
[1] [Developing Backbone.js Applications](http://addyosmani.github.io/backbone-fundamentals/) published in Oct. 2013

[2] [Pattern to manage views in backbone](http://stackoverflow.com/questions/8348805/pattern-to-manage-views-in-backbone)

[3] [Zombies run-managing page transitions in backbone apps](https://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/)

[4] [Backbone js view removing and unbinding](http://stackoverflow.com/questions/9080763/backbone-js-view-removing-and-unbinding)

[5] [How to detect backbone memory leaks in 0.9.2](http://andrewhenderson.me/tutorial/how-to-detect-backbone-memory-leaks/)

[6] [Backbone js 1.0.0 nested view memory leak](https://metametadata.wordpress.com/2013/06/17/backbone-js-1-0-0-nested-view-memory-leak/)

[7] [Backbone.js And JavaScript Garbage Collection](https://lostechies.com/derickbailey/2012/03/19/backbone-js-and-javascript-garbage-collection/)

[8] [Event aggregagtors and mediators (pattern in Backbone)](http://addyosmani.github.io/backbone-fundamentals/#event-aggregators-and-mediators)
