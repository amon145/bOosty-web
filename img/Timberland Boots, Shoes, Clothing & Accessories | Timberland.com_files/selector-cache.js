define(["jquery"],function(a){return function(a,b){var c={};$$=function(d,e){var f;if(f=e!==b?c[e]:c[d],f!==b){if(e!==b){if(0===c[e].length)return $$.fresh(d,e)}else if(0===c[d].length)return $$.fresh(d);return f}return e!==b?c[e]=a(d,e):c[d]=a(d)},$$.clear=function(a,d){d!==b?c[d]=b:c[a]=b},$$.fresh=function(a,d){return d!==b?(c[d]=b,$$(a,d)):(c[a]=b,$$(a))},$$.init=function(){c={}}}(jQuery),{get:$$,clear:$$.clear,fresh:$$.fresh,init:$$.init}});
//# sourceMappingURL=selector-cache.js.map