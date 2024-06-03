# Introdaction:

This repository is a tech challenge for `Clincase` company.
The challenge has two parts:

### Automation challenge

The task was to write automated tests for the [Todo list application](https://ram-react-todo.stackblitz.io/)

The initial state of the application:

- 3 items inside the list
- default tab is "All"

When the user clicks on the item, the item is marked as completed. There is an option to move between `Completed`, `Active`, and `All` tabs.

For this assignment I used Cypress testing framework as I had experience with his tool. Additionally, Cypress is one of the most popular testing framework which has great community support, rich features set, and allows both developers and testers to write different types of tests (`e2e`, `component`, `API`).

#### Running tests

Prerequisites:

- Node.js should be installed on your machine.
- Cypress test framework
- This repository with test

To run test suites type:

```
cd <THIS REPOSITORY>
npm run cy:e2e
```

### Testing strategy challenge (medicamentImportTask)

The task focuses on creating a test strategy for `Medicament inventory CSV importer`. The feature allows to doctors with suitable permissions to import CSV files with medicaments into the system and not inserting them manually.

[The test strategy](./medicamentImportTask/Test_strategy_medicament_import.md) outlines the approach, test techniques, test cases, automation recomendations risks detection and enhancements.
