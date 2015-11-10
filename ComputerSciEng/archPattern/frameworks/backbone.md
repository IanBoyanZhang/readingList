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

Terminology:
AMD (Asynchronous Module Definition)

References: 
[1] [Developing Backbone.js Applications](http://addyosmani.github.io/backbone-fundamentals/) published in Oct. 2013
