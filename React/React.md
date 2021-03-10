# React Documentation Notes
--- 
* You can inject any user input into React elements as it escapes any bad characters, so you don't need to worry about scripting attacks!
* **React elements only update whats neccessary**, since elements are usually stateful, when React elements check for updates they will compare they old DOM tree to their new one. 

* When you are creating componets, write the containers in the html that you will target with the render, then write the components that you will inject them into later. 
* React component props are read-only properties


<em> Two ways to define components </em>
```js
//- Function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
`a
//- Class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<em> React uses JSX to send props to child elements of defined components </em>
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

<em> Creating a reusable Component example </em>
```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

**Handling Events**
```js
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    //- define state variables
    this.state = {
      isToggled: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  // gets called when clicked
  handleToggle(event) {
    console.log(event.target.getAttribute("name")); // have to do it this way
    this.setState((state, props) => ({
      isToggled: !this.state.isToggled
    }));
  }

  render() {
    // conditional rendering
    return (
      <h1 name="label" onClick={this.handleToggle} value="thisvalue">
        {" "}
        {this.state.isToggled ? "ON" : "OFF"}{" "}
      </h1>
    );
  }
}

export default App;
```
**React Forms**
* Need to figure out how to actually pass submit values to express, but this is how you set it up

```js
class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormOne;
```


**Lifting State Up**
* Its not uncommon for several components to need to reflect the same data, so you should put the same changing data for components to their most common ancestor then pass the changing values (keyboard input) into the state then passing the state as props to whichever component needs access to it. 

* There should be only be a "single source of truth" for any data changes in a React applications so always rely on top down approach of sharing data as opposed to syncing data manually. 

* 



<br><br><br>
# React Tutorial
---
These notes are coming from Angela Yu's tutorial on Udemy. Look at your examples from code sandbox for the good examples. 

* React is a front end framework that focuses on building component based UI's. Makes structuring your front end code super easy. Previously we focused on keeping js,html,css away from each other, but react takes a different approach and encourages bring them together.
* It enables websites to be incredibily interactive because you can make components update themselves and talk to the server independently. So instead of designing interaction for an entire page we just focus on the smaller components. 
* React is also a lot more effiencent because it only updates elements that have changed. 
* This is one of the fastest growing and in demand front end frameworks. 
<br>
**What you will learn**
* React, JSX, Props, Styling, Components, Babel, Virtual DOM, Containers, State Management, Hooks, Declarative Programming, and a lot ES6 operations!
<br>

* Whenever you find yourself re-using the same html code its probably a great opportunity to do make it into a component. 


**Tools**
* **Code Sandbox**: online React tool where you can build your components easily and also lets you import packages. 


### JSX 
--- 
* Next Gen Javascipt that allows you to do things like write pure html in javascript files and then write javascript in the html. It pretty much modernized the way javascript is written these days
<br>

* Pretty much you should learn how to code in JSX because its a new standard for web dev. 
<br> 



**JSX Imports and Exports** 
* Look at your examples on code sandbox, pretty straight forwards.

<br>

**How do add functionality to our components?**
* We have to understand states of components and we adjust behavior based on the 'state' of the component. 

<br>

**Declarative Programming**: This is when we structure our components based on their states. 

**Imperative Programming**: This is when go and manually set attributes to our components. 

**Hooks**: These are functions that allow us to hook into components to update their attributes. 


**React.useState(param1,param2)**
* First param is the intial state 
* Second param is function that will be used to update the state


<br><br><br>

# React Routing
---
1. First install ```npm i react-router-dom```. Then spin up the react project. 
