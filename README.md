# tindev

A dating app for developers.

The Tindev is an app where a developer can register yourself using your GitHub username and choose others developers that you like or not. If the other developer likes you, then you have a match!

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Install

Prerequisites:

Download and install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/).

- First, clone the repository:
```bash
git clone https://github.com/erickmp07/tindev.git
```

- From the directory where the project was cloned, install its dependencies with [`yarn` command](https://classic.yarnpkg.com/en/docs/usage):
```bash
cd tindev/backend
yarn
```

```bash
cd tindev/frontend
yarn
```

```bash
cd tindev/mobile
yarn
```

- Read the instructions to create the database [here](./backend/DBCONFIG.md).

## Usage

First, start the server:
```bash
cd tindev/backend
yarn dev
```

To run the web app:
```bash
cd tindev/fronted
yarn start
```
NOTE: The application can be accessed at [`localhost:3000`](http://localhost:3000).

To run the mobile app, connect a smartphone by USB or run an emulator. Then:
```bash
cd tindev/mobile
yarn android
```

or

```bash
cd tindev/mobile
yarn ios
```

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)
- [Nodemon](https://nodemon.io/)
- [Axios](https://axios-http.com/)
- [CORS](https://github.com/expressjs/cors)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](https://socket.io/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [MongoDB](https://www.mongodb.com/)

## Contributing

PRs and stars are always welcome.

To ask a question, please [contact me](mailto:erimacedo_92@hotmail.com).

## License

Licensed under [MIT](LICENSE) license.