# Introdaction:

This repository is a tech challenge for Clincase company.
The challenge has two parts:

- ### Automation challenge

  The task was to write add and complete item tests for the Todo list application:https://ram-react-todo.stackblitz.io/

  The initianal state of the application is 3 items inside the list.
  When the user clicks on te item- the item marked as completed. There is an option to move between Completed /Active and All tabs.

  For this asasgiment I chosen Cypress testing framework as I had expirience witht his tool. Additionaly, Cypress is one of the most popular testing framework which has greate comunity, features and allows both - developers and testers to write different types of tests (e2e, component, API).

#### Installation

Before running the tests :

1. Node.js should be installed and your machine.
2. `run npm init`
   or a node_modules folder or the root of your project should have package.json file to ensure cypress is installed in the correct directory.
3. run `npm install cypress --save-dev`
4. run `npm run cy:run` (or run this script from package.json)

- ### Testing strategy challenge (medicamentImportTask)

  The task focuses on creating test strategy for Medicament inventory CSV importer.The feature allows to the doctors with a suitable permisions to import big CSV files with medicaments into the system and not inserting it manually.

  The test strategy I present outlines the approach to verifying the functionality of importing medication lists via CSV file, test techniques, test cases, automation recomendations risks detection and enhensments.
