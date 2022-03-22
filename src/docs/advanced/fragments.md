# Fragments

Fragments let you group a list of children without adding extra nodes to the DOM. They act as a wrapper element over a group of elements.

Fragments in Orbiton just have two rules.

- A fragment must always have a child element.
- The child of a fragment must not be a string.

Because Orbiton and JSX require you to always return one element that hosts the whole App, in some situations you dont want this, you instead want to return a group of elements and this is where fragments come in.

## Usage

To use fragments you have to import the fragment component.

```jsx
import {Fragment} from "orbiton"

const App = (
  <Fragment>
    <h1> My App</h1>
    <div>...</div>
    <div>...</div>
  </Fragment>
)

```

You can also use the new SHort syntax.

```jsx
import {Fragment} from "orbiton"

const App = (
  <>
    <h1> My App</h1>
    <div>...</div>
    <div>...</div>
  </>
)

```
