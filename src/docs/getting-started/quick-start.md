# Getting started

If you want to quickly start with Orbiton JS development without having to worry about installation and tooling then this is the page. On this page we will show your how to get a quick orbiton JS project started.

## Requirements
To get started there are a set of requirements needed for the project template to run smoothly.
- Node 14+ (We recommend version 16+ or the latest version)
- npm or yarn installed. (Recommended: yarn)
- Text editor. (Recommended: VS CODE)
- Git (Optional)

>  **Note:** You can download [Node JS](https://nodejs.org) at its website. Npm comes preinstalled with node and to install yarn just run `npm install -g yarn` in your terminal or command prompt.

## Starting a new Project
Starting an new project requires only a few steps

To start a new project run the following command in the terminal
1. **Clone the template**

```sh
npx degit Orbitonjs/template my-app
```
Or your can just clone using Git
```sh
git clone https://github.com/Orbitonjs/template my-app
```
2. **Then install your dependencies**
```bash
cd my-app
npm install
```
3. **Start the dev server**
```bash
# Ignore this command if you dont have VS Code installed
code .
# Starting the development server
npm run start
```
[![Edit orbiton-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/orbitonjs/template/tree/main/?fontsize=14&hidenavigation=1&theme=dark)
## Conclusion
If you want a detailed explanation on installing Orbiton then visit the [Installation Guide](./installation)
