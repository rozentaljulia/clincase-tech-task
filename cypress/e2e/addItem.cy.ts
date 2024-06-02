//  In all my tests I assume the initial state of the app is 3 ToDo items

describe("Add item", () => {
  before(() => {
    cy.visit("https://ram-react-todo.stackblitz.io/");
    localStorage.setItem("confirmedRunPrompt", "true");
  });

  it("Pressing Enter adds a new item to the list", () => {
    const inputField = cy.get(".add-todo");
    inputField.type("Add a new test").type("{enter}");

    inputField.should("have.text", "");

    const todoList = cy.get(".todo-item");
    todoList.should("have.length", 4);

    todoList.should("contain", "Add a new test");

    cy.findByText("4 items left").should("exist");
  });
});
