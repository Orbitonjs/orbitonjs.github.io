# Library Reference

On this page we give you a detailed explanaton to each and everything that Orbiton makes available for your usage. We shall explain to you Functions (and their parameters), classes, variables, class methods, objects and types that are included in the Orbiton JS Library.
Note that the functions on this page are not ordered in any specific form of ordering so use the search bar on the side of this page to find the specific function that you are looking for. You can also search throught the table of contents to find what your are looking for.

# Fuctions

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

