!function(a){function b(){var a=h();a!==i&&(i=a,l.trigger("orientationchange"))}function c(b,c,d,e){var f=d.type;d.type=c,a.event.dispatch.call(b,d,e),d.type=f}a.attrFn=a.attrFn||{};var d=navigator.userAgent.toLowerCase(),e=d.indexOf("chrome")>-1&&(d.indexOf("windows")>-1||d.indexOf("macintosh")>-1||d.indexOf("linux")>-1)&&d.indexOf("mobile")<0&&d.indexOf("android")<0,f={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in window&&!e,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in window&&!e?"touchstart":"mousedown",endevent:"ontouchstart"in window&&!e?"touchend":"mouseup",moveevent:"ontouchstart"in window&&!e?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!e?"tap":"click",scrollevent:"ontouchstart"in window&&!e?"touchmove":"scroll",hold_timer:null,tap_timer:null};a.isTouchCapable=function(){return f.touch_capable},a.getStartEvent=function(){return f.startevent},a.getEndEvent=function(){return f.endevent},a.getMoveEvent=function(){return f.moveevent},a.getTapEvent=function(){return f.tapevent},a.getScrollEvent=function(){return f.scrollevent},a.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(b,c){a.fn[c]=function(a){return a?this.on(c,a):this.trigger(c)},a.attrFn[c]=!0}),a.event.special.tapstart={setup:function(){var b=this,d=a(b);d.on(f.startevent,function(a){if(d.data("callee",arguments.callee),a.which&&1!==a.which)return!1;var e=a.originalEvent,g={position:{x:f.touch_capable?e.touches[0].screenX:a.screenX,y:f.touch_capable?e.touches[0].screenY:a.screenY},offset:{x:f.touch_capable?e.touches[0].pageX-e.touches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?e.touches[0].pageY-e.touches[0].target.offsetTop:a.offsetY},time:Date.now(),target:a.target};return c(b,"tapstart",a,g),!0})},remove:function(){a(this).off(f.startevent,a(this).data.callee)}},a.event.special.tapmove={setup:function(){var b=this,d=a(b);d.on(f.moveevent,function(a){d.data("callee",arguments.callee);var e=a.originalEvent,g={position:{x:f.touch_capable?e.touches[0].screenX:a.screenX,y:f.touch_capable?e.touches[0].screenY:a.screenY},offset:{x:f.touch_capable?e.touches[0].pageX-e.touches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?e.touches[0].pageY-e.touches[0].target.offsetTop:a.offsetY},time:Date.now(),target:a.target};return c(b,"tapmove",a,g),!0})},remove:function(){a(this).off(f.moveevent,a(this).data.callee)}},a.event.special.tapend={setup:function(){var b=this,d=a(b);d.on(f.endevent,function(a){d.data("callee",arguments.callee);var e=a.originalEvent,g={position:{x:f.touch_capable?e.changedTouches[0].screenX:a.screenX,y:f.touch_capable?e.changedTouches[0].screenY:a.screenY},offset:{x:f.touch_capable?e.changedTouches[0].pageX-e.changedTouches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?e.changedTouches[0].pageY-e.changedTouches[0].target.offsetTop:a.offsetY},time:Date.now(),target:a.target};return c(b,"tapend",a,g),!0})},remove:function(){a(this).off(f.endevent,a(this).data.callee)}},a.event.special.taphold={setup:function(){var b,d=this,e=a(d),g={x:0,y:0},h=0,i=0;e.on(f.startevent,function(a){if(a.which&&1!==a.which)return!1;e.data("tapheld",!1),b=a.target;var j=a.originalEvent,k=Date.now(),l={x:f.touch_capable?j.touches[0].screenX:a.screenX,y:f.touch_capable?j.touches[0].screenY:a.screenY},m={x:f.touch_capable?j.touches[0].pageX-j.touches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?j.touches[0].pageY-j.touches[0].target.offsetTop:a.offsetY};return g.x=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,g.y=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY,h=g.x,i=g.y,f.hold_timer=window.setTimeout(function(){var n=g.x-h,o=g.y-i;if(a.target==b&&(g.x==h&&g.y==i||n>=-f.tap_pixel_range&&n<=f.tap_pixel_range&&o>=-f.tap_pixel_range&&o<=f.tap_pixel_range)){e.data("tapheld",!0);var p=Date.now(),q={x:f.touch_capable?j.touches[0].screenX:a.screenX,y:f.touch_capable?j.touches[0].screenY:a.screenY},r={x:f.touch_capable?j.touches[0].pageX-j.touches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?j.touches[0].pageY-j.touches[0].target.offsetTop:a.offsetY};duration=p-k;var s={startTime:k,endTime:p,startPosition:l,startOffset:m,endPosition:q,endOffset:r,duration:duration,target:a.target};e.data("callee1",arguments.callee),c(d,"taphold",a,s)}},f.taphold_threshold),!0}).on(f.endevent,function(){e.data("callee2",arguments.callee),e.data("tapheld",!1),window.clearTimeout(f.hold_timer)}).on(f.moveevent,function(a){e.data("callee3",arguments.callee),h=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,i=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY})},remove:function(){a(this).off(f.startevent,a(this).data.callee1).off(f.endevent,a(this).data.callee2).off(f.moveevent,a(this).data.callee3)}},a.event.special.doubletap={setup:function(){var b,d,e,g,h,i=this,j=a(i),k=!1;j.on(f.startevent,function(a){return a.which&&1!==a.which?!1:(j.data("doubletapped",!1),b=a.target,j.data("callee1",arguments.callee),g=a.originalEvent,e={position:{x:f.touch_capable?g.touches[0].screenX:a.screenX,y:f.touch_capable?g.touches[0].screenY:a.screenY},offset:{x:f.touch_capable?g.touches[0].pageX-g.touches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?g.touches[0].pageY-g.touches[0].target.offsetTop:a.offsetY},time:Date.now(),target:a.target},!0)}).on(f.endevent,function(a){var g=Date.now(),l=j.data("lastTouch")||g+1,m=g-l;if(window.clearTimeout(d),j.data("callee2",arguments.callee),m<f.doubletap_int&&a.target==b&&m>100){j.data("doubletapped",!0),window.clearTimeout(f.tap_timer);var n={position:{x:f.touch_capable?a.originalEvent.changedTouches[0].screenX:a.screenX,y:f.touch_capable?a.originalEvent.changedTouches[0].screenY:a.screenY},offset:{x:f.touch_capable?a.originalEvent.changedTouches[0].pageX-a.originalEvent.changedTouches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?a.originalEvent.changedTouches[0].pageY-a.originalEvent.changedTouches[0].target.offsetTop:a.offsetY},time:Date.now(),target:a.target},o={firstTap:e,secondTap:n,interval:n.time-e.time};k||c(i,"doubletap",a,o),k=!0,h=window.setTimeout(function(a){k=!1},f.doubletap_int)}else j.data("lastTouch",g),d=window.setTimeout(function(a){window.clearTimeout(d)},f.doubletap_int,[a]);j.data("lastTouch",g)})},remove:function(){a(this).off(f.startevent,a(this).data.callee1).off(f.endevent,a(this).data.callee2)}},a.event.special.singletap={setup:function(){var b=this,d=a(b),e=null,g=null,h={x:0,y:0};d.on(f.startevent,function(a){return a.which&&1!==a.which?!1:(g=Date.now(),e=a.target,d.data("callee1",arguments.callee),h.x=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,h.y=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY,!0)}).on(f.endevent,function(a){d.data("callee2",arguments.callee),a.target==e&&(end_pos_x=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.pageX,end_pos_y=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageY:a.pageY,f.tap_timer=window.setTimeout(function(){if(!d.data("doubletapped")&&!d.data("tapheld")&&h.x==end_pos_x&&h.y==end_pos_y){var e=a.originalEvent,i={position:{x:f.touch_capable?e.changedTouches[0].screenX:a.screenX,y:f.touch_capable?e.changedTouches[0].screenY:a.screenY},offset:{x:f.touch_capable?e.changedTouches[0].pageX-e.changedTouches[0].target.offsetLeft:a.offsetX,y:f.touch_capable?e.changedTouches[0].pageY-e.changedTouches[0].target.offsetTop:a.offsetY},time:Date.now(),target:a.target};i.time-g<f.taphold_threshold&&c(b,"singletap",a,i)}},f.doubletap_int))})},remove:function(){a(this).off(f.startevent,a(this).data.callee1).off(f.endevent,a(this).data.callee2)}},a.event.special.tap={setup:function(){var b,d,e=this,g=a(e),h=!1,i=null,j={x:0,y:0};g.on(f.startevent,function(a){return g.data("callee1",arguments.callee),a.which&&1!==a.which?!1:(h=!0,j.x=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,j.y=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY,b=Date.now(),i=a.target,d=a.originalEvent.targetTouches?a.originalEvent.targetTouches:[a],!0)}).on(f.endevent,function(a){g.data("callee2",arguments.callee);var k,l=a.originalEvent.targetTouches?a.originalEvent.changedTouches[0].pageX:a.pageX,m=a.originalEvent.targetTouches?a.originalEvent.changedTouches[0].pageY:a.pageY,n=j.x-l,o=j.y-m;if(i==a.target&&h&&Date.now()-b<f.taphold_threshold&&(j.x==l&&j.y==m||n>=-f.tap_pixel_range&&n<=f.tap_pixel_range&&o>=-f.tap_pixel_range&&o<=f.tap_pixel_range)){for(var p=a.originalEvent,q=[],r=0;r<d.length;r++){var s={position:{x:f.touch_capable?p.changedTouches[r].screenX:a.screenX,y:f.touch_capable?p.changedTouches[r].screenY:a.screenY},offset:{x:f.touch_capable?p.changedTouches[r].pageX-p.changedTouches[r].target.offsetLeft:a.offsetX,y:f.touch_capable?p.changedTouches[r].pageY-p.changedTouches[r].target.offsetTop:a.offsetY},time:Date.now(),target:a.target};q.push(s)}switch(d.length){case 1:k="tap";break;case 2:k="tap2";break;case 3:k="tap3";break;case 4:k="tap4"}c(e,k,a,q)}})},remove:function(){a(this).off(f.startevent,a(this).data.callee1).off(f.endevent,a(this).data.callee2)}},a.event.special.swipe={setup:function(){function b(b){h=a(b.target),h.data("callee1",arguments.callee),k.x=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageX:b.pageX,k.y=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageY:b.pageY,l.x=k.x,l.y=k.y,i=!0;var c=b.originalEvent;e={position:{x:f.touch_capable?c.touches[0].screenX:b.screenX,y:f.touch_capable?c.touches[0].screenY:b.screenY},offset:{x:f.touch_capable?c.touches[0].pageX-c.touches[0].target.offsetLeft:b.offsetX,y:f.touch_capable?c.touches[0].pageY-c.touches[0].target.offsetTop:b.offsetY},time:Date.now(),target:b.target}}function c(b){h=a(b.target),h.data("callee2",arguments.callee),l.x=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageX:b.pageX,l.y=b.originalEvent.targetTouches?b.originalEvent.targetTouches[0].pageY:b.pageY;var c,d=h.data("xthreshold"),g=h.data("ythreshold"),m="undefined"!=typeof d&&d!==!1&&parseInt(d)?parseInt(d):f.swipe_h_threshold,n="undefined"!=typeof g&&g!==!1&&parseInt(g)?parseInt(g):f.swipe_v_threshold;if(k.y>l.y&&k.y-l.y>n&&(c="swipeup"),k.x<l.x&&l.x-k.x>m&&(c="swiperight"),k.y<l.y&&l.y-k.y>n&&(c="swipedown"),k.x>l.x&&k.x-l.x>m&&(c="swipeleft"),void 0!=c&&i){k.x=0,k.y=0,l.x=0,l.y=0,i=!1;var o=b.originalEvent;endEvnt={position:{x:f.touch_capable?o.touches[0].screenX:b.screenX,y:f.touch_capable?o.touches[0].screenY:b.screenY},offset:{x:f.touch_capable?o.touches[0].pageX-o.touches[0].target.offsetLeft:b.offsetX,y:f.touch_capable?o.touches[0].pageY-o.touches[0].target.offsetTop:b.offsetY},time:Date.now(),target:b.target};var p=Math.abs(e.position.x-endEvnt.position.x),q=Math.abs(e.position.y-endEvnt.position.y),r={startEvnt:e,endEvnt:endEvnt,direction:c.replace("swipe",""),xAmount:p,yAmount:q,duration:endEvnt.time-e.time};j=!0,h.trigger("swipe",r).trigger(c,r)}}function d(b){h=a(b.target);var c="";if(h.data("callee3",arguments.callee),j){var d=h.data("xthreshold"),g=h.data("ythreshold"),k="undefined"!=typeof d&&d!==!1&&parseInt(d)?parseInt(d):f.swipe_h_threshold,l="undefined"!=typeof g&&g!==!1&&parseInt(g)?parseInt(g):f.swipe_v_threshold,m=b.originalEvent;endEvnt={position:{x:f.touch_capable?m.changedTouches[0].screenX:b.screenX,y:f.touch_capable?m.changedTouches[0].screenY:b.screenY},offset:{x:f.touch_capable?m.changedTouches[0].pageX-m.changedTouches[0].target.offsetLeft:b.offsetX,y:f.touch_capable?m.changedTouches[0].pageY-m.changedTouches[0].target.offsetTop:b.offsetY},time:Date.now(),target:b.target},e.position.y>endEvnt.position.y&&e.position.y-endEvnt.position.y>l&&(c="swipeup"),e.position.x<endEvnt.position.x&&endEvnt.position.x-e.position.x>k&&(c="swiperight"),e.position.y<endEvnt.position.y&&endEvnt.position.y-e.position.y>l&&(c="swipedown"),e.position.x>endEvnt.position.x&&e.position.x-endEvnt.position.x>k&&(c="swipeleft");var n=Math.abs(e.position.x-endEvnt.position.x),o=Math.abs(e.position.y-endEvnt.position.y),p={startEvnt:e,endEvnt:endEvnt,direction:c.replace("swipe",""),xAmount:n,yAmount:o,duration:endEvnt.time-e.time};h.trigger("swipeend",p)}i=!1,j=!1}var e,g=this,h=a(g),i=!1,j=!1,k={x:0,y:0},l={x:0,y:0};h.on(f.startevent,b),h.on(f.moveevent,c),h.on(f.endevent,d)},remove:function(){a(this).off(f.startevent,a(this).data.callee1).off(f.moveevent,a(this).data.callee2).off(f.endevent,a(this).data.callee3)}},a.event.special.scrollstart={setup:function(){function b(a,b){d=b,c(g,d?"scrollstart":"scrollend",a)}var d,e,g=this,h=a(g);h.on(f.scrollevent,function(a){h.data("callee",arguments.callee),d||b(a,!0),clearTimeout(e),e=setTimeout(function(){b(a,!1)},50)})},remove:function(){a(this).off(f.scrollevent,a(this).data.callee)}};var g,h,i,j,k,l=a(window),m={0:!0,180:!0};if(f.orientation_support){var n=window.innerWidth||l.width(),o=window.innerHeight||l.height(),p=50;j=n>o&&n-o>p,k=m[window.orientation],(j&&k||!j&&!k)&&(m={"-90":!0,90:!0})}a.event.special.orientationchange=g={setup:function(){return f.orientation_support?!1:(i=h(),l.on("throttledresize",b),!0)},teardown:function(){return f.orientation_support?!1:(l.off("throttledresize",b),!0)},add:function(a){var b=a.handler;a.handler=function(a){return a.orientation=h(),b.apply(this,arguments)}}},a.event.special.orientationchange.orientation=h=function(){var a=!0,b=document.documentElement;return a=f.orientation_support?m[window.orientation]:b&&b.clientWidth/b.clientHeight<1.1,a?"portrait":"landscape"},a.event.special.throttledresize={setup:function(){a(this).on("resize",u)},teardown:function(){a(this).off("resize",u)}};var q,r,s,t=250,u=function(){r=Date.now(),s=r-v,s>=t?(v=r,a(this).trigger("throttledresize")):(q&&window.clearTimeout(q),q=window.setTimeout(b,t-s))},v=0;a.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(b,c,d){a.event.special[b]={setup:function(){a(this).on(c,a.noop)}}})}(jQuery);
//# sourceMappingURL=jquery-mobile-events.js.map