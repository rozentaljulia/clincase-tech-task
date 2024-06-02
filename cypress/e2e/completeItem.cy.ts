describe("Complete item", () => {
  beforeEach(() => {
    cy.visit("https://ram-react-todo.stackblitz.io/");
    localStorage.setItem("confirmedRunPrompt", "true");
  });

  it("Clicking on the item completes it and moves to Complete tab", () => {
    cy.findByLabelText("Build a React App").click();

    cy.findByText("2 items left").should("exist");

    cy.findByText("Completed").click();
    cy.findByLabelText("Build a React App").should("exist");

    cy.findByText("Active").click();
    cy.findByLabelText("Build a React App").should("not.exist");
  });

  it("un-marks an item as completed", () => {
    cy.findByLabelText("Build a React App").click();
    cy.findByText("2 items left").should("exist");

    cy.findByLabelText("Build a React App").click();
    cy.findByText("3 items left").should("exist");

    cy.findByText("Completed").click();
    cy.findByLabelText("Build a React App").should("not.exist");

    cy.findByText("Active").click();
    cy.findByLabelText("Build a React App").should("exist");
  });
});
