define(["jquery","spin"],function(a,b){a.fn.spin=function(c,d){return this.each(function(){var e=a(this),f=e.data();f.spinner&&(f.spinner.stop(),delete f.spinner),c!==!1&&(c=a.extend({color:d||e.css("color")},a.fn.spin.presets[c]||c),f.spinner=new b(c).spin(this))})},a.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});
//# sourceMappingURL=jquery.spin.js.map