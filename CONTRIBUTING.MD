# Contributing
This page will help you understand how to contribute to the Orbiton Documentation Website. You will also understand the project structure, scripts and tools used to build the website.

## Getting Started
Inorder to contributeto the documentatio first you must fork this repository. Then clone your fork.

**Requirements**
- Node version 14 or later
- Yarn

If you have the above requirements the you are ready to go.

## Development
After cloning it. Then run the following commands to install the dependecies and start the development server.

```sh
yarn

yarn run start
```

If the server starts without errors thaen you are good to go🚀.

#### Project Structure

The project structure of the repository is quite simple but the location of each element is critical.

When you have cloned the repository installed all dependecies you will have such a structure simmilar to this.
```txt
~ |
  |- .config
  |- .github
  |- .vscode
  |- node_modules
  |- src
  |- static

Files have been ignored
```

Next lets explain What each folder represents and its use.

##### .config

This folder contains configuration files used in development. Some examples like webpack configuration files. You can adjust files in this folder inorder to add new features to the development environment or even to the website itself.
> **Note:** If you make a change that affects the project structure please add an explained detail in the Contributing guide of the project.

##### .github
This folder is for github configurations

##### .vscode
For Visual Studio Code cofigurations

##### src
This is the most crutial directory is the project it contains the source code for the documentation.

