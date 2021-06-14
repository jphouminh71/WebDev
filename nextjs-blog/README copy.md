# NextJS 2021 Online Tutorial

You should know the following before starting nextJS
- Creating components, Using JSX, passing props, using State

**What is Next.JS**
 - NextJS is a React frontend development web framework by Vercel that enables functionality such as server-side rendering and static site generation
    - Easy page routing (don't have to use react-router-dom)
    - API Routes
    - Out of the box TypeScript & Sass 
    - Static site generation 
    - Easy deployment (Versal has their own hosting platform online too)


NextJS also features 'fast-refresh' automatically which automatically recompiles project on change, pretty much nodemon

<em>Server-Side Rendering</em>

-  Unlike traditional React app where the entire application is loaded and rendered on the client, Next.js allows the first page laod to be rendered by the server, which is great for SEO & Performance. (very fast user interface)

---
<br>
<br>

## Pre-rendering and Data Fetching 
---
By defualt Next.js pre-renders every page. This means that Next.js gerneates HTML for each page in advance, instead of having it all done by client side Javascript. Pre-rendering can result in better performance and SEO

Each gnerated HTML is associated with minimal JavaScript code necessary for that page. When a apge is loaded by the browser, its JavaScript code runs and makes the page fully interactive (hydration)

    So we get the added performance of SEO optimazations and the client gets delivered a static HTML page, SO they get to see the contents faster while the Javascript Executes the UI components that they will then interact with. In contrast, without this the user wont be able to see ANYTHING until the browser executes the Javascript THEN it will show them the Html. 
        Recap: Client Response time down + SEO optimizations. 

<br>

### Two Forms of Pre-Rendering (Static Generation / Server-side Rendering)
<em> The difference is WHEN it generates the HTML for a page</em>

**Static Generation:** generates the HTML at **build time**. The pre-rendered HTML is reused on each request

**Server-side Rendering:**: gernates the HTML on EACH REQUEST

    Either way, you are getting a performance boost! You probably want to go with Static Generation when you are given a page that isn't very dynamic and always changing whereas if you have a page that uses something like a livefeed you can ask the server side to render it for you so you get the most upto date page. 


"We recommend using **Static Generation** (with and without data) whenver possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request."

* Marketing pages
* Blog posts
* E-commerce product listings
* Help and documentation 

You should ask yourself "**can i pre-render this page ahead of a users request?**" If the answer is yes, then you should choose static generation. 

On the other hand, Static generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request. It will be slower, but still better than using plain client side javascript to keep updating the page (I think)


### Static Generation
--- 
Static Generation can be done with and without data.

So far, all the pages we created  do not require fetching external data. Those pages will automatically be statically generated when the app is built for producted. However, some pages require data before they are displayed, but they can still be statically generated. 

NextJS will has a lifecycle function that will allow you to gather your data then pass it to the component before it is rendered. Then it will pass it onto the client. **getStaticProps**

```c++ 
export default function Home(props) {...}

export async function getStaticProps() {
    // get external data from the file system, API, DB, etc. 
    const data = ...

    // The value of the 'props' key will be passed to the 'Home' component
    return {
        props: ...
    }
}
```

"Essentially, 'getStaticProps' allows you to tell Next.js "Hey, this page has some data dependencies -- so when you render this page at build time, make sure to resolve them first!"

    So I think what you would do with this method generation is to use this method to gather data in the parent component and then pass any data any other sub-components needs through their own props. So you would only have this function in parent components (pages)

**getStaticProp Tips!**
* Use fetch for network request since NextJS pre-loads this package 
* Since NextJS runs server-side you can do things like connect to dbs and make queries. So the client-browser shouldn't see the queries. (double check this)
    - build the db in another program though and just connect here 
* Can only be exported from a 'page'

<em> What If I Need to Fetch Data at Request Time? </em>
Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request then you should probably try to use **server-side rendering** or **skip rendering** 


### Server Side Rendering

* If you need to fetch data at **request time** instead of at build time, you can try Server-Side Rendering

* "Do I need user information before I can render the HTML?"

To use **server-side rendering** you need to export <code> getServerSideProps() </code> instead of <code> getStaticProps() </code>

```c++
// context should be the values passed by the client
export async function getServerSideProps(context) {

    // grab data 

    return {
        props: {
            props for your component
        }
    }
}
```

### Client-side Rendering
--- 
If you **do not** need to pre-render the data, you can also use the following strategy (called **client side rendering**)
* Statically generate (done automatically if not specificed) parts of the page that do not require external data. 
* When the page loads, fetch external data from the client using JavaScript and populate the remaining parts. 

This approach works well for user dashboard pages, for exmaple. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn't need to be pre-rendered. The data is frequently updated, which **requires request-time data** fetching. 

**SWR**: NextJS has a special react hook for fetchign data that they recommend. It handles caching, revalidation, focus tracking, refetching on interfal and more. (LOOK INTO THIS FOR CLIENT SIDE REDNERING WITH NEXTJS)

```js
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

## Dynamic Routes

### Page Path Depends on External Data
* In the previous lesson, we covered the case where the **page content** depends on external data. We used `getStaticProps` to fetch required data to render the index page. 

    This is important because you need to render specifc pages for specific products

In this lesson, we'll talk about the case where each **page path** depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables **dynamic URLs** in Next.js
<br>

### How to Statically Generate Dynamic Routes
<em> The page file must contain </em>

1. A React Component to Render
2. **getStaticPaths()** which returns the possible values for the  `id`
3. **getStaticProps()** retrives the specific values passed by **getStaticPaths()** 
<br>



## API ENDPOINTS
--- 
you can create endpoints (REST) or (GRAPHQL) for clients to ping.
<br>

### A Good Use Case: Handling Form Input
A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.

OR 

Securley interacting with a third party API 

<br>

DO NOT fetch from getStaticProps etc. These functions are server-side so its safe to do db requests and stuff in here as it is! 

    1. Gather your data inside server functions
    2. Put / Post data through API endpoints 
























