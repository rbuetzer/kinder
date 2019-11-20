describe("Happy Path", function() {
  it("Vote on some names", function() {
    cy.visit("http://localhost:1234", {
      onBeforeLoad(win) {
        // Make Math.random always return the same value
        // (chosen by fair dice roll, guaranteed to be random)
        cy.stub(win.Math, "random").returns(0.356600268528825);
      }
    });

    cy.contains("Männliche Vornamen Deutschschweiz, 2018").click();

    cy.contains("Adriano").swipe(100, 0);
    cy.contains("Alejandro").swipe(-100, 0);
    cy.contains("Yari").swipe(100, 0);

    cy.get("#menu-button").click();
    cy.contains("Resultate").click();

    cy.get("#app-root").should("include.text", "Adriano100%");
    cy.get("#app-root").should("include.text", "Alejandro0%");
    cy.get("#app-root").should("include.text", "Yari100%");
  });
});
