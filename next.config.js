const withCSS = require('@zeit/next-css');
const withImages = require('next-images')
module.exports = withCSS(withImages());
// module.exports = {
//     devIndicators: {
//       autoPrerender: false
//     }
//   };