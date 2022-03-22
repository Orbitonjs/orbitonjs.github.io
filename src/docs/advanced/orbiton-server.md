# Orbiton Server

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
import * as OrbitonServer from "https://jsdeliver.com/"
```

## Functions

### `renderToString`

This function transforms an Orbiton Element into an HTML string. It accepts only one parameter, which is the Orbiton Element.

```js
import App from "path/to/app"
import {renderToString} from "@orbiton/server"

const appString = renderToString(<App />);

```
