define(["jquery","wcs.dom-ready","wcs.global-events","foundation.core","foundation.reveal"],function(a,b,c){function d(b){a(".open-dialog-js",b).on("click",function(b){b.preventDefault();var d;d=void 0===a(this).data("width")||a(window).width()<VIEWPORTS.BREAKPOINTS.MOBILE.MAX?"85%":a(this).data("width"),i=i?a(".ui-dialog-content"):a("<div>").dialog({autoOpen:!1,closeText:"X",modal:!0,width:d}).refreshArea(),i.dialog("close"),i.refreshArea("load",a(this).data("href"),function(){i.dialog("open"),a("body").trigger(c.HOPUP_OPENED)})})}function e(b){a(".open-dialog-js",b).off("click")}function f(b){a(".close-dialog-js",b).click(function(b){b.preventDefault(),a(this).closest(".ui-dialog-content").each(function(){a(this).dialog("close")}),a(this).closest(".reveal-modal").each(function(){a(this).foundation("reveal","close")})})}function g(b){a(".title-dialog-js",b).each(function(){var b=a(this);b.closest(".ui-dialog-content").each(function(){var c=a(this);a(this).dialog("option","title",b.html()),a(this).bind("dialogopen",function(){setDialogTitleWidth(c.width(),c.siblings(".ui-dialog-titlebar"))}),b.hide()})})}function h(b,c){if(b&&c){var d=j[c];d||(d=a('<div data-reveal class="reveal-modal '+c+'"></div>'),j[c]=d,a("body").append(d),a(document).foundation("reveal","reflow")),d.foundation("reveal","open",{url:b,close_on_background_click:!0})}}var i,j={};return a(function(){a(".dynamic-modal-js").click(function(b){b.preventDefault(),h(a(this).data("modal-url"),a(this).data("modal-width"))})}),{bindOpenHopupEvent:d,unbindOpenHopupEvent:e,bindCloseHopupEvent:f,bindTitleHopupEvent:g,openDynamicModal:h}});
//# sourceMappingURL=hopup.js.map