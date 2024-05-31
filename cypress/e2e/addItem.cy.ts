//  In all my tests I assume the initial state of the app is 3 ToDo items

describe("Add item", () => {
  before(() => {
    cy.visit("https://ram-react-todo.stackblitz.io/");
    localStorage.setItem("confirmedRunPrompt", "true");
    cy.findByText("Things To Do").should("exist");
  });

  it("adds a new item to list", () => {
    //Locate an input field
    cy.findByPlaceholderText("Add New")
      .should("exist")
      .type("Add a new test")
      .type("{enter}");

    // Verify that text input field is cleared when the item is added
    cy.get(".add-todo").should("have.text", "");

    //Verify that number of items in the list changed
    cy.get(".todo-item").should("have.length", 4);

    // Verify that the item was added to the bottom of the list
    cy.get(".todo-item").eq(3).should("contain", "Add a new test");

    // Verify that "items left" counter updated to 4
    cy.findAllByText("4 items left").should("exist");
  });
});
