# :copyright: postcss-prepend

- :date:**19-22-2023** :pushpin:**Version 1.0.6**
- :computer:<a href="https://github.com/n4j1Br4ch1D" target="_blank" title="NajibRachid: Agile full-stack developer">NajibRachid</a> :purple_circle:<a href="https://anmoonweb.com/?ref=postcss-prepend" target="_blank" title="ANMOON: Right talents at the right place ">ANMOON</a> :office: <a href="https://x-hub.io/?ref=anmoon-postcss-prepend" target="_blank" title="XHUB: For Developers By Developers">XHUB</a>

A simple PostCSS plugin that prepends a comment to the top of your CSS files.

This plugin allows you to prepend a comment to your CSS files containing text such as copyrights, author information, or any other message you want to display. Additionally, you can choose to add a custom ASCII Art generated from any text using the Figlet library.

**keywords:** _CSS Prepend, PostCSS, CSS prepender, PostCSS plugin, production CSS files, CSS Copyrights, Code customization, CSS customization, CSS comments, ASCII Art, Figlet, Code formatting, CSS preprocessing, Build tools, MIT License, licensing, author information, on top of CSS File, begining of css file, Prepend Comment to CSS file, PostCSS comment prepend, Code Protection._

**Check Also:** <a href="https://github.com/n4j1Br4ch1D/postcss-obfuscator" target="_blank" title="postcss-obfuscator: HTML/CSS Obfuscation Compiling">PostCSS-Obfuscator</a> | <a href="https://github.com/n4j1Br4ch1D/postcss-mobile-first" target="_blank" title="postcss-mobile-first:converts your desktop-first CSS code to mobile-first CSS code.">PostCSS-mobile-first</a>

---

## Installation

```sh
# npm
npm install postcss-prepend-plugin --save-dev
```

```sh
# yarn
yarn add postcss-prepend-plugin --dev
```

## Usage

To use the plugin, first import it into your PostCSS configuration file:

```js
//postcss.config.js
const prepend = require("postcss-prepend-plugin");

module.exports = {
  plugins: [
    // Add any other plugins you need here
    prepend(options), //pass options
  ],
};
```

## Examples

Here's some examples of how you can use postcss-prepend to add a comment to your CSS files:

### Comment only

For message only, you only specify the message attribute.

```js
prepend({message: `© ${new Date().getFullYear()}|ANMOON All rights reserved.`}),
```

After running your CSS through postcss-prepend, the resulting file will look like this:

```css
/* © 2023|ANMOON All rights reserved. */
body {
  /* ... */
}
/* ... */
```

### Comment with ASCII Art

To generate an ASCII Art specify these arguments, we use <a href="https://github.com/patorjk/figlet.js" target="_blank" title="figletJs">figletJs</a> Js to generate ASCII Art. so check all variants there.

```js
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
```

Once you've processed your CSS using postcss-prepend, your resulting file will have a comment added to the top after the ASCII Art, like this:]

```css
/* 
 _______  __    _  __   __  _______  _______  __    _ 
|   _   ||  |  | ||  |_|  ||       ||       ||  |  | |
|  |_|  ||   |_| ||       ||   _   ||   _   ||   |_| |
|       ||       ||       ||  | |  ||  | |  ||       |
|       ||  _    ||       ||  |_|  ||  |_|  ||  _    |
|   _   || | |   || ||_|| ||       ||       || | |   |
|__| |__||_|  |__||_|   |_||_______||_______||_|  |__|
             © 2023. All rights reserved.
 */
body {
  /* ... */
}
/* ... */
```

## npm scripts example

```json
    "postcss": "postcss src/**/*.css  --dir build",
    "postcss:watch": "postcss src/**/*.css --dir build --watch"
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

Tests included:

```sh
   npm test
```

### License

This project is licensed under the MIT License. See the LICENSE file for more information.
