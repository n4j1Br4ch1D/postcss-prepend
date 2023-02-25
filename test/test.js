const postcss = require("postcss");
const prepend = require("../index");

function assertEqual(str1, str2, msg) {
  const pluginName = "PostCSS-prepend";
  const mainColor = "\x1b[38;2;99;102;241m%s\x1b[0m";
  str1 === str2
    ? console.log(
        mainColor,
        pluginName,
        "\x1b[32m",
        "Test Success:",
        msg,
        "\x1b[0m"
      )
    : console.error(
        mainColor,
        pluginName,
        "\x1b[31m",
        "Test Failed:",
        msg,
        "\x1b[0m"
      );
}

const css = `
html, body{
    margin: 0;
    background-color: white;
}
.boy{
    color: blue;
}
.girl{
    color: pink;
}
`;

// test1: default options (no art)
const expect1 = `/* © ${new Date().getFullYear()}| All rights reserved. */${css}`;

postcss([prepend()])
  .process(css, { from: undefined })
  .then((result) => {
    assertEqual(result.css, expect1, "Test1: default options (no art)");
  })
  .catch((error) => {
    console.error(error);
  });

// test2: customed options (with art)
const expect2 = `/* 
 _______  __    _  __   __  _______  _______  __    _ 
|   _   ||  |  | ||  |_|  ||       ||       ||  |  | |
|  |_|  ||   |_| ||       ||   _   ||   _   ||   |_| |
|       ||       ||       ||  | |  ||  | |  ||       |
|       ||  _    ||       ||  |_|  ||  |_|  ||  _    |
|   _   || | |   || ||_|| ||       ||       || | |   |
|__| |__||_|  |__||_|   |_||_______||_______||_|  |__|
             © 2023. All rights reserved.
 */${css}`;

postcss([
  prepend({
    name: "ANMOON",
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
])
  .process(css, { from: undefined })
  .then((result) => {
    assertEqual(result.css, expect2, "test2: customed options (with art)");
  })
  .catch((error) => {
    console.error(error);
  });
