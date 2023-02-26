const prepend = require('../../index');

module.exports = {
  plugins: [
    prepend({
      message: `© ${new Date().getFullYear()}. All rights reserved.`,
      spacesBefore: 13,
      name: 'ANMOON',
      artOptions: {
        font: "Modular",
        width: 60,
        horizontalLayout: "fitted",
        verticalLayout: "fitted",
        whitespaceBreak: false,
      },
    }),
  ],
};