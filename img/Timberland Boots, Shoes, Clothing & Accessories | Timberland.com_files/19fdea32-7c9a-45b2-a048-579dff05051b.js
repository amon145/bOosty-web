			
// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 38736
// Generated on: 1/4/2016 5:45:01 AM (UTC 1/4/2016 11:45:01 AM)



/*browsers exclusion start*/function doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;

    if (--times < 0 && typeof failHandler === 'function') {
        failHandler();
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function () { doOnlyWhen(toDoHandler, toCheckHandler, interval, times); }, interval);
}
doOnlyWhen(function () { var ct_UA = ClickTaleDetectAgent(); if (!(((ct_UA.t == ct_UA.IE && ct_UA.v <= 8)))) { (function(){var c=!0,d=!1,i=this;var j,l,m,o;function p(){return i.navigator?i.navigator.userAgent:null}o=m=l=j=d;var q;if(q=p()){var r=i.navigator;j=0==q.indexOf("Opera");l=!j&&-1!=q.indexOf("MSIE");m=!j&&-1!=q.indexOf("WebKit");o=!j&&!m&&"Gecko"==r.product}var s=j,u=l,v=o,w=m,x;
a:{var y="",z;if(s&&i.opera)var A=i.opera.version,y="function"==typeof A?A():A;else if(v?z=/rv\:([^\);]+)(\)|;)/:u?z=/MSIE\s+([^\);]+)(\)|;)/:w&&(z=/WebKit\/(\S+)/),z)var B=z.exec(p()),y=B?B[1]:"";if(u){var C,D=i.document;C=D?D.documentMode:void 0;if(C>parseFloat(y)){x=""+C;break a}}x=y}var E={};
function F(b){var a;if(!(a=E[b])){a=0;for(var e=(""+x).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=(""+b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),n=Math.max(e.length,f.length),k=0;0==a&&k<n;k++){var t=e[k]||"",L=f[k]||"",M=RegExp("(\\d*)(\\D*)","g"),N=RegExp("(\\d*)(\\D*)","g");do{var g=M.exec(t)||["","",""],h=N.exec(L)||["","",""];if(0==g[0].length&&0==h[0].length)break;a=((0==g[1].length?0:parseInt(g[1],10))<(0==h[1].length?0:parseInt(h[1],10))?-1:(0==g[1].length?0:parseInt(g[1],10))>
(0==h[1].length?0:parseInt(h[1],10))?1:0)||((0==g[2].length)<(0==h[2].length)?-1:(0==g[2].length)>(0==h[2].length)?1:0)||(g[2]<h[2]?-1:g[2]>h[2]?1:0)}while(0==a)}a=E[b]=0<=a}return a}var G={};function H(){G[9]||(G[9]=u&&!!document.documentMode&&9<=document.documentMode)};!u||H();!u||H();u&&F("8");!w||F("528");v&&F("1.9b")||u&&F("8")||s&&F("9.5")||w&&F("528");!v||F("8");function I(b,a,e,f,n){b&&a&&("undefined"==typeof e&&(e=1E3),"undefined"==typeof f&&(f=20),0>--f?"function"===typeof n&&n():a()?b():setTimeout(function(){I(b,a,e,f,n)},e))};function J(b){function a(){e||(e=c,b())}var e=d;if("complete"===document.readyState||"interactive"===document.readyState)a();else{if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,d);else if(document.attachEvent){try{var f=null!=window.frameElement}catch(n){}if(document.documentElement.doScroll&&!f){var k=function(){if(!e)try{document.documentElement.doScroll("left"),a()}catch(b){setTimeout(k,10)}};k()}document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&
a()})}if(window.addEventListener)window.addEventListener("load",a,d);else if(window.attachEvent)window.attachEvent("onload",a);else{var t=window.onload;window.onload=function(){t&&t();a()}}}};function K(b,a){"function"===typeof ClickTaleEvent&&(a?K.b[b]!==c&&(K.b[b]=c,ClickTaleEvent(b)):ClickTaleEvent(b))}K.b={};window.ClickTaleDetectAgent&&window.ClickTaleDetectAgent()&&window.ClickTaleDetectAgent();var O=K;function P(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=c;setTimeout(function(){"undefined"!=typeof window.FSR&&"undefined"!=typeof window.FSR.CPPS&&"undefined"!=typeof window.FSR.CPPS.set&&"function"===typeof ClickTaleGetUID&&null!=ClickTaleGetUID()&&(window.clickTaleLink="http://subs.app.clicktale.com/IntegrationEntry.ashx?Type=Playback&PID="+ClickTaleGetPID()+"&UID="+ClickTaleGetUID()+"&IntegrationToken=3094289fbbcbdeebd12f5ea98db80cc3300489cc",window.FSR.CPPS.set("ClickTaleURL",
window.clickTaleLink),window.FSR.CPPS.set("ClickTaleVisitorID",ClickTaleGetUID()))},7E3);var b=jQuery("#nav-shoppingbag-qty").text();0!=b?O("Onload| Show "+b+" items in cart"):O("Onload| Show Empty Cart");jQuery(".unav-signing:visible").length&&O("Onload| Logged in");jQuery(document).keydown(function(a){13==a.keyCode&&(jQuery("input.email:focus").length&&(O("Action| All Pages: Subscribe - Clicked"),setTimeout(function(){jQuery(".input-wrapper small.error:visible").length&&O("Action| All Pages: Subscribe \ufffd Validation Error")},
300)),jQuery("input.search-input-js:focus").length&&O("Action| All Pages: Search \ufffd Clicked"))});jQuery(document).mousedown(function(a){a=jQuery(a.target);a.closest(".search-input-container").length&&O("Action| All Pages: Interacted with search");a.closest(".search-button").length&&O("Action| All Pages: Search - Clicked",c);a.closest("a[href*=store-locator]").length&&O("Action| All Pages: Find a Store - Clicked",c);a.closest("#btn-myaccount").length&&O("Action| All Pages: MY ACCOUNT - Clicked",
c);a.closest(".email-wrapper button").length&&(O("Action| All Pages: Subscribe - Clicked",c),setTimeout(function(){jQuery(".input-wrapper small.error:visible").length&&O("Action| All Pages: Subscribe - Validation Error",c)},300));a.closest(".social-icon").length&&O("Action| All Pages: FOLLOW Timberland option is clicked",c);a.closest("#btn-shoppingbag").length&&O("Action| All Pages: Cart - Clicked",c);a.closest("#btn_wishlist").length&&O("Action| All Pages: Open Wish List - Clicked",c);a.closest(".cart-actions-item a").length&&
O("Action| Show Cart: Checkout - Clicked",c);a.closest(".tags .cart").length&&O("Action| All Pages: Open Cart on the side - Clicked",c);a.closest(".tags .wishlist").length&&O("Action| All Pages: Open Wish List on the side- Clicked",c);a.closest("a[href*='customer-service/contact-us']").length&&O("Action| All Pages: Clicked on Contact us",c);a.closest("a[href*=tel]").length&&O("Action| All Pages: Clicked on phone number",c)})}}
(function(b){function a(){2==++window.okToStartOn2&&b()}window.okToStartOn2=0;J(function(){a()});if("undefined"!==typeof window.ClickTaleIsRecording&&window.ClickTaleIsRecording()===c)a();else{var e=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){a();return e.apply(this,arguments)}}})(function(){I(P,function(){return window.jQuery&&"function"===typeof jQuery.fn.on?c:d},250,40)});})(); } }, function () { return (typeof ClickTaleDetectAgent === 'function'); }, 500, 20);

