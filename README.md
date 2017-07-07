# Serverless Auth

This is a serverless authorization example.

This service has two endpoints:

- `GET /cats` is a public endpoint anyone can access.
- `GET /pangolins` is a private endpoint, protected by an AWS Custom Authorizer.
- `POST /sessions` is a login endpoint. Pass a valid username and password to get a JWT. You can log in by passing the following request JSON body:

```
{
	"username": "Cthon98",
	"password": "hunter2"
}
```

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

### Running locally
```
serverless offline start
```

### Deploy

```
serverless deploy
```
