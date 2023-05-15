// npm i @craco/craco@alpha -D
// npm i normalize.css

const path = require('path');

const resolve = pathname => path.resolve(__dirname, pathname);
module.exports = {
  webpack: {
    alias: {
      "@": resolve('src'),
      "utils": resolve("src/utils")
    }
  }
}