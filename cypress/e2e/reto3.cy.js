
describe('Pruebas en hotels', () => {
    beforeEach(() => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log:false })
      cy.visit('https://hotels-seven.vercel.app/');
    });
    
    it("Verificar card iniciales", () => {
      cy.wait(3000);
      cy.get(".card").should("have.length.gt", 0);
    });
    
    it("filtrar las tarjetas por precio y verificar las tarjetas ", () => {
      cy.get("#filter-prices").select("4");
      cy.wait(3000);
      cy.get(".card").each((card) => {
        cy.wrap(card).find(".hotel-price").should("have.text", "$$$$");
      });
    });

    it("limpiar los filtros", () => {
      cy.get(".Filter__Clear").click();
      cy.wait(2000);

      cy.get(".card").should("have.length.gt", 0);
    });
  });