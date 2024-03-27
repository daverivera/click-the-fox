# Click the Fox! Game

This is an implementation of the game "Click the Fox".

• This is a game in the browser • It consists on clicking the fox image as many times as you can within 30 seconds

## Technologies used

-   Typescript
-   React
-   ESLint
-   Redux
-   Redux Persist
-   Material UI
-   Cypress
-   MSW

## Getting started

### Starting the application

1. To run the application all dependencies must be installed:

```bash
$ npm install
```

2. The application runs over the port `3000`. Run the server to be able to access the application through
   [http://localhost:3000](http://localhost:3000) on a browser.

```bash
$ npm run start
```

### Running tests

Having all the dependencies preinstalled (`npm i`), and the server running, the tests can be executed with:

```bash
$ npm run start
$ npm run test
```

Alternatively, starting the server and running the can be both executed at the same time with the command:

```bash
$ npm run ci
```

### Structure

-   `src`: Application code
-   `cypress/e2e`: Integration tests
-   `mocks`: Fixtures and mock server config
