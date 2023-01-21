export default describe('Online library project',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })

    it("page loads",()=>{
        cy.contains("Welcome");
    })
})