
function initializeWeglot() {
  Weglot.initialize({
    api_key: "wg_7a45feb531b14eca05abe88b9e0986e26",
    switchers: [
      {
        button_style: {
          full_name: false,
          with_name: false,
          is_dropdown: true,
          with_flags: true,
          flag_type: "circle",
          invert_flags: false,
        },
        location: {
          target: 'div[data-weglot-target="weglot_here"]',
          sibling: null,
        },
      },
    ],
  });

  console.log("Weglot initialized");

}

initializeWeglot();