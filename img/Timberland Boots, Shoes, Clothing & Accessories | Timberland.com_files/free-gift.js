define(["jquery","wcs.context","wcs.global-events","wcs.utils","wcs.hopup"],function(a,b,c,d,e){function f(b){b||(b=a("#freeGiftModal"));var c=b.find("#updateRewardChoicesForm");$actionButtons=a(".button",b),$giftItemBlocks=a(".gift-item-block-js",b),$giftItemBlocks.unbind("click"),$giftItemBlocks.on("click",function(b){$actionButtons.removeClass("disabled"),$giftItemBlocks.removeClass("selected");var c=a(this);c.find('input[name="freeGift"]').prop("checked",!0),c.addClass("selected"),i=!1}),$actionButtons.unbind("click"),$actionButtons.on("click",function(b){b.preventDefault();var d=a('input[name="orderId"]',c).val(),e=($giftItemBlocks.length,a(this).data("action")),f=a("#isShopCart").val();return i&&""!=g(d)?!0:void("addFreeGift"==e?($giftItemBlocks.each(function(){var b=a(this),c=b.find('input[name="freeGift"]');if(c.prop("checked")){var d=b.data("catalog-entry-id"),e=b.data("gift-item-quantity");a("<input>").attr({type:"hidden",name:"catEntryId",value:d}).appendTo("#updateRewardChoicesForm"),a("<input>").attr({type:"hidden",name:"quantity",value:e}).appendTo("#updateRewardChoicesForm")}}),"true"!=f?(a.post("/webapp/wcs/stores/servlet/AjaxOrderChangeServiceRewardOptionUpdate",a("#updateRewardChoicesForm").serialize(),function(b){h(d),a.pubsub("publish","SHOPCART_UPDATED","add")}),a(".close-dialog-js").trigger("click"),a(".cart-js").trigger("click")):(h(d),a("#updateRewardChoicesForm").submit())):"noFreeGift"==e&&(h(d),a(".close-dialog-js").trigger("click"),"false"==f&&a(".cart-js").trigger("click")))})}function g(a){for(var b="allowFreeGifts_"+a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){var e=c[d].trim();if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""}function h(a){document.cookie="allowFreeGifts_"+a+"=false;path=/"}var i=!0;return{init:f}});
//# sourceMappingURL=free-gift.js.map