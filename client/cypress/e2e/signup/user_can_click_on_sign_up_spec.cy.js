describe("Sign in", () => {
  it("User sees signup button", () => {
    
    cy.visit("/");

    cy.contains("Sign up").should("be.visible")
    
    
    
  });
  it("User sees login button", () => {
    
    cy.visit("/");

    cy.contains("Log in").should("be.visible")
    
    
    
  });
  it("User can click on log in and see the email password inputs", () => {
    
    cy.visit("/");
    cy.contains("Log in").click();


    cy.get("input[name=email]").should("be.visible")
    cy.get("input[name=password]").should("be.visible")

    
    
    
    
  });
});