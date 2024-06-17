# REST API with TypeScript

## Overview

This project is a setup for a REST API using TypeScript, featuring automatic generation of `index.ts` files for simplified import/export and seamless integration with `nodemon` for automatic refreshing. This functionality enhances development efficiency by enabling easy file management and quick updates. The project also includes a MongoDB setup, logging with winston, JWT authentication, and validation using Joi.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Features](#features)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/zdnemz/rest-api-setup.git
   ```
2. Navigate to the project directory:
   ```sh
   cd rest-api-setup
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Running the Application

To start the application in development mode, use:

```sh
npm run dev
```

to build the application:

```sh
npm run build
```

To start the application in production mode, use:

```sh
npm start
```

### Automatic Route Generation

When creating or editing a file, an `index.ts` file is automatically generated to manage routing. For example, if you create `src/controllers/user/controller.ts` with the following content:

```typescript
export const sayHello = () => "hello world";
```

You can import `sayHello` easily:

```typescript
import { user } from "@/controllers";
user.sayHello()
```

This feature is integrated with `nodemon`, ensuring that the application refreshes automatically with each change, facilitating rapid development.

## Folder Structure

```plaintext
.
├── __test__            # Test files
├── dist                # Build files
├── logs                # Log files
├── lib                 # Library files
├── public              # Static files
├── node_modules        # Node.js modules
├── src                 # Source files
│   ├── config          # Configuration files
│   ├── controllers     # Controllers
│   ├── middlewares     # Middleware functions
│   ├── routes          # API routes
│   ├── services        # Service layer
│   ├── types           # TypeScript types
│   ├── utils           # Utility functions
│   └── main.ts         # Main application file
├── .babelrc            # Babel configuration
├── .env                # Environment variables
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── jest.config.js      # Jest configuration
├── LICENSE             # License file
├── nodemon.json        # Nodemon configuration
├── package-lock.json   # Package lock file
├── package.json        # Package configuration
├── README.md           # Readme file
├── tsconfig.json       # TypeScript configuration
```

## Configuration

- **.env**: Environment variables configuration.
- **.babelrc**: Babel configuration file.
- **.eslintrc.json**: ESLint configuration file.
- **jest.config.js**: Jest configuration file.
- **nodemon.json**: Nodemon configuration file.
- **tsconfig.json**: TypeScript configuration file.

## Features

### Database

- **MongoDB**: The project is set up to use `MongoDB` for database operations.

### Logging

- **Custom Logger**: A logger is configured using `winston` to handle logging throughout the application.

### Authentication

- **JWT Authentication**: The application is set up to use `JsonWebToken (JWT)` for authentication.

### Validation

- **Joi Validation**: The Validator is set up to use `Joi` for data validation.

## Testing

Run the tests using Jest:

```sh
npm test
```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
