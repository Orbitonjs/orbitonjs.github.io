
# The Orbiton Element

The orbiton element is a object that acts as a representation of a given DOM element. An Orbiton element is just a normal javascript object and one can create it manually but its more effecient if you use the `createElement` function provided by Orbiton js.

<a href="https://www.interserver.net/r/656116"><img src="https://www.interserver.net/logos/WH_728x90.gif.gif" alt="InterServer Web Hosting and VPS"></a>

## Creating an Orbiton element

Creating an orbiton element is easy. All you have to do is call the `createElement` function and pass in the required parameters. If you are using JSX, just define an normal JSX Element.

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

This will produce the following output.

```js
{
  tag: "button",
  attributes: {},
  events: {},
  children: ["Click Me"],
  type: 'element'
}
```

You can pass The above object in the `render` fuction and this will create a dom Element for you. The above object is a simple example of an orbiton Element but the orbject created by orbiton might be even bigger depending on the use case.

## The `createElement` function

As we said earlier the `createElement` function is used for creating orbiton elements. But we did not indicate how its used.
The function takes in a set of parameterrs and returns an object. The parameters include.

| Parameter | type       | description                                                                                                                                                                                                             |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | `string`   | This is a string that represents the name of the element that your are creating. for example `div`, `input` etc.                                                                                                        |
| options   | `Options?` | The options param is an objects that includes entries of `attributes`, `events` and `children`. Both attributes and events are objects of strinds and functions respectively. Children is an array of orbiton elements. |

```js
const App = createElement('span', {
  attributes: {
    'class': 'btn-group',
  },
  children: [
    createElement('button', {
    attributes: {
      'class': 'btn-primary',
    },
    children: [
      "Click me"
    ],
    events: {
      'click': ()=>{
        alert('clicked')
      }
    }
  })
  ],
})
```

> **Note:** if the child of the Element that you are creating is a TextNode. Then you shuold just add it to children as a string.
