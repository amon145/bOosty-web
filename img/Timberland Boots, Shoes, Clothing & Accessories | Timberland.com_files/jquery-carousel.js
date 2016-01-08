!function(a){a.fn.carousel=function(b){var c=a.extend({namespace:"ui-carousel",easing:"swing",bullets:!0,arrowBtns:!0,prevBtnText:"",nextBtnText:"",identifier:"",autoRotate:!1,endless:!0,responsive:!0,maxWidth:void 0,engine:"jquery",animation:"slide",speed:1150},b),d=this,e=null,f=null,g=null,h=null,i=0,j=0,k=0,l=0,m=0,n=!1,o=null,p=function(){this.next=function(a,b){n=!0,b.css("zIndex","4").addClass(c.namespace+"-active"),a.animate({marginLeft:"-100%"},c.speed,c.easing),b.animate({marginLeft:"0%"},c.speed,c.easing,function(){a.css("marginLeft","100%"),n=!1})},this.prev=function(a,b){n=!0,b.css("zIndex","4").addClass(c.namespace+"-active"),a.animate({marginLeft:"100%"},c.speed,c.easing),b.css("marginLeft","-100%"),b.animate({marginLeft:"0%"},c.speed,c.easing,function(){n=!1})}},q=function(){this.next=function(a,b,d){parseInt(a.css("left"))-k;n=!0,d.addClass(c.namespace+"-active"),a.animate({left:"-="+k},c.speed,c.easing,function(){n=!1})},this.prev=function(a,b,d){parseInt(a.css("left"))+k;n=!0,d.addClass(c.namespace+"-active"),a.animate({left:"+="+k},c.speed,c.easing,function(){n=!1})}};return d.init=function(a){d.createMarkUp(a),"slide"===c.animation?o=new p(a):"row"===c.animation&&(o=new q)},d.generateBullets=function(a){var b="";b+='<div class="'+c.namespace+'-bullets-container">',b+='<ol class="'+c.namespace+"-bullets "+c.namespace+'-controls">',b+='<li class="'+c.namespace+'-active" data-bullet-index="0"></li>';for(var d=1;a>d;d++)b+='<li data-bullet-index="'+d+'"></li>';return b+="</ol></div>"},d.createMarkUp=function(a){a.wrap('<div class="'+c.namespace+"-container "+c.identifier+'"></div>'),e=a.parents("."+c.namespace+"-container"),f=a.find("> li"),h=f.eq(0).addClass(c.namespace+"-active"),"row"===c.animation?(k=f.eq(0).width(),j=k*f.length+20,l=f.length,m=-1*(l*k),a.width(j)):(f.css({marginLeft:"100%",marginRight:"0",zIndex:"2"}),h.css({marginLeft:"0",marginRight:"0",zIndex:"4"})),c.arrowBtns&&e.append('<div class="'+c.namespace+"-prev "+c.namespace+'-controls"><span>'+c.prevBtnText+'</span></div><div class="'+c.namespace+"-next "+c.namespace+'-controls"><span>'+c.nextBtnText+"</span></div>"),c.bullets&&(e.append(d.generateBullets(f.length)),g=e.find("."+c.namespace+"-bullets"))},d.resetBulletState=function(){var a=g.find("li");a.removeClass(c.namespace+"-active"),a.eq(0).addClass(c.namespace+"-active"),f.removeClass(c.namespace+"-active"),h.addClass(c.namespace+"-active")},d.updateBullets=function(){var a=c.namespace+"-active";g.find("."+a).removeClass(a),g.find('li[data-bullet-index="'+i+'"]').addClass(a)},d.updateContainerHeight=function(){var a=h,b=a.height();e.find("."+c.namespace+"-next").height(b),e.find("."+c.namespace+"-prev").height(b),e.find("> ul").height(b)},d.updateSlidesMargins=function(){c.maxWidth&&(a(window).width()>=c.maxWidth||!c.endless?(f.removeAttr("style"),f.parent().removeAttr("style")):f.each(function(){a(this).hasClass(c.namespace+"-active")?a(this).css({marginLeft:"0",marginRight:"0"}):a(this).css({marginLeft:"100%",marginRight:"0"})}))},d.updateContainer=function(){"row"!==c.animation?(c.responsive&&d.updateContainerHeight(),d.updateSlidesMargins()):(d.css("left",0),d.resetBulletState(),k=f.eq(0).width(),j=f.length*k+20,d.css("width",j))},d.goToSlide=function(a,b){var h=c.namespace+"-active",j=g.find("."+h).data("bullet-index"),k=e.find("ul ."+h),l=f.eq(a);a>j?(i=a-1,d.nextSlide(b,k,l)):j>a&&(i=a+1,d.prevSlide(b,k,l))},d.nextSlide=function(b,e,f){return n||void 0!==c.maxWidth&&a(window).width()>c.maxWidth?!1:void((c.endless||!c.endless&&l-1>i)&&(e=e||b.find("."+c.namespace+"-active"),f=f||e.next(),f.length<1?(f=b.find("li").eq(0),i=0):i+=1,e.removeClass(c.namespace+"-active"),"slide"==c.animation?(e.css("zIndex","2"),o.next(e,f)):"row"==c.animation&&o.next(b,e,f),c.bullets&&d.updateBullets()))},d.prevSlide=function(b,e,g){return n||void 0!==c.maxWidth&&a(window).width()>c.maxWidth?!1:void((c.endless||!c.endless&&i>0)&&(e=e||b.find("."+c.namespace+"-active"),g=g||e.prev(),g.length<1?(g=f.eq(f.length-1),i=f.length-1):i-=1,e.removeClass(c.namespace+"-active"),"slide"==c.animation?(e.css("zIndex","2"),o.prev(e,g)):"row"==c.animation&&o.prev(b,e,g),c.bullets&&d.updateBullets()))},this.each(function(){var b=a(this);d.init(b),e.on({swiperight:function(a){d.prevSlide(b)},swipeleft:function(a){d.nextSlide(b)}}),e.find("."+c.namespace+"-prev").on({click:function(a){a.preventDefault(),d.prevSlide(b)}}),e.find("."+c.namespace+"-next").on({click:function(a){a.preventDefault(),d.nextSlide(b)}}),e.find("."+c.namespace+"-bullets").on({click:function(c){var e=a(c.target);c.preventDefault(),d.goToSlide(e.data("bullet-index"),b)}}),a(window).on({resize:d.updateContainer,load:d.updateContainer})})}}(jQuery);
//# sourceMappingURL=jquery-carousel.js.map