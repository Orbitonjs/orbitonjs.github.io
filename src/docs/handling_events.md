# Handling Events
Handling events with Orbiton elements is very similar to handling events on DOM elements. There are some syntax differences:

If you are using JSX events are named using camelCase, rather than lowercase. But if you are using plain Javascript just add the name of the event. forexample instendof `onClick` just write `click`.
With JSX you pass a function as the event handler, rather than a string.
For example, the HTML:
```js
<button onclick="submitForm()">
  Submit
</button>
```
This is slightly different in Orbiton:
If you are using JSX
```jsx
<button onClick={submitForm}>
  Submit
</button>
```
In Plain Javascript.
```js
Orbiton.createElement(
  'button',
  {
    events: {
      click: submitForm
    },
    children: [
      "Submit"
    ]
  }
)
```
> **Note:** Writing events is JavaScript and JSX is different. If you are adding forexample the cjlick event, In JSX you would have to write `onClick` but for vanilla JS when using the `createElement` function you just write `click`

### Passing Arguments to Event Handlers
Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
The above two lines are equivalent, and use arrow functions and `Function.prototype.bind` respectively.

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
