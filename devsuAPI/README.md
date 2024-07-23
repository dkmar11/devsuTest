
# PetStore User Endpoint API Automation
This project is authored by Israel Zambrana Galvan
as part of a technical assessment for Devsu.
This code is created for the purpose of the assessment only.

This project contains automated tests for the user endpoint of the PetStore API using Cypress.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Usage

### Running Tests

To open the Cypress test runner, use:

```bash
npm start
```

To run the tests in headless mode, use:

```bash
npm test:headless
```

### Generating Reports

To merge the JSON reports into a single file:

```bash
npm run merge-reports
```

To generate the HTML report:

```bash
npm run generate-report
```

## Project Structure

The project structure is as follows:

```
.
├── cypress
│   ├── e2e
│   │   └── api
│   │       └── user
│   │           ├── createUser.cy.ts
│   │           ├── deleteUser.cy.ts
│   │           ├── getUser.cy.ts
│   │           ├── updateUser.cy.ts
│   │           └── userTests.cy.ts
│   ├── fixtures
│   │   ├── createUserSchema.json
│   │   ├── updateUserSchema.json
│   │   ├── getUserSchema.json
│   │   ├── userData.json
│   │   └── userDataUpdated.json
│   ├── support
│   │   ├── commands.ts
│   │   └── index.ts
│   └── reports
├── package.json
└── README.md
```

- **e2e/api/user**: Contains the test files for the user endpoint.
- **fixtures**: Contains the JSON schema files and test data.
- **support**: Contains custom commands and other support files.
- **reports**: Directory where test reports are generated.

## Scripts

- `npm start`: Opens the Cypress test runner.
- `npm test`: Runs the tests.
- `npm test:headless`: Runs the tests in headless mode.
- `npm run merge-reports`: Merges JSON reports into a single file.
- `npm run generate-report`: Generates the HTML report.

## Dependencies

- `cypress`: Framework for writing end-to-end tests.
- `ajv`: JSON schema validator.
- `mochawesome`: Reporter for generating test reports.
- `mochawesome-merge`: Utility for merging multiple mochawesome JSON reports.
- `mochawesome-report-generator`: Utility for generating HTML reports from merged JSON reports.
- `typescript`: Adds TypeScript support.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License.
