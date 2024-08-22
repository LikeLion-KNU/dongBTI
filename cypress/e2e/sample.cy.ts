describe("cypress 테스트", () => {
    it("test", () => {
        cy.visit("/");
        cy.get("button#increment").should("have.text", "count is 0");
        cy.get("button#increment").click();
        cy.get("button#increment").should("have.text", "count is 1");
    });
});
