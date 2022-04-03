# Orbiton Server and Hydration

The Orbiton Server package is a package created by the Orbiton Team for rendering Orbiton Element on the server. Orbiton Server package can run in both Deno and Node. It turn Orbiton Elements into HTML Strings.

## When to use it

You can use Orbiton Server package for the following.

- Building server side Rendered Apps
- Creating Static Site Generators.

> __Note:__ The markup created is just HTML so in order to make is reactive you must use the `hydrate` function that append event listeners and other Orbiton Optimizations to the Markup.

## Installation

Node

```sh
npm install @orbiton/server
```

Deno

```js
import * as OrbitonServer from "https://cdn.jsdelivr.net/npm/@orbiton/server@0.0.2/deno/index.js"
```

## Functions

### `renderToString`

This function transforms an Orbiton Element into an HTML string. It accepts only one parameter, which is the Orbiton Element.

```js
import App from "path/to/app"
import {renderToString} from "@orbiton/server"

const appString = renderToString(<App />);

```

## Hydrating

Hydrating is the process when an Orbiton application is initiated from already existing markup. This markup can be HTML rendered on the Server using `OrbitonServer` or Static HTML that was created by a static site generator. Orbiton will attempt to attach event listeners to the existing markup and add its own optimizations. Orbiton expects that the rendered content is identical between the server and the client.

To use this all you have to do is replace Where you usually add `Orbiton.append` with `hydrate`.

```jsx
import { hydrate } ffrom "orbiton"

hydrate(<h1>Hello world</h1>, document.getElementById("app-root"))
```
