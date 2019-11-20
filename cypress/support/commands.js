Cypress.Commands.add("swipe", { prevSubject: "element" }, (subject, x, y) => {
  cy.wrap(subject)
    .trigger("mousedown", { which: 1 })
    .trigger("mousemove", { movementX: x, movementY: y })
    .trigger("mouseup", { force: true });
});
