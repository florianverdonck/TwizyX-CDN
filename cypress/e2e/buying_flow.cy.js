const years = ['PRE2016', 'POST2016'];
const models = ['T45', 'T80'];

describe('Select products', () => {
  
  beforeEach(() => {
    // Visit the website before running each test case
    cy.visit('https://twizyx.com')
  });

  years.forEach(year => {
    models.forEach(model => {
      it(`selects product for ${year} and ${model}`, () => {
        
        // Click on the initial button
        cy.get('#intro-section a[data-element="button"][href="#car-selector"]').click({force: true})

        // Select year
        cy.get(`button.select_year[data-twizy-year="${year}"]`).click({force: true});

        // Select model
        cy.get(`button.select_model[data-twizy-model="${model}"]`).click({force: true});

        // Proceed to the product button and click
        cy.get('a[id^="btn-product-"]:not(.hidden)').click({ force: true });

        // Check if the URL corresponds to the selected year and model
        let expectedYearSegment = undefined;
        switch (year) {
          case "PRE2016":
            expectedYearSegment = "pre-2016";
            break;
          case "POST2016":
            expectedYearSegment = "post-2016";
            break;
        }

        const expectedUrl = `https://www.twizyx.com/${expectedYearSegment}?model=${model}`;
        cy.url().should('eq', expectedUrl);
      });
    });
  });
});

// Dynamically generate URLs based on the years and models
const urls = years.map(year => {
  let yearSegment = undefined;
  switch (year) {
    case "PRE2016":
      yearSegment = "pre-2016";
      break;
    case "POST2016":
      yearSegment = "post-2016";
      break;
  }
  return models.map(model => `https://www.twizyx.com/${yearSegment}?model=${model}`);
}).flat();

describe('Buy products', () => {

  urls.forEach(url => {
    it(`tests the page at ${url}`, () => {

      // Visit the page directly
      cy.visit(url);

      cy.document().then(doc => {
          let styleEl = doc.createElement('style');
          doc.head.appendChild(styleEl);
          styleEl.innerHTML = `
              html {
                  scroll-behavior: auto !important;
              }
          `;
      });
      
      cy.wait(1000)

      // ... Add your assertions or actions here for each page
      cy.get('header a[data-element="button"][href="#buy-section"]').click({ force: true });

      cy.wait(1000)

      cy.get('a[href="#order-form"]').click({ force: true });

      cy.get('#lead_email').type('test-cypress@twizyx.com');

      // Action that triggers the POST request
      cy.get('input#lead_submit').click({ force: true });

      cy.wait(1000);

      cy.url().as('url')
      cy.get('@url').should('include', 'https://checkout.stripe.com')

      // After all the redirections have taken place, assert that the final URL starts with 'https://checkout.stripe.com'
      //cy.location('hostname').should('eq', 'https://checkout.stripe.com')

    });
  });
});