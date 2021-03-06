import { Button } from "../Components.jsx";

# Writing You first App

On this page you will get a quick guide on how to get started with writing your first Orbiton app.

## Syntax

Writing Orbiton applications using plain JavaScript can be frustrating. Therefore, the team behind Orbiton created tools that would make it possible for you to write code-using syntax that most developers could easily understand. Depending on your development environment, be it in the browser or using node.js, we got you covered.

### In plain JavaScript

This method is not recommended since it is frustrating to write but if you are committed to use it, you can. Most developers use it just for learning purposes in order to learn how different tools compile there syntax to Orbiton functions. It can also be useful if you are an experienced developer or authoring a library.

```js
// Assuming Orbiton is already declared globally

const Button = Orbiton.createElement('button', {
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

Orbiton.append(Button, document.getElementById('root'))
```

[![Edit orbiton-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/orbitonjs/template/tree/main/?fontsize=14&hidenavigation=1&theme=dark)
<Button></Button>

### Using HTM or JSX

[HTM](#) is a library that helps yu to write JSX like sytanx and it compiles it in the browser. [JSX](https://reactjs.org/docs/introducing-jsx.html) is a syntax that was developed by the React team to make building React Applications easier. The Orbiton team decided to use these tools since they are widely supported in the JavaScript ecosystem and this would make developing easy.

__Example in JSX__

```jsx
const Button = <button onClick={() => { alert('Clicked') } } >Click me</button>

Orbiton.append(Button, document.getElementById('root'))
```

__Example in HTM__

```jsx

const Button = html`<button onClick={() => {
  alert('Clicked')
} } >Click me</button>`

Orbiton.append(Button, document.getElementById('root'))
```

> __Note:__ If you are going to use JSX you need to use Babel and a babel plugin for code transformation since JSX is not valid javascript and therefore is not supported by any browser.
