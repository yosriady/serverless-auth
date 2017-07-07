# Serverless Auth

> Pangolins are a protected species!

![Pangolins are protected species!](http://i.imgur.com/ReO39.jpg)

This is a serverless authorization example using JSON Web Tokens (JWTs.)
It has three endpoints:

- `GET /cats` is a public endpoint anyone can access.
- `GET /pangolins` is a private endpoint, protected by an AWS Custom Authorizer.
- `POST /sessions` is a login endpoint. Pass a valid username and password in a JSON request body to get a JWT (see `/lib/users.js` for valid combinations.) For example:

```
{
	"username": "Cthon98",
	"password": "hunter2"
}
```

In order to pass the *authentication* check, you will need to supply a valid JWT in your `Authorization` request header when making calls to a protected endpoint.

In order to pass the *authorization* check, you will need a JWT belonging to a user with valid permissions. For this example, the user `Cthon98` is authorized to access `GET /pangolins`; `AzureDiamond` is not.

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
