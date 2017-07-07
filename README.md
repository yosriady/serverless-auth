# Serverless Auth

This is a serverless authorization example.

This service has two endpoints:

- `/cats` is a public endpoint anyone can access.
- `/pangolins` is a private endpoint, protected by an AWS Custom Authorizer.

In order to pass the authorization check, you will need to supply a valid token in your `Authorization` request header.

## Setup

### Prerequisites

- Node.js & NPM
- Yarn
- [The Serverless Framework](https://serverless.com/framework/)

### Install dependencies

```
yarn
```

### Running Tests

```
yarn test
```

### Get Test coverage

```
yarn test:coverage
```

### Lint

```
yarn eslint
```

### Deploy

```
serverless deploy
```
