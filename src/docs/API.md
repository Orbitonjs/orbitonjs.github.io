# Library Reference

On this page we give you a detailed explanaton to each and everything that Orbiton makes available for your usage. We shall explain to you Functions (and their parameters), classes, variables, class methods, objects and types that are included in the Orbiton JS Library.
Note that the functions on this page are not ordered in any specific form of ordering so use the search bar on the side of this page to find the specific function that you are looking for. You can also search throught the table of contents to find what your are looking for.

## Fuctions

### `append`

This function is used to append a given orbiton tree or element to the DOM. Returns `true` if the process is successfull and and Object of type [`UnsuccesFullAppendError`](#UnsuccesFullAppendError) if an error occurs.

| Parameters | Type                                | Description                                                                                                                                            |
| ---------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tree       | [`OrbitonElement`](#OrbitonElement) | This is an orbiton element of a tree of orbiton elements that you created. Remember that the first element must be an Orbiton Element not a component. |
| root       | `HTMLElement`                       | The element in the DOM that you want to act as the root of your app.                                                                                   |
| callback   | `CallableFunction?`                 | A callbackfunction that you want to run immediately after the Tree is appended to the DOM.                                                             |

**Usage**

```jsx
import Orbiton, { append } from 'orbiton'

const Button = <button>Cick Me</button>

append(
  Button,
  document.getElementById("root"),
  ()=> {
    console.log("Mounted")
  }
)
```

### `createElement`

This function is usedto create a normal Orbiton element that represents a DOM element. It returns an object of type [`OrbitonElement`](#OrbitonElement). This object is also known as a Orbiton Element. Visit the documentation on [Orbiton Element](/docs/the_orbiton_element) to know more on How an orbiton Element looks like.

| Parameters | Type                  | Description                                                                                                                                                                                                             |
| ---------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag        | `string`              | This is the tagname of the element forexample `div`, `input` etc                                                                                                                                                        |
| options    | [`Options`](#Options) | The options param is an objects that includes entries of `attributes`, `events` and `children`. Both attributes and events are objects of strinds and functions respectively. Children is an array of orbiton elements. |

**Usage**

```jsx
import {createElement} from 'orbiton'

const Button = createElement('button', {
  attributes: {
    'class': 'btn-primary',
  },
  children: [
    "Click me"
  ]
})

// Or using jsx

const Button = <button>Click me</button>
```

### `createComponent`

The `createComponent` function is used to create a new Orbiton Component that can be appended to an Orbiton Tree of elements. This function returns an instance of the [`Component`](#Component) class. It can also return an Orbiton Element if the input was a functional component or a variable Component.

| Parameters | Type                                                                                                                | Description                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Component  | [`Component`](#Component) <br /> [`LogicalComponent`](#LogicalComponent) <br /> [`OrbitonElement`](#OrbitonElement) | This is a class or functional component or even just a variable representing an orbiton element.            |
| props      | [`Props`](#Props)                                                                                                   | An object of data that is appended to the component. This object also includes the children of the element. |

```js

import Orbtion, {Component, createComponent } from 'orbiton'

class MyComponent extends Component {
  /// Some code here
}

const tree = createComponent(MyComponent, {
  children: [
    ///....
  ]
  someProps: "some string"
})
// You can now use the append function to append the tree variable to the dom.

```

### `hydrate`

This function hydrates HTML markup and appends events to the HTML as long as the markup provided corresponds to the Orbiton Element or tree provided or was created by it. It is usually used in Severside rendered Apps or Staticaly generated Apps.

| Parameters | Type                                                   | Description                                                                                                         |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| element    | `OrbitonElement` <br /> `Fragement` <br /> `Component` | The vitual node that is created by orbiton. It can be an Element of component or fragment.                          |
| node       | `Node`                                                 | The root node the acts as the parent of the Orbiton App. It is the same as Root in the [`append`](#append) function |

### `render`

The `render` function can be used to turn an Orbiton Element into a DOM element. Or an Array of DOM alamants if a fragment was passed in.
> Note: If you use the render function you must use the `appendChild` function provided by orbiton to apppend the child to the DOM.

### `withComponent`

The `withComponent` function is used to create elements with Logical Components attached to them. it accepts three arguments, `tag`, `Component` and `Options` the Options paramenter is an obyect with evevts, attributes and props. THe evevts and attributes properties are added to the element and the props object is for the props to the Logical cOMPONENT.

Example

```jsx

const div = (
  <div:SomeComponent>
    <h1></h1>
  </div:SomeComponent>
)

/// THe above JSXElement is equivatent to this.

const div = withComponent('div', SomeComponent, {})
```

## Classes

The following are the classes provided by Orbiton.

### Component

Component is the most used class in Orbiton. It is used to create class bassed components and is inherited by any class that wants to act as a component. It also inherits the `BaseCOmponent` and then modifies the `changeState` fucntion by creating the `updtateState` fucntion that adds reactivity to the components.

#### Methods

The methods provided by the Component class include the following.

##### `updateState`

The updateState method is used for updating state in a component and triggers an Updtate int he DOM.

### BaseComponent

THis is the Base Orbiton Component class the adds the functionality of updating a subset of state in a component. It is inherited by both Component and Logical Component Classes.

### LogicalComponent

LogicalComponent is used for creating Logical components. these are components that have there own state, props but dont have the ability to trigger an updtate iN the DOM if state changes.
