define(["jquery","wcs.selector-cache","wcs.context","wcs.global-events","pubsub","wcs.promo-carousel"],function(a,b,c,d){a(function(){var e=a(window),f=a(".upper");f.find(".unav-email-sign-up-js").on("click",function(b){var c=a(".footer").find("input.email");b.preventDefault(),a("html, body").animate({scrollTop:c.offset().top},500),c.focus()}),b.get(".nav-shoppingbag-qty-js").each(function(){function b(){e.text(c.getShoppingCart().quantity).css({display:"inline"}),c.getShoppingCart().quantity>0&&WCS_CONFIG.get("cart::showCartOnlyWhenActive")&&(e.closest(".unav-shoppingbag-js").addClass("active active-js"),e.closest(".cart-topbar-js").show())}var e=a(this);a.pubsub("subscribe",d.SHOPCART_UPDATED,b),b()}),b.get(".nav-wishlist-qty-js").each(function(){function b(){a(e).text(c.getWishList().quantity).css({display:"inline"})}var e=this;a.pubsub("subscribe",d.WISHLIST_UPDATED,b),b()}),"R"==c.getUserType()?("1"==c.getLoyaltyOptIn()?(b.get(".unav-loyalty").removeClass("hidden"),b.get(".loyalty-program-points").html(c.getLoyaltyPoints())):b.get(".unav-loyalty-join").removeClass("hidden"),WCS_CONFIG.get("topnav::navHeaderSignInLabelEnabled")===!0&&(myAccountLabel=a(".unav-myaccount-title-js",".unav-myaccount").attr("data-user"),b.get(".unav-myaccount-label-js span",".unav-myaccount").html(myAccountLabel)),WCS_CONFIG.get("topnav::dropdownSignoutMobileEnabled")===!0&&e.width()<VIEWPORTS.BREAKPOINTS.TABLET.MIN&&b.get(".unav-mobile-signout").removeClass("hidden"),b.get(".unav-signing").show(),b.fresh(".unav-myaccount").show()):(WCS_CONFIG.get("topnav::navHeaderSignInLabelEnabled")===!0&&(myAccountLabel=a(".unav-myaccount-label-js",".unav-myaccount").attr("data-guest"),b.get(".unav-myaccount-label-js span",".unav-myaccount").html(myAccountLabel)),b.get(".unav-signing").hide(),b.fresh(".unav-myaccount").show(),b.get(".unav-loyalty-join").removeClass("hidden")),e.on("resize",function(a){WCS_CONFIG.get("topnav::dropdownSignoutMobileEnabled")===!0&&("R"==c.getUserType()&&e.width()<VIEWPORTS.BREAKPOINTS.TABLET.MIN?b.get(".unav-mobile-signout").removeClass("hidden"):"R"==c.getUserType()&&e.width()>VIEWPORTS.BREAKPOINTS.TABLET.MIN&&b.get(".unav-mobile-signout").addClass("hidden"))});var g=a(".loyalty-enrollment .account-registration-js");g.on("submit",function(){g.find("#WC_VFMyAccountRegistrationForm_FormInput_email1_In_Register_1").val(g.find("#WC_VFMyAccountRegistrationForm_FormInput_logonId_In_Register_1").val())})})});
//# sourceMappingURL=global-nav.js.map