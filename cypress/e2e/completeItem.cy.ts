describe("Complete item", () => {
  beforeEach(() => {
    cy.visit("https://ram-react-todo.stackblitz.io/");
    localStorage.setItem("confirmedRunPrompt", "true");
    cy.findByText("Things To Do").should("exist");
  });

  it("completes an item in the list", () => {
    cy.findByLabelText("Build a React App").click();

    // Verify that "items left" counter updated to 2
    cy.findByText("2 items left").should("exist");

    //Verify that the completed item is displayed inside "Completed" tab
    cy.findByText("Completed").click();
    cy.findByLabelText("Build a React App").should("exist");

    //Verify that the the competed item is not in the list of ToDo items
    cy.findByText("Active").click();
    cy.findByLabelText("Build a React App").should("not.exist");
  });

  it("un-marks an item as completed", () => {
    cy.findByLabelText("Build a React App").click();
    cy.findByText("2 items left").should("exist");

    // Verify that "items left" counter updated to 3
    cy.findByLabelText("Build a React App").click();
    cy.findByText("3 items left").should("exist");

    //Verify that the completed item is not-displayed inside "Completed" tab
    cy.findByText("Completed").click();
    cy.findByLabelText("Build a React App").should("not.exist");

    //Verify that the the competed item is in the list of ToDo items
    cy.findByText("Active").click();
    cy.findByLabelText("Build a React App").should("exist");
  });
});
