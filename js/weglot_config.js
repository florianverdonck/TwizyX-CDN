
function initializeWeglot() {
  Weglot.initialize({
    api_key: "wg_7a45feb531b14eca05abe88b9e0986e26",
    switchers: [
      {
        // Same as button_style at root
        button_style: {
          full_name: false,
          with_name: false,
          is_dropdown: true,
          with_flags: true,
          flag_type: "circle",
          invert_flags: false,
        },
        // Move switcher somewhere in the page
        location: {
          target: "#weglot-here", // You'll probably have to change it (see the step below in order to find the correct CSS selector)
          sibling: null,
        },
      },
    ],
  });

  Weglot.on("initialized", function () {

    let currentLang = Weglot.getCurrentLang();

    /*
    CRISP_RUNTIME_CONFIG = {
      locale : currentLang
    };

    window.$crisp=[];window.CRISP_WEBSITE_ID="313767f1-527d-4488-a1a8-17d41ad0f240";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
    */
  });

}

initializeWeglot();

/*
// jQuery when document ready  
$(document).ready(function () {
  if (initializeWeglot()) {
    const translateFAQItem = function (faqItem) {
      let question = $(faqItem).find('h1[data-mappedto="Question"]');
      let reponse = $(faqItem).find('div[data-mappedto="Réponse"]');
  
      translateTextOf(question);
      translateTextOf(reponse);
    };
  
    function translateTextOf(node) {
      let initialValue = $(node).text();
  
      Weglot.translate(
        {
          words: [{ t: 1, w: initialValue }],
          languageTo: Weglot.getCurrentLang(),
        },
        function (data) {
          console.log(data);
          $(node).text(data);
        }
      );
    }
  
    $.initialize(
      "#faq-section div.sw-js-single-item-container div.js-list-item",
      function () {
        translateFAQItem($(this));
      }
    );
  }
});

*/


