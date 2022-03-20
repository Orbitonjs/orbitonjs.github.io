# State Management

In Orbiton, state is data that is determines how your app renders. The introduction of state in Applications opens possibilities for more capabilities in your app. To introduce state in an application, you must use Class Components and on this page we shall introduce class based components and how to add a state to a component.

## Class Components

As you can guess from the name class components are created using classes. Class components introduce more futures to your application like state and lifecycle APIs.
To create a class based component. You have to first import the `Component` class from Orbiton and create a class the inherits (extends) it. The class will have a `render()` method that is a normal functional component except it does not have props in it. This method returns an Orbiton element.

```jsx
import Orbiton, {Component} from "orbiton";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
      </div>
    )
  }
}
```

## Props in Class Components

Passing props into class Components is the same in as passing props in functional components. But when it comes to accessing props in Class components you have to use the `this` key word.
You have to create the class Constructor and which takes two arguments, props and context. Then in the constructor you will call the `super()` function so that you can have access to the this key word

```jsx
import Orbiton, {Component} from "orbiton";

class App extends Component {
  constructor(props, c) {
    super(props, c);
  }
  render() {
    return (
      <div>
        <h1>Your name is {this.props.name}</h1>
      </div>
    )
  }
}
```

## State in Components

Adding state to a component is easy. In the constructor of the class, you have to initiate `this.state` as an object with the key value pairs that you expect your state object to have.

```jsx
import Orbiton, {Component} from "orbiton";

class App extends Component {
  constructor(props, c) {
    super(props, c);
    this.state = {
      firstName: "Alex",
      lastName: "Junior",
    }
  }
}
```

After you have initialized state you can then use it.

## Updating State

You have to not that since state was created to help determine how your app is rendered, certain conventions where put in place on how to update it. So changing a value directly is discouraged. It can work but it defeats the purpose of why state was created.
The `updateState` method was provides to update state in an app. The `updateState` method updates only a subset of the state object but not the whole of `this.state`. You should also not that each time state is updated, the component re-renders in the DOM with the appropriate changes made. This maked it possible for you to use state as a data binding solution for your application.

```jsx
import Orbiton, {Component} from "orbiton";

class App extends Component {
  constructor(props, c) {
    super(props, c);
    this.state = {
      loggedIn: false,
      someArray: [
        //....
      ]
    }
  }
  loggin() {
    this.updateState({
      loggedIn: true
    })
  }
}
```

In the above component the `updateState` function will update the `loggedIn` property but wont do anything to the `someArray` property.
