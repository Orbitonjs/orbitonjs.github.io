# CONTRIBUTING GUIDE

This page gives you a detailed guide on how to contribute to Orbiton JS. We start with how to choose what to contribute to then we will guide you on setting up a development environment for Orbiton JS on your local machine. We will also guide you on the different workflows used in development of Orbiton JS.

## Getting Started

Choosing what to contribute to depends you intentions. You might want to solve a bug you have come across, add a new feature, stabilize or improve a certain feature or even you willingly want to participate in the development of Orbiton JS.

The best way to get started with contributing to Orbiton is by visiting the [GitHub repository](https://github.com/Orbitonjs/orbiton) and on the issues tab you can choose an issue with the good first issue label. These issues are easy to solve like a console.log that was forgotten in the source code.
After finding your issue, you can the fork the repository and the clone your fork then move on to the next section.

## Setting up the development environment

To contribute to Orbiton make sure you have the following installed on your machine.

- Node JS
- Yarn
- Git
- Rust Compiler ( If you want to contribute to the wasm module )
- [Wasm Pack](https://rust-wasm.github.io/wasm-pack) ( If you want to contribute to the wasm module )

First, clone your fork. Install all the dependencies required.

```sh
yarn
```

After installing all the dependencies then build all the packages by running

```sh
yarn run build
```

If you are building the Rust module

```sh
wasm-pack build
```

After building then you should link all the packages.

```bash
cd packages/orbiton && yarn link && cd ../server && yarn link && cd ../babel-plugin-orbition-jsx && yarn link && cd ../../ && yarn link orbiton @orbiton/server babel-plugin-orbiton-jsx
```

You can now run the dev server for the demo app to see if everything is okay.

```sh
yarn run dev
```

Or even the ssr version

```sh
# First build the static app
yarn run dev:build

yarn run dev:ssr
```

If you do not meet any error then everything is setup right. You can create a new branch and begin coding.

## Development

During your development, there are certain thing that you have to keep in mind. These include the following

- Tests
- Linting
- Scripts

All your code must be tested so if you are adding a new feature you must write a test for it. In addition, if you are adding some code that might affect the test result make sure to update the tests. Orbiton used jest for testing so make sure to visit the jest documentation before updating or writing tests.

For linting Orbiton Uses Eslint.

> Remember before submitting a pull request you must run the following commands and mmak sure you don’t meet any error

```sh
yarn run lint
yarn test
```

---

Incase you update anything that might change the development process please submit a pull request to update the contributing guide on this [repository](https://github.com/Orbitonjs/orbitonjs.github.io)
