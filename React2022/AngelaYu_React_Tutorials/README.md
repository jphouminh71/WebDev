# React v16
--- 
```html
<body> 
<MyHeader/>
<PageContent/>
<MyFooter/>
</body>
```

React is about building a user interface based on the ideas of **Component** resuse. React has the capability to achieve creating components by separating all components from eachother even at the css level! Also since each component is independent from others we can create dynamic web pages where only specific parts of the screen refreshes. In general, react is also very quick to refresh itself since it has a quick way to figure out changes when things happen. 

React isn't the only frontend framework out there, so why do we care about it? Because its one of the most used frameworks at the BIG N companies and is one of the fastest growing technologies to learn. As you learn React you'll see that it takes advantage of the new ES6 modules to help you build beautiful and fast front ends!

What is babel? It is a next generation compiler that is compatible with ALL new modern browsers. It can be used to take advantage of ES6 code, but in essence what it does it breaks down its input into Plain Old Javascript that any browser can understand! 

Whenever you are writing attributes into the JSX you have to write it into **camelCase** or else they wont work. When applying styling to react components you want to define them in a separate css file then bring them into the react component via **className**. Anything you could do before with css you can do with react! 

Inline styling is avaiable in React but its still recommeneded that you handle all your styling outside in a separate css class. But inline styling may come in handy when you want to switch styling components on the fly during the real application. 
<br><br>
## Code Sandbox 
---
1. Intro to react 
 - https://codesandbox.io/s/react-1-introjsx-9o99gr?file=/src/index.js

 <br><br>

### Declarative vs Imperative Programming
---

<br><br>

###  Class Components vs Hook Components
---
Hooks components are much cleaner than Functional components, mainly because we can get rid of most of the boiler plate code 


 <br><br>


 ## React v18 Notes
 ---
 src: https://reactjs.org/blog/2022/03/29/react-v18.html

 The most important edition in React 18 is something we hope you never have to think about: concurrency. The latest improvements include automatic batching, new APIs like startTransition, and streaming server-side rendering

 Conccurency isn't a feature but it the new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same itme. React uses sophisticated techniques in its internal implementation, like priority queues and multiple buffering. But you won't see those concepts in the public APIs, they just take effect to make your application that much faster. 

 Before upgrading to React 18, before adding an concurrent features, updates are rendered the way they were before, with single uninterrupted, synchrnous transaction. Once and update starts rendering nothing could stop itt until the user can see the results on the screen. A key property of React 18 is that these rendering steps are now **interruptable**. This means that the React can prepare new screens in the background without blocking the main thread. This mean sthe UI can respond immediately to user input even if it's in the middle of a large rendering task. Its like how tasking works in c#!

 Concurrent rendering is a powerful new tool in React and most of our new features are built to take advantage of it, including Suspense, transitions, and streaming server rendering. **This new rendering behavior is only enabled for parts of the app that ues the new features** 

 You should always code in strict mode. After you upgrade to React 18, youll be able to start using concurrent features immediately like startTransaition to navigate between screns without blocking user input. Or useDeferredValue to throttle expensive re-renderse. You won't interact with concurrent APIs directly, but instead you will mainly be interacting with the concurrent libraries like starTransition, router libraries. 

All you need to know is that React18 is what React16 should have been earlier because of all the new peformance capbilites! 
<br><br>
