# MVC
When Do I need A JavaScript MVC Framework?
When building a SPA using JavaScript, whether it involves a complex user interface or is simply trying to reduce the number of HTTP requests required for 
new views, you will likely find yourself inventing many of the pieces that make up an MV* framework.

Mature MV* frameworks typically include not only the pieces you would find yourself writing (DOM manipulation library, templating, and routing), but also include 
...

These types of applications typically download a single payload containing all the scripts, stylesheets, and markup users need for common tasks and then perform a lot
of additional behavior in the background.

If however, you`re building an application that still relies on the server for most of the heavy-lifting of page/view rendering and you`re just using a little JavaScript 
or jQuery make things more interactiv, an MV* framework maybe overkill. 

From book "Developing Backbone.js Applications"

Observer Pattern (nowadays commonly implementated as a Publish/Subscribe system) was included as a part of MVC`s architecture decades ago. 

The View and Controller both observe the model: anytime the Model changes, the view react. A simple example of this is an application backed by stock market data - for 
application to show real-time information, any change to the data in the Model should result in the View being refreshed instantly

# MVC Applied to the Web
The web heavily relies on the HTTP protocol, which is stateless. This means that there is not a constantly open connection between the browser and server; each request 
instantiates as a new communication channel between the two. Once the request initator (e.g. browser) gets a response the connection is close. This fact creates a completely
different context when compared to one of the operating systems on which many of the original MVC ideas were developed. 

Rails MVC architecture:
1. Models represents the data in an application and are typically used to manage rules for interacting with a specific database tables. One table -- One model with much of 
your application`s business logic living within these models

2. Views represent your user interface, often taking the form of HTML that will be sent down to the browser. They`re used to present application data

3. controllers offer the glue between models and views. Their responsibility is to process requests from the browser, ask your models for data and then supply this data to views

A trend to improve perceived latency has been to move towards building Single Page Applications (SPAs) -- apps which after an initial page load are able to handle subsequent
navigations and requests for data without the need for a completed reload

Terminology:
Ajax (Asynchronous JavaScript and XML) makes communication with the server asynchronous so that data is transferred and processed in the background, allowing the user to interact
with other parts of a page without interruption

References:

[1][Backbone fundamentals when do I need a JavaScript MVC framework](http://addyosmani.github.io/backbone-fundamentals/#when-do-i-need-a-javascript-mvc-framework)































