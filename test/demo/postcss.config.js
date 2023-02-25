const prepend = require('../../index');

module.exports = {
  plugins: [
    prepend({
      name: 'ANMOON',
      message: `© ${new Date().getFullYear()}. All rights reserved.`,
      spacesBefore: 13,
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