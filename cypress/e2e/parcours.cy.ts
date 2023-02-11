describe('Parcours', () => {
	it('should visit the app with a 1920x1080 viewport', () => {
		cy.viewport(1920, 1080);
		cy.visit('http://localhost:3000');
		cy.get('a.logo').should('contain', 'Squal');
		cy.get('nav').should('be.visible');
		cy.get('nav').should('contain', 'Galerie');
		cy.get('nav').should('contain', 'Contact');
	});
	it('should visit the app with a 1280x720 viewport', () => {
		cy.viewport(1280, 720);
		cy.visit('http://localhost:3000');
		cy.get('a.logo').should('contain', 'Squal');
		cy.get('nav').should('be.visible');
		cy.get('nav').should('contain', 'Galerie');
		cy.get('nav').should('contain', 'Contact');
	});
	it('should visit the app with a mobile viewport', () => {
		cy.viewport('iphone-6');
		cy.visit('http://localhost:3000');
		cy.get('a.logo').should('contain', 'Squal');
		cy.get('.menu').click();
		cy.get('nav').should('be.visible');
		cy.get('nav').should('contain', 'Galerie');
		cy.get('nav').should('contain', 'Contact');
	});
});