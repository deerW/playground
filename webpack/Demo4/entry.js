/**
 * Created by leiyouwho on 6/28/16.
 */

// require("!style!css!./style.css")
require("./style.css"); // webpack entry.js bundle.js --module-bind 'css=style!css'
document.write('Hello Webpack');
document.write(require('./module'));
