define(["jquery","jquery.spin","jquery-ui"],function(a){function b(b){var c=a("<p>"),d=a("<div>"),e=a("<div>"),f=a("<div>"),g=a("<div>"),h=a("<div>");d.addClass("ui-tooltip-js"),d.css("display","none"),e.addClass("ui-tooltip-content-js"),f.addClass("notice-icon-js"),g.addClass("ui-tooltip-icon-js"),g.append(f),h.addClass("ui-tooltip-msg-js"),h.append(c),e.append(g),e.append(h),d.append(e),b.append(d)}function c(c){c.bind("mouseover",function(d){d.stopPropagation();var e=a(".ui-tooltip-js");e.size()>0&&e.detach(),b(c),e=a(this).find(".ui-tooltip-js");var f=a(this).find("p").text();e.find("p").text(f);var g=a(this).position().left-15,h=a(this).position().top-e.outerHeight(!0);e.css("left",g+"px"),e.css("top",h+"px"),e.fadeIn("slow"),e.bind("mouseover",function(a){a.stopPropagation()})}),c.bind("mouseout",function(b){b.stopPropagation();var c=a(this).find(".ui-tooltip-js");c.fadeOut("slow",function(){c.detach()})})}function d(b,c,d){var e=a("body");c=c.toLowerCase(),e.append('<div class="vfrs-alert-dialog-js"></div>'),e.find(".vfrs-alert-dialog-js").append('<div class="vfrs-dialog-icon-js"><div class="'+c+'-icon-js"></div></div><div class="vfrs-dialog-text-js"><p>'+b+"</p></div>");var f=a(".vfrs-alert-dialog-js").dialog({autoOpen:!1,modal:!0,resizable:!1,buttons:d});f.parent().addClass("ui-alert-dialog-js"),f.bind("dialogclose",function(){f.closest(".ui-alert-dialog-js").detach()}),f.dialog("open")}function e(b,c){var d=a("body"),e=d.find(".page-notification-js");e&&(e.html('<section class="page-messaging-js"><div><p class="message '+c+'">'+b+"</p></div></section>"),i()),window.scrollTo(0,0)}function f(b,c){var d=a("body"),e=d.find(".hopup-notification-js");e&&e.html('<section class="page-messaging-js"><div><p class="message '+c+'">'+b+"</p></div></section>")}function g(){var b=a("body"),c=b.find(".page-notification-js");c&&c.html("")}function h(b){0===a("#loading-spinner").length&&a("body").append('<div id="loading-spinner"><div id="activity-indicator"></div><div class="loading-spinner-text"></div></div>');var c;switch(b){case"s":c=LOADING_INDICATOR_TEXTS.SAVE;break;case"p":c=LOADING_INDICATOR_TEXTS.PROCESS;break;case"u":c=LOADING_INDICATOR_TEXTS.UPDATE;break;default:c=LOADING_INDICATOR_TEXTS.LOAD}a("#loading-spinner .loading-spinner-text").text(c);var d={lines:12,length:12,width:5,radius:18,corners:1,rotate:0,direction:1,speed:1,trail:25,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"};a("#loading-spinner").show(),a("#activity-indicator").spin(d)}function i(){a("#activity-indicator").spin(!1),a("#loading-spinner").hide()}function j(b,c){0===a(c+" .loading-spinner").length&&a(c).append('<div class="loading-spinner"><div class="activity-indicator"></div><div class="loading-spinner-text"></div></div>');var d;switch(b){case"s":d=LOADING_INDICATOR_TEXTS.SAVE;break;case"p":d=LOADING_INDICATOR_TEXTS.PROCESS;break;case"u":d=LOADING_INDICATOR_TEXTS.UPDATE;break;default:d=LOADING_INDICATOR_TEXTS.LOAD}a(c+" .loading-spinner .loading-spinner-text").text(d);var e={lines:12,length:6,width:4,radius:9,corners:1,rotate:0,direction:1,speed:1,trail:25,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"};a(c+" .loading-spinner").show(),a(c+" .activity-indicator").spin(e)}function k(b){a(b+" .activity-indicator").spin(!1),a(b+" .loading-spinner").hide()}return{showToolTip:c,showMessageDialog:d,showPageNotification:e,showHopupNotification:f,clearPageNotification:g,showLoadingNotification:h,hideLoadingNotification:i,showLoadingNotificationByPosition:j,hideLoadingNotificationByPosition:k}});
//# sourceMappingURL=alert.js.map