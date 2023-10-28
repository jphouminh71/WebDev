# NextJS Notes 
**Crash Course** 

The primary difference with React Native is that NextJS allows you choose where you would like the client UI depending on your needs. 

Client-side rendering means that the UI renders the UI on their physical device, whereas server rendering trasnmits the full rendered page to the client directly. 

**Search Engine Optimization**, crucial for optimzing a websites visibility and ranking in the search results. increases organic traffic, enhanced user experience, and competitive advantage. So you should be taking advantage of the Server side rendering 


**Routing**, nextJS uses a file based routing system. Each folder in the route directory becomes a route and the folder name becomes the route.  


**Flexibilty to create Full-Stack Apps**: API routes, is a feature that enables the creation of serverless functions to handle API requests, serverless APIs are a way to create API endpoints without creating a traditional web server. So kind of like a azure function? Think you still want to hold your traditional API web service outside of the client web-framework. 

**Automatic Code Splitting**: A technique that breaks down large bundles of JavaScript code into smaller, more manage chunks that can be loaded as needed, makes the client experience better. The greatest thing about this is that its automatically handled! 


Front-end developing has got into a lot of enhancements that optimzize code and you can just utilize it all for free! NextJS is an extension of React that streamlines the optimization and so you can just focus on writing React code. 


# React Notes 

**Server Side vs Client Side Components**: Any kind of component that is found under the */app* directory are going to *server* components, so they'll be server rendered before going to the client (aka improved seo and user experiences). To make them into client side component you must type in **"use client"** directive. 

We should be using **client rendering** when we are handling react hooks like *useState* or anything similar because that kind of management is handled on the client. 

Just use server components when 
* Fetching data
* Accessing backend data directly 
* Send api to the server 
* Reduce the client-side javascript 

Use Client 
* Interactivity or Listeners 
* Using state or life cycle components. 
* Custom hooks that might make use of state management
* React class components