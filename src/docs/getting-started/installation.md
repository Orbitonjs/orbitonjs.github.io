# Installation

It is easy to install Orbiton JS. You can install Orbiton in any environment, whether using Node or in the Browser.

<a href="https://www.interserver.net/r/656116"><img src="https://www.interserver.net/logos/WH_728x90.gif.gif" alt="InterServer Web Hosting and VPS" /></a>

## Adding CDN links.

Orbiton JS prefers usage of [jsDeliver](https://jsdeliver.com) as the default CDN for adding Orbiton to your website. In case you want to quickly, get started in your browser. Add a script tag with the following links.
```html
<!-- If you are in development mode -->
<script src="https://cdn.jsdeliver.net/npm/orbiton/umd/orbitonjs.development.js" crossorigin></script>
<!-- For production use the optimized and minified version  -->
<script src="https://cdn.jsdeliver.net/npm/orbiton/umd/orbitonjs.production.min.js" crossorigin></script>
```
The above scripts provide you with the latest version released yet but in case you want a specific version then you have to add `@version` right after `/npm/orbiton` in the URL that in in the `src` attribute. For example if you want version `1.2.4`
```html
<script src="https://cdn.jsdeliver.net/npm/orbiton@1.2.4/umd/orbitonjs.development.js" crossorigin></script>
```

## Installing in Node

If your plan on using Node due its wonderfull tools like webpack then you have to just run.
```sh
npm install orbiton
# If you areusing yarn 
yarn add orbiton
```

