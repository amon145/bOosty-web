define(function(){"use strict";var a;return a=function(a){return a&&"object"==typeof a?window.Promise&&a instanceof Promise?!0:"function"==typeof a.then:!1},{load:function(b,c,d){c([b],function(b){var c,e,f;c=function(){d.error.apply(null,arguments)},e=function(){d.apply(null,arguments)},a(b)?(f=b.done||b.then,"function"==typeof b.fail?(f.call(b,e),b.fail(c)):f.call(b,e,c)):d(b)})}}});
//# sourceMappingURL=requirejs-promise.js.map