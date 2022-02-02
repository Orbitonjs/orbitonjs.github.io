
# JSX in Orbiton
JSX is a declarative XML-like syntax that works within JavaScript. It was developed by the [React](https://reactjs.org) team. JSX makes you write HTML like syntax in Javascript. With JSX you can leverage the power of a full programming language (JavaScript) to build your view. This includes temporary variables, flow controls, and directly referencing JavaScript values in scope.

## Why JSX

One might wonder why the Orbiton JS team decided to use JSX a tool that was already popular in the React world. Well, there is quite a good number of reasons why we did so. 
- First of all, Orbiton JS syntax is almost similar to React when creating elements so JSX as a mature tool in the community would be easily integrated into Orbiton.
- As we stated earlier, you can leverage the power of a full programming language (JavaScript) to build your view. This includes temporary variables, flow controls, and directly referencing JavaScript values in scope.
- The tooling support (e.g. linting, type checking, editor autocompletion) for JSX is in some ways more advanced and mature so the team decided to laverage this benefit to make development easy for its developers.

> **Note:** However much JSX in React might be similar to how its used in orbiton. There are some advancements made to syntax that are not supported by React but are available in Orbiton for example Namespaced JSX.

## Transpiling JSX in Orbiton
Since JSX was created for React originally. It seemlessly integrates with react easily. But with orbiton, this is different. How you can transpile JSX to orbiton. The Orbiton team decided to use [babel](https://babeljs.io/) and we created a Babel plugin to transpile it for you.
This babel plugin is called `babel-plugin-orbiton-jsx`. Inorder to use it you should also install the official babel syntax plugin for JSX called `@babel/plugin-syntax-jsx`. 

**Run this command to install it**
```bash
# If you are using NPM
npm install babel-plugin-orbiton-jsx @babel/plugin-syntax-jsx 
# If you are using Yarn
yarn add babel-plugin-orbiton-jsx @babel/plugin-syntax-jsx 
```
After installing the packages go to your babel configuration file and add the plugins.

```json
{
  "plugins": [
    "@babel/plugin-syntax-jsx", 
    "babel-plugin-orbiton-jsx"
    ],
}
```
> You should always add the syntax plugin before `babel-plugin-orbiton-jsx` since it provides babel with the ability to parse JSX.

If you want to learn more about babel, you can visit its [official documentation](https://babeljs.io/).

## Namespaced JSX

In most frameworks that use JSX. A few or none use namespaced JSX and sometiomes this makes it not known to many developers. But Orbiton had some additonal features like [Attached Components]() that made it utilize this feature.
**Code snippet of Namespaced JSX in Orbiton**
```jsx
...
const App = <div:AttachedComp className="root" props={{parent: "div"}}>
  <h1>Hello</h1>
</div:AttachedComp>
```
Note the weird XML syntax `<div:AttachedComp>` in the code, thats namespaced JSX. You can visit the page about [Attached Components]() to Know more about how it works.

Due to conflicts with some normal XML syntax like svg in HTML you can disaple this feature form being used in the plugin by using the `thrownamespaces` option and setting it to true.

```json
{
  "plugins": [
    "@babel/plugin-syntax-jsx", 
    [
      "babel-plugin-orbiton-jsx", 
      {
        "thrownamespaces": true
      } 
    ]
  ],
}
```
