describe("Complete item", () => {
  beforeEach(() => {
    cy.visit("https://ram-react-todo.stackblitz.io/");
    localStorage.setItem("confirmedRunPrompt", "true");
  });

  function item(label) {
    return cy.get("ul .todo-item").contains(label);
  }

  it("Clicking on the item completes it and moves to Complete tab", () => {
    item("Build a React App").click();
    cy.findByText("Completed").click();

    item("Build a React App").should("exist");

    cy.findAllByText("Active").click();
    item("Build a React App").should("not.exist");
  });

  it("Clicks on item un-marks an item as completed", () => {
    item("Build a React App").click();
    cy.findByText("2 items left").should("exist");

    item("Build a React App").click();
    cy.findByText("3 items left").should("exist");

    cy.findByText("Completed").click();
    const completedItemsList = cy.get("ul .todo-item");
    completedItemsList.should("not.exist");
    cy.findByText("There are no items.").should("exist");

    cy.findByText("Active").click();
    item("Build a React App").should("exist");
  });
});
