define(["jquery"],function(a){function b(b){a("#global-body-overlay").on("click",function(){a(".global-cart-wishlist-panels-js .tags .active-js").click()}),j=a(".global-cart-wishlist-panels-js [data-tabcontent-id]"),j.on("click",function(a){a.preventDefault(),l(a)}),b&&b()}var c,d,e,f,g="",h=!1,i=a(".global-cart-wishlist-panels-js").width(),j=a(".global-cart-wishlist-panels-js [data-tabcontent-id]"),k=0;_right=0;var l=function(b){c=a(b.currentTarget),d=c.attr("data-tabcontent-id"),j.removeClass("active active-js").siblings().removeClass("inactive inactive-js"),m(d),n(d),o()},m=function(){if(h){if(!h||d!==g)return e=!1,void(f=!0);h=!1}else h=!0;e=!0,f=!1},n=function(){if(h&&(c.addClass("active active-js"),j.siblings().not(".active-js").addClass("inactive inactive-js"),d!==g)){if(g){var b=a('.global-cart-wishlist-panels-js [data-tabcontent="'+g+'"]').stop();f?b.css({zIndex:1}).animate({left:-i},325):b.css({left:-i,zIndex:1})}g=d;var e=a('.global-cart-wishlist-panels-js [data-tabcontent="'+g+'"]').stop();f?e.css({left:i,zIndex:2}).animate({left:0},325):e.css({left:0,zIndex:2})}},o=function(){var b,c,d,f,g;if(e){var j=a(".bundle-hero-container-js.sticky");j.length>0&&0==k&&(k=parseInt(j.css("left")),_right=parseInt(j.css("right"))),b=h?i:0,c=h?i:0,d=h?"100%":"0%",f=h?90:0,g=h?{width:"100%",height:"100%"}:{position:"relative",width:"auto",height:"auto"},newStickyLeft=h?k-i:k,newStickyRight=h?_right+i:_right,a("body").stop().css(g).animate({left:-1*b},500),a(".global-cart-wishlist-panels-js").stop().animate({right:c},500),a("#global-body-overlay").stop(!0).delay(f).animate({width:d},500),j.stop().animate({left:newStickyLeft,right:newStickyRight},500)}};return{init:b}});
//# sourceMappingURL=right-panel.js.map