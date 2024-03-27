import { getFormattedDate } from '../../src/utils/date';

describe('Integration test', () => {
    // Speed up the 30 seconds timer
    let clock: Cypress.Clock;
    before(() => {
        const now = new Date();
        cy.clock(now).then(c => (clock = c));
    });

    it('Records score', () => {
        const now = new Date();

        cy.visit('http://localhost:3000');

        // Enter name
        cy.findByRole('textbox').click().type('Dave');
        // Click on play
        cy.findByRole('button').click();
        // Click the Fox image
        cy.findByTestId('fox').click();

        cy.pause();

        // Speed up the 30 seconds timer
        clock.tick(30000);
        cy.tick(30000);

        // The scoreboard should be visible
        cy.findByText('Rank');
        cy.findByText('Name');
        cy.findByText('Date');
        cy.findByText('Score');
        cy.findByTestId('rank').contains(1);
        cy.findByText('Dave');
        cy.findByText(getFormattedDate(now));
        cy.findByTestId('score').contains(1);
    });
});
