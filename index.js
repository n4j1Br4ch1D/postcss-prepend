const figlet = require("figlet");

async function generateAsciiArt(name, artOptions) {
  return new Promise((resolve, reject) => {
    figlet.text(name, artOptions, (error, ascii) => {
      if (error) {
        reject(error);
      } else {
        resolve(ascii);
      }
    });
  });
}

const defaultOptions = {
  message: `© ${new Date().getFullYear()}| All rights reserved.`,
  spacesBefore: 0,
  artOptions: {
    font: "Standard",
    width: 60,
    horizontalLayout: "fitted",
    verticalLayout: "fitted",
    whitespaceBreak: false,
  },
};

module.exports = (options = {}) => {
  options = { ...defaultOptions, ...options };
  return {
    postcssPlugin: "prepend",
    Once: async (root, helpers) => {
      let message = options.message;
      if (options.name) {
        art = await generateAsciiArt(options.name, options.artOptions);
        message =
          "\n" + art + "\n" + " ".repeat(options.spacesBefore) + message + "\n";
      }
      const comment = helpers.comment({ text: message });
      root.prepend(comment);
    },
  };
};

module.exports.postcss = true;
