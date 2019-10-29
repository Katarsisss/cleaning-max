
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro-stroy/js/jquery.actual.min.js?14792895781101";s:6:"source";s:53:"/bitrix/templates/aspro-stroy/js/jquery.actual.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.15
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/aspro-stroy/js/jquery.fancybox.min.js?150477693921528";s:6:"source";s:51:"/bitrix/templates/aspro-stroy/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e,t,n,i){"use strict";var o=n(e),a=n(t),r=n.fancybox=function(){r.open.apply(this,arguments)},s=null,l=t.createTouch!==i,c=function(e){return e&&e.hasOwnProperty&&e instanceof n},p=function(e){return e&&"string"===n.type(e)},d=function(e){return p(e)&&e.indexOf("%")>0},h=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},f=function(e,t){var n=parseInt(e,10);return t&&d(e)&&(n=r.getViewport()[t]/100*n),Math.ceil(n)},u=function(e,t){return f(e,t)+"px"};n.extend(r,{version:"2.1.0",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!l,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{closeClick:!0,speedOut:200,showEarly:!0,css:{}},title:{type:"float"}},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==r.close(!0))?(n.isArray(e)||(e=c(e)?n(e).get():[e]),n.each(e,function(o,a){var s,l,d,h,f,u,g,m={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),c(a)?(m={href:a.attr("href"),title:a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,m,a.metadata())):m=a),s=t.href||m.href||(p(a)?a:null),l=t.title!==i?t.title:m.title||"",d=t.content||m.content,h=d?"html":t.type||m.type,!h&&m.isDom&&(h=a.data("fancybox-type"),h||(f=a.prop("class").match(/fancybox\.(\w+)/),h=f?f[1]:null)),p(s)&&(h||(r.isImage(s)?h="image":r.isSWF(s)?h="swf":"#"===s.charAt(0)?h="inline":p(a)&&(h="html",d=a)),"ajax"===h&&(u=s.split(/\s+/,2),s=u.shift(),g=u.shift())),d||("inline"===h?s?d=n(p(s)?s.replace(/.*(?=#[^\s]+$)/,""):s):m.isDom&&(d=a):"html"===h?d=s:h||s||!m.isDom||(h="inline",d=a)),n.extend(m,{href:s,type:h,content:d,title:l,selector:g}),e[o]=m}),r.opts=n.extend(!0,{},r.defaults,t),t.keys!==i&&(r.opts.keys=t.keys?n.extend({},r.defaults.keys,t.keys):!1),r.group=e,r._start(r.opts.index)):void 0},cancel:function(){var e=r.coming;e&&!1!==r.trigger("onCancel")&&(r.hideLoading(),r.ajaxLoad&&r.ajaxLoad.abort(),r.ajaxLoad=null,r.imgPreload&&(r.imgPreload.onload=r.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0).trigger("onReset").remove(),r.current||r.trigger("afterClose"),r.coming=null)},close:function(e){r.cancel(),!1!==r.trigger("beforeClose")&&(r.unbindEvents(),r.isOpen&&e!==!0?(r.isOpen=r.isOpened=!1,r.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),r.wrap.stop(!0,!0).removeClass("fancybox-opened"),"fixed"===r.wrap.css("position")&&r.wrap.css(r._getPosition(!0)),r.transitions[r.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),r._afterZoomOut()))},play:function(e){var t=function(){clearTimeout(r.player.timer)},i=function(){t(),r.current&&r.player.isActive&&(r.player.timer=setTimeout(r.next,r.current.playSpeed))},o=function(){t(),n("body").unbind(".player"),r.player.isActive=!1,r.trigger("onPlayEnd")},a=function(){r.current&&(r.current.loop||r.current.index<r.group.length-1)&&(r.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":i,"onCancel.player beforeClose.player":o,"beforeLoad.player":t}),i(),r.trigger("onPlayStart"))};e===!0||!r.player.isActive&&e!==!1?a():o()},next:function(e){var t=r.current;t&&(p(e)||(e=t.direction.next),r.jumpto(t.index+1,e,"next"))},prev:function(e){var t=r.current;t&&(p(e)||(e=t.direction.prev),r.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=r.current;o&&(e=f(e),r.direction=t||o.direction[e>=o.index?"next":"prev"],r.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(r.cancel(),r._start(e)))},reposition:function(e,t){var n;r.isOpen&&(n=r._getPosition(t),e&&"scroll"===e.type?(delete n.position,r.wrap.stop(!0,!0).animate(n,200)):r.wrap.css(n))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(s),s=null),r.isOpen&&!s&&((n||l)&&(r.wrap.removeAttr("style").addClass("fancybox-tmp"),r.trigger("onUpdate")),s=setTimeout(function(){var n=r.current;n&&(r.wrap.removeClass("fancybox-tmp"),"scroll"!==t&&r._setDimension(),"scroll"===t&&n.canShrink||r.reposition(e),r.trigger("onUpdate"),s=null)},l?500:n?20:300))},toggle:function(e){r.isOpen&&(r.current.fitToView="boolean"===n.type(e)?e:!r.current.fitToView,r.update())},hideLoading:function(){a.unbind("keypress.fb"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;r.hideLoading(),a.bind("keypress.fb",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),r.cancel())}),e=n('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"),r.defaults.fixed||(t=r.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=r.current?r.current.locked:!1,n={x:o.scrollLeft(),y:o.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=l&&e.innerWidth?e.innerWidth:o.width(),n.h=l&&e.innerHeight?e.innerHeight:o.height()),n},unbindEvents:function(){r.wrap&&c(r.wrap)&&r.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=r.current;t&&(o.bind("orientationchange.fb"+(l?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),r.update),e=t.keys,e&&a.bind("keydown.fb",function(o){var a=o.which||o.keyCode,s=o.target||o.srcElement;o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||s&&(s.type||n(s).is("[contenteditable]"))||n.each(e,function(e,s){return t.group.length>1&&s[a]!==i?(r[e](s[a]),o.preventDefault(),!1):n.inArray(a,s)>-1?(r[e](),o.preventDefault(),!1):void 0})}),n.fn.mousewheel&&t.mouseWheel&&r.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var s=e.target||null,l=n(s),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=h(l[0]),l=n(l).parent();0===i||c||r.group.length>1&&!t.canShrink&&(a>0||o>0?r.prev(a>0?"down":"left"):(0>a||0>o)&&r.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||r.coming||r.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),i===!1)return!1;"onCancel"!==e||r.isOpened||(r.isActive=!1),o.helpers&&n.each(o.helpers,function(t,i){i&&r.helpers[t]&&n.isFunction(r.helpers[t][e])&&r.helpers[t][e](i,o)}),n.event.trigger(e+".fb")}},isImage:function(e){return p(e)&&e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o,a,s,c={};if(e=f(e),t=r.group[e]||null,!t)return!1;if(c=n.extend(!0,{},r.opts,t),a=c.margin,s=c.padding,"number"===n.type(a)&&(c.margin=[a,a,a,a]),"number"===n.type(s)&&(c.padding=[s,s,s,s]),c.modal&&n.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),c.autoSize&&(c.autoWidth=c.autoHeight=!0),"auto"===c.width&&(c.autoWidth=!0),"auto"===c.height&&(c.autoHeight=!0),c.group=r.group,c.index=e,r.coming=c,!1===r.trigger("beforeLoad"))return void(r.coming=null);if(o=c.type,i=c.href,!o)return r.coming=null,r.current&&r.router&&"jumpto"!==r.router?(r.current.index=e,r[r.router](r.direction)):!1;if(r.isActive=!0,("image"===o||"swf"===o)&&(c.autoHeight=c.autoWidth=!1,c.scrolling="visible"),"image"===o&&(c.aspectRatio=!0),"iframe"===o&&l&&(c.scrolling="scroll"),c.wrap=n(c.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent),n.extend(c,{skin:n(".fancybox-skin",c.wrap),outer:n(".fancybox-outer",c.wrap),inner:n(".fancybox-inner",c.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){c.skin.css("padding"+t,u(c.padding[e]))}),r.trigger("onReady"),"inline"===o||"html"===o){if(!c.content||!c.content.length)return r._error("content")}else if(!i)return r._error("href");"image"===o?r._loadImage():"ajax"===o?r._loadAjax():"iframe"===o?r._loadIframe():r._afterLoad()},_error:function(e){n.extend(r.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:r.coming.tpl.error}),r._afterLoad()},_loadImage:function(){var e=r.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,r.coming.width=this.width,r.coming.height=this.height,r._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,r._error("image")},e.src=r.coming.href,e.complete!==i&&e.complete||r.showLoading()},_loadAjax:function(){var e=r.coming;r.showLoading(),r.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){r.coming&&"abort"!==t?r._error("ajax",e):r.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,r._afterLoad())}}))},_loadIframe:function(){var e=r.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(r.showLoading(),t.one("load",function(){n(this).data("ready",1),l||n(this).bind("load.fb",r.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),r._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||r._afterLoad()},_preloadImages:function(){var e,t,n=r.group,i=r.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;a>=t;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,s,l=r.coming,p=r.current,d="fancybox-placeholder";if(r.hideLoading(),l&&r.isActive!==!1){if(!1===r.trigger("afterLoad",l,p))return l.wrap.stop(!0).trigger("onReset").remove(),void(r.coming=null);switch(p&&(r.trigger("beforeChange",p),p.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(),"fixed"===p.wrap.css("position")&&p.wrap.css(r._getPosition(!0))),r.unbindEvents(),e=l,t=l.content,i=l.type,o=l.scrolling,n.extend(r,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:p}),a=e.href,i){case"inline":case"ajax":case"html":e.selector?t=n("<div>").html(t).find(e.selector):c(t)&&(t.data(d)||t.data(d,n('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){n(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',s="",n.each(e.swf,function(e,n){t+='<param name="'+e+'" value="'+n+'"></param>',s+=" "+e+'="'+n+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+s+"></embed></object>"}c(t)&&t.parent().is(e.inner)||e.inner.append(t),r.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),r._setDimension(),e.wrap.removeClass("fancybox-tmp"),e.pos=n.extend({},e.dim,r._getPosition(!0)),r.isOpen=!1,r.coming=null,r.bindEvents(),r.isOpened?p.prevMethod&&r.transitions[p.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),r.transitions[r.isOpened?e.nextMethod:e.openMethod](),r._preloadImages()}},_setDimension:function(){var e,t,i,o,a,s,l,c,p,h,g,m,y,w,v,b=r.getViewport(),x=0,k=!1,C=!1,O=r.wrap,W=r.skin,_=r.inner,S=r.current,P=S.width,E=S.height,T=S.minWidth,j=S.minHeight,L=S.maxWidth,M=S.maxHeight,H=S.scrolling,R=S.scrollOutside?S.scrollbarWidth:0,A=S.margin,I=A[1]+A[3],D=A[0]+A[2];if(O.add(W).add(_).width("auto").height("auto"),e=W.outerWidth(!0)-W.width(),t=W.outerHeight(!0)-W.height(),i=I+e,o=D+t,a=d(P)?(b.w-i)*f(P)/100:P,s=d(E)?(b.h-o)*f(E)/100:E,"iframe"===S.type){if(w=S.content,S.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(_.width(a).height(9999),v=w.contents().find("body"),R&&v.css("overflow-x","hidden"),s=v.height())}catch(V){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(a),S.autoHeight||_.height(s),S.autoWidth&&(a=_.width()),S.autoHeight&&(s=_.height()),_.removeClass("fancybox-tmp"));if(P=f(a),E=f(s),p=a/s,T=f(d(T)?f(T,"w")-i:T),L=f(d(L)?f(L,"w")-i:L),j=f(d(j)?f(j,"h")-o:j),M=f(d(M)?f(M,"h")-o:M),l=L,c=M,m=b.w-I,y=b.h-D,S.aspectRatio?(P>L&&(P=L,E=P/p),E>M&&(E=M,P=E*p),T>P&&(P=T,E=P/p),j>E&&(E=j,P=E*p)):(P=Math.max(T,Math.min(P,L)),E=Math.max(j,Math.min(E,M))),S.fitToView)if(L=Math.min(b.w-i,L),M=Math.min(b.h-o,M),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height(),S.aspectRatio)for(;(h>m||g>y)&&P>T&&E>j&&!(x++>19);)E=Math.max(j,Math.min(M,E-10)),P=E*p,T>P&&(P=T,E=P/p),P>L&&(P=L,E=P/p),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height();else P=Math.max(T,Math.min(P,P-(h-m))),E=Math.max(j,Math.min(E,E-(g-y)));R&&"auto"===H&&s>E&&m>P+e+R&&(P+=R),_.width(f(P)).height(f(E)),O.width(f(P+e)),h=O.width(),g=O.height(),k=(h>m||g>y)&&P>T&&E>j,C=S.aspectRatio?l>P&&c>E&&a>P&&s>E:(l>P||c>E)&&(a>P||s>E),n.extend(S,{dim:{width:u(h),height:u(g)},origWidth:a,origHeight:s,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:g-W.outerHeight(!0),skinSpace:W.height()-E}),!w&&S.autoHeight&&E>j&&M>E&&!C&&_.height("auto")},_getPosition:function(e){var t=r.current,n=r.getViewport(),i=t.margin,o=r.wrap.width()+i[1]+i[3],a=r.wrap.height()+i[0]+i[2],s={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?s.position="fixed":t.locked||(s.top+=n.y,s.left+=n.x),s.top=u(Math.max(s.top,s.top+(n.h-a)*t.topRatio)),s.left=u(Math.max(s.left,s.left+(n.w-o)*t.leftRatio)),s},_afterZoomIn:function(){var e=r.current;e&&(r.isOpen=r.isOpened=!0,r.wrap.addClass("fancybox-opened").css("overflow","visible"),r.reposition(),(e.closeClick||e.nextClick)&&r.inner.css("cursor","pointer").bind("click.fb",function(t){n(t.target).is("a")||n(t.target).parent().is("a")||r[e.closeClick?"close":"next"]()}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb",r.close),e.arrows&&r.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(r.outer).bind("click.fb",r.prev),(e.loop||e.index<r.group.length-1)&&n(e.tpl.next).appendTo(r.outer).bind("click.fb",r.next)),r.trigger("afterShow"),e.loop||e.index!==e.group.length-1?r.opts.autoPlay&&!r.player.isActive&&(r.opts.autoPlay=!1,r.play()):r.play(!1))},_afterZoomOut:function(){var e=r.current;n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),n.extend(r,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),r.trigger("afterClose",e)}}),r.transitions={getOrigPosition:function(){var e=r.current,t=e.element,n=e.orig,i={},o=50,a=50,s=e.hPadding,l=e.wPadding,p=r.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),c(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=p.y+(p.h-a)*e.topRatio,i.left=p.x+(p.w-o)*e.leftRatio),e.locked&&(i.top-=p.y,i.left-=p.x),i={top:u(i.top-s*e.topRatio),left:u(i.left-l*e.leftRatio),width:u(o+l),height:u(a+s)}},step:function(e,t){var n,i,o,a=t.prop,s=r.current,l=s.wrapSpace,c=s.skinSpace;("width"===a||"height"===a)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),r.isClosing&&(n=1-n),i="width"===a?s.wPadding:s.hPadding,o=e-i,r.skin[a](f("width"===a?o:o-l*n)),r.inner[a](f("width"===a?o:o-l*n-c*n)))},zoomIn:function(){var e=r.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),r.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:r._afterZoomIn})},zoomOut:function(){var e=r.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),r.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:r._afterZoomOut})},changeIn:function(){var e,t=r.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=r.direction,s=200;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=u(f(i[e])-s),o[e]="+="+s+"px"):(i[e]=u(f(i[e])+s),o[e]="-="+s+"px")),"none"===n?r._afterZoomIn():r.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:r._afterZoomIn})},changeOut:function(){var e=r.previous,t=e.prevEffect,i={opacity:.1},o=r.direction,a=200;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},r.helpers.overlay={overlay:null,update:function(){var e,i="100%";this.overlay.width(i).height("100%"),n.browser.msie?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(i=a.width())):a.width()>o.width()&&(i=a.width()),this.overlay.width(i).height(a.height())},onReady:function(e,i){n(".fancybox-overlay").stop(!0,!0),this.overlay||n.extend(this,{overlay:n('<div class="fancybox-overlay"></div>').appendTo(i.parent),margin:a.height()>o.height()||"scroll"===n("body").css("overflow-y")?n("body").css("margin-right"):!1,el:n(t.all&&!t.querySelector?"html":"body")}),i.fixed&&!l&&(this.overlay.addClass("fancybox-overlay-fixed"),i.autoCenter&&(this.overlay.append(i.wrap),i.locked=this.overlay)),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i=this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);e.closeClick&&i.bind("click.fb",function(e){n(e.target).hasClass("fancybox-overlay")&&r.close()}),t.fixed&&!l?t.locked&&(this.el.addClass("fancybox-lock"),this.margin!==!1&&n("body").css("margin-right",f(this.margin)+t.scrollbarWidth)):this.update(),i.show()},onUpdate:function(e,t){(!t.fixed||l)&&this.update()},afterClose:function(e){var t=this,i=e.speedOut||0;t.overlay&&!r.isActive&&t.overlay.fadeOut(i||0,function(){n("body").css("margin-right",t.margin),t.el.removeClass("fancybox-lock"),t.overlay.remove(),t.overlay=null})}},r.helpers.title={beforeShow:function(e){var t,i,o=r.current.title,a=e.type;if(p(o)&&""!==n.trim(o)){switch(t=n('<div class="fancybox-title fancybox-title-'+a+'-wrap">'+o+"</div>"),a){case"inside":i=r.skin;break;case"outside":i=r.wrap;break;case"over":i=r.inner;break;default:i=r.skin,t.appendTo("body").width(t.width()).wrapInner('<span class="child"></span>'),r.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}"top"===e.position?t.prependTo(i):t.appendTo(i)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",s=function(a){var s,l,c=n(this).blur(),p=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(s=e.groupAttr||"data-fancybox-group",l=c.attr(s),l||(s="rel",l=c.get(0)[s]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+s+'="'+l+'"]'),p=c.index(this)),e.index=p,r.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?a.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",s):i.unbind("click.fb-start").bind("click.fb-start",s),this},a.ready(function(){n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),i=t.innerWidth()-t.height(99).innerWidth();return e.remove(),i}),n.support.fixedPosition===i&&(n.support.fixedPosition=function(){var e=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),n.extend(r.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})}(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro-stroy/vendor/jquery.easing.js?14792895788097";s:6:"source";s:53:"/bitrix/templates/aspro-stroy/vendor/jquery.easing.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro-stroy/vendor/jquery.appear.js?14792895783188";s:6:"source";s:53:"/bitrix/templates/aspro-stroy/vendor/jquery.appear.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro-stroy/vendor/jquery.cookie.js?14792895782247";s:6:"source";s:53:"/bitrix/templates/aspro-stroy/vendor/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/bitrix/templates/aspro-stroy/vendor/bootstrap.js?147928957827908";s:6:"source";s:49:"/bitrix/templates/aspro-stroy/vendor/bootstrap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed.bs.alert").remove()}var c=a(this),d=c.attr("data-target");d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));var e=a(d);b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close.bs.alert"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");b.prop("type")==="radio"&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f=typeof c=="object"&&c;e||d.data("bs.button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){if(this.sliding)return;return this.slide("next")},b.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g=c.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){function e(){a(b).remove(),a(c).each(function(b){var c=f(a(this));if(!c.hasClass("open"))return;c.trigger(b=a.Event("hide.bs.dropdown"));if(b.isDefaultPrevented())return;c.removeClass("open").trigger("hidden.bs.dropdown")})}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}"use strict";var b=".dropdown-backdrop",c="[data-toggle=dropdown]",d=function(b){var c=a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c),g=d.hasClass("open");e();if(!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e),d.trigger(b=a.Event("show.bs.dropdown"));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown"),c.focus()}return!1},d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault(),b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d),g=e.hasClass("open");if(!g||g&&b.keyCode==27)return b.which==27&&e.find(c).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",e);if(!h.length)return;var i=h.index(h.filter(":focus"));b.keyCode==38&&i>0&&i--,b.keyCode==40&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),e=c.data("dropdown");e||c.data("dropdown",e=new d(this)),typeof b=="string"&&e[b].call(c)})},a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu]",d.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focus",i=g=="hover"?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m=this.options.container=="body"?window.innerWidth:j.outerWidth(),n=this.options.container=="body"?window.innerHeight:j.outerHeight(),o=this.options.container=="body"?0:j.offset().left;d=d=="bottom"&&g.top+g.height+i-l>n?"top":d=="top"&&g.top-l-i<0?"bottom":d=="right"&&g.right+h>m?"left":d=="left"&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;b=="top"&&j!=f&&(c=!0,a.top=a.top+f-j);if(/bottom|top/.test(b)){var k=0;a.left<0&&(k=a.left*-2,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach()}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;typeof f!="object"&&(h=g=f),typeof g=="function"&&(g=f.top()),typeof h=="function"&&(h=f.bottom());var i=this.unpin!=null&&d+this.unpin<=e.top?!1:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":!1;if(this.affixed===i)return;this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin=i=="bottom"?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),i=="bottom"&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()})};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f=typeof c=="object"&&c;e||d.data("bs.affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(window.jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}"use strict",b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this,d=this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f=typeof c=="object"&&c;e||d.data("bs.scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(a.style[c]!==undefined)return{end:b[c]}}"use strict",a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery)
/* End */
;
; /* Start:"a:4:{s:4:"full";s:88:"/bitrix/templates/aspro-stroy/vendor/flexslider/jquery.flexslider-min.js?147928957821817";s:6:"source";s:72:"/bitrix/templates/aspro-stroy/vendor/flexslider/jquery.flexslider-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery FlexSlider v2.4.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){$.flexslider=function(e,t){var a=$(e);a.vars=$.extend({},$.flexslider.defaults,t);var n=a.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||i||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,r="click touchend MSPointerUp keyup",o="",l,c="vertical"===a.vars.direction,d=a.vars.reverse,u=a.vars.itemWidth>0,v="fade"===a.vars.animation,p=""!==a.vars.asNavFor,m={},f=!0;$.data(e,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10),isNaN(a.currentSlide)&&(a.currentSlide=0),a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" ")),a.slides=$(a.vars.selector,a),a.container=$(a.containerSelector,a),a.count=a.slides.length,a.syncExists=$(a.vars.sync).length>0,"slide"===a.vars.animation&&(a.vars.animation="swing"),a.prop=c?"top":"marginLeft",a.args={},a.manualPause=!1,a.stopped=!1,a.started=!1,a.startTimeout=null,a.transitions=!a.vars.video&&!v&&a.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),a.ensureAnimationEnd="",""!==a.vars.controlsContainer&&(a.controlsContainer=$(a.vars.controlsContainer).length>0&&$(a.vars.controlsContainer)),""!==a.vars.manualControls&&(a.manualControls=$(a.vars.manualControls).length>0&&$(a.vars.manualControls)),a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),a.setup("init"),a.vars.controlNav&&m.controlNav.setup(),a.vars.directionNav&&m.directionNav.setup(),a.vars.keyboard&&(1===$(a.containerSelector).length||a.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,a.vars.pauseOnAction)}}),a.vars.mousewheel&&a.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=a.getTarget(0>t?"next":"prev");a.flexAnimate(s,a.vars.pauseOnAction)}),a.vars.pausePlay&&m.pausePlay.setup(),a.vars.slideshow&&a.vars.pauseInvisible&&m.pauseInvisible.init(),a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(a.vars.initDelay>0?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play())),p&&m.asNav.setup(),s&&a.vars.touch&&m.touch(),(!v||v&&a.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",m.resize),a.find("img").attr("draggable","false"),setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(n+"active-slide").eq(a.currentItem).addClass(n+"active-slide"),i?(e._slider=a,a.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(a.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,a.vars.pauseOnAction,!1,!0,!0))})})):a.slides.on(r,function(e){e.preventDefault();var t=$(this),i=t.index(),s=t.offset().left-$(a).scrollLeft();0>=s&&t.hasClass(n+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):$(a.vars.asNavFor).data("flexslider").animating||t.hasClass(n+"active-slide")||(a.direction=a.currentItem<i?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging",t=1,i,s;if(a.controlNavScaffold=$('<ol class="'+n+"control-nav "+n+e+'"></ol>'),a.pagingCount>1)for(var l=0;l<a.pagingCount;l++){if(s=a.slides.eq(l),i="thumbnails"===a.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"/>':"<a>"+t+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!=c&&void 0!=c&&(i+='<span class="'+n+'caption">'+c+"</span>")}a.controlNavScaffold.append("<li>"+i+"</li>"),t++}a.controlsContainer?$(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===a.vars.controlNav?"img":"a";a.controlNav=$("."+n+"control-nav li "+e,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(n+"active").eq(a.animatingTo).addClass(n+"active")},update:function(e,t){a.pagingCount>1&&"add"===e?a.controlNavScaffold.append($("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(t).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(t,e):m.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+n+'direction-nav"><li class="'+n+'nav-prev"><a class="'+n+'prev" href="#">'+a.vars.prevText+'</a></li><li class="'+n+'nav-next"><a class="'+n+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.controlsContainer?($(a.controlsContainer).append(e),a.directionNav=$("."+n+"direction-nav li a",a.controlsContainer)):(a.append(e),a.directionNav=$("."+n+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(e){e.preventDefault();var t;(""===o||o===e.type)&&(t=a.getTarget($(this).hasClass(n+"next")?"next":"prev"),a.flexAnimate(t,a.vars.pauseOnAction)),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(){var e=n+"disabled";1===a.pagingCount?a.directionNav.addClass(e).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(e).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+n+"prev").addClass(e).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+n+"next").addClass(e).attr("tabindex","-1"):a.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+n+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(e),a.pausePlay=$("."+n+"pauseplay a",a.controlsContainer)):(a.append(e),a.pausePlay=$("."+n+"pauseplay a",a)),m.pausePlay.update(a.vars.slideshow?n+"pause":n+"play"),a.pausePlay.bind(r,function(e){e.preventDefault(),(""===o||o===e.type)&&($(this).hasClass(n+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(e){"play"===e?a.pausePlay.removeClass(n+"pause").addClass(n+"play").html(a.vars.playText):a.pausePlay.removeClass(n+"play").addClass(n+"pause").html(a.vars.pauseText)}},touch:function(){function t(t){a.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(a.pause(),g=c?a.h:a.w,S=Number(new Date),x=t.touches[0].pageX,b=t.touches[0].pageY,f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g,p=c?b:x,m=c?x:b,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",s,!1))}function n(e){x=e.touches[0].pageX,b=e.touches[0].pageY,h=c?p-b:p-x,y=c?Math.abs(h)<Math.abs(x-m):Math.abs(h)<Math.abs(b-m);var t=500;(!y||Number(new Date)-S>t)&&(e.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h/=0===a.currentSlide&&0>h||a.currentSlide===a.last&&h>0?Math.abs(h)/g+2:1),a.setProps(f+h,"setTouch")))}function s(t){if(e.removeEventListener("touchmove",n,!1),a.animatingTo===a.currentSlide&&!y&&null!==h){var i=d?-h:h,r=a.getTarget(i>0?"next":"prev");a.canAdvance(r)&&(Number(new Date)-S<550&&Math.abs(i)>50||Math.abs(i)>g/2)?a.flexAnimate(r,a.vars.pauseOnAction):v||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}e.removeEventListener("touchend",s,!1),p=null,m=null,h=null,f=null}function r(t){t.stopPropagation(),a.animating?t.preventDefault():(a.pause(),e._gesture.addPointer(t.pointerId),w=0,g=c?a.h:a.w,S=Number(new Date),f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g)}function o(t){t.stopPropagation();var a=t.target._slider;if(a){var n=-t.translationX,i=-t.translationY;return w+=c?i:n,h=w,y=c?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-S>500)&&(t.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==h){var a=d?-h:h,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):v||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}p=null,m=null,h=null,f=null,w=0}}var p,m,f,g,h,S,y=!1,x=0,b=0,w=0;i?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",r,!1),e._slider=a,e.addEventListener("MSGestureChange",o,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!a.animating&&a.is(":visible")&&(u||a.doMath(),v?m.smoothHeight():u?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):c?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!c||v){var t=v?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(e){var t=$(a.vars.sync).data("flexslider"),n=a.animatingTo;switch(e){case"animate":t.flexAnimate(n,a.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=m.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){m.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():a.vars.initDelay>0?setTimeout(a.play,a.vars.initDelay):a.play()})}},isHidden:function(){var e=m.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(l),l=setTimeout(function(){o=""},3e3)}},a.flexAnimate=function(e,t,i,r,o){if(a.vars.animationLoop||e===a.currentSlide||(a.direction=e>a.currentSlide?"next":"prev"),p&&1===a.pagingCount&&(a.direction=a.currentItem<e?"next":"prev"),!a.animating&&(a.canAdvance(e,o)||i)&&a.is(":visible")){if(p&&r){var l=$(a.vars.asNavFor).data("flexslider");if(a.atEnd=0===e||e===a.count-1,l.flexAnimate(e,!0,!1,!0,o),a.direction=a.currentItem<e?"next":"prev",l.direction=a.direction,Math.ceil((e+1)/a.visible)-1===a.currentSlide||0===e)return a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),!1;a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),e=Math.floor(e/a.visible)}if(a.animating=!0,a.animatingTo=e,t&&a.pause(),a.vars.before(a),a.syncExists&&!o&&m.sync("animate"),a.vars.controlNav&&m.controlNav.active(),u||a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),a.atEnd=0===e||e===a.last,a.vars.directionNav&&m.directionNav.update(),e===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause()),v)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(e).css({opacity:1,zIndex:2}),a.wrapup(f)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(e).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var f=c?a.slides.filter(":first").height():a.computedW,g,h,S;u?(g=a.vars.itemMargin,S=(a.itemW+g)*a.move*a.animatingTo,h=S>a.limit&&1!==a.visible?a.limit:S):h=0===a.currentSlide&&e===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?d?(a.count+a.cloneOffset)*f:0:a.currentSlide===a.last&&0===e&&a.vars.animationLoop&&"prev"!==a.direction?d?0:(a.count+1)*f:d?(a.count-1-e+a.cloneOffset)*f:(e+a.cloneOffset)*f,a.setProps(h,"",a.vars.animationSpeed),a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(a.ensureAnimationEnd),a.wrapup(f)}),clearTimeout(a.ensureAnimationEnd),a.ensureAnimationEnd=setTimeout(function(){a.wrapup(f)},a.vars.animationSpeed+100)):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(f)})}a.vars.smoothHeight&&m.smoothHeight(a.vars.animationSpeed)}},a.wrapup=function(e){v||u||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,a.vars.after(a)},a.animateSlides=function(){!a.animating&&f&&a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.animatedSlides=null,a.playing=!1,a.vars.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.playing&&clearInterval(a.animatedSlides),a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed),a.started=a.playing=!0,a.vars.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.stop=function(){a.pause(),a.stopped=!0},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var i=function(){var n=e?e:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo,i=function(){if(u)return"setTouch"===t?e:d&&a.animatingTo===a.last?0:d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return d?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return d?e:e;case"jumpEnd":return d?e:a.count*e;case"jumpStart":return d?a.count*e:e;default:return e}}();return-1*i+"px"}();a.transitions&&(i=c?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n),a.container.css("transition-duration",n)),a.args[a.prop]=i,(a.transitions||void 0===n)&&a.container.css(a.args),a.container.css("transform",i)},a.setup=function(e){if(v)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):0==a.vars.fadeFirstSlide?a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).css({opacity:1}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&m.smoothHeight();else{var t,i;"init"===e&&(a.viewport=$('<div class="'+n+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,d&&(i=$.makeArray(a.slides).reverse(),a.slides=$(i),a.container.empty().append(a.slides))),a.vars.animationLoop&&!u&&(a.cloneCount=2,a.cloneOffset=1,"init"!==e&&a.container.find(".clone").remove(),a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),a.newSlides=$(a.vars.selector,a),t=d?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,c&&!u?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(t*a.h,"init")},"init"===e?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(t*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),a.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}u||a.slides.removeClass(n+"active-slide").eq(a.currentSlide).addClass(n+"active-slide"),a.vars.init(a)},a.doMath=function(){var e=a.slides.first(),t=a.vars.itemMargin,n=a.vars.minItems,i=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),u?(a.itemT=a.vars.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=i?i*a.itemT-t:a.w,a.itemW=a.minW>a.w?(a.w-t*(n-1))/n:a.maxW<a.w?(a.w-t*(i-1))/i:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=a.vars.move>0&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+t*(a.count-1):(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),u||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),a.vars.controlNav&&!a.manualControls&&("add"===t&&!u||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!u||a.pagingCount<a.controlNav.length)&&(u&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),a.vars.directionNav&&m.directionNav.update()},a.addSlide=function(e,t){var n=$(e);a.count+=1,a.last=a.count-1,c&&d?void 0!==t?a.slides.eq(a.count-t).after(n):a.container.prepend(n):void 0!==t?a.slides.eq(t).before(n):a.container.append(n),a.update(t,"add"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.added(a)},a.removeSlide=function(e){var t=isNaN(e)?a.slides.index($(e)):e;a.count-=1,a.last=a.count-1,isNaN(e)?$(e,a.slides).remove():c&&d?a.slides.eq(a.last).remove():a.slides.eq(e).remove(),a.doMath(),a.update(t,"remove"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.removed(a)},m.init()},$(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/aspro-stroy/vendor/jquery.validate.min.js?147928957822254";s:6:"source";s:59:"/bitrix/templates/aspro-stroy/vendor/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/ var check = false,re=new RegExp((typeof(VALIDATE_DATE_MASK)!=='undefined'?VALIDATE_DATE_MASK:'^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),adata,gg,mm,aaaa,xdata;if(re.test(a)){adata=a.split('.');if(adata.length===1){adata=a.split('-');if(adata.length===1){adata=a.split(' ');if(adata.length===1){adata=a.split('/');if(adata.length===1){adata=a.split(':');}}}}gg=parseInt(adata[0],10);mm=parseInt(adata[1],10);aaaa=parseInt(adata[2],10);xdata=new Date(aaaa,mm-1,gg,12,0,0,0);if((xdata.getUTCFullYear()===aaaa)&&(xdata.getUTCMonth()===mm-1)&&(xdata.getUTCDate()===gg)){check = true;}else{check = false;}}else{check = false;}return this.optional(b)||check;},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/aspro-stroy/js/jquery.uniform.min.js?14792895788308";s:6:"source";s:54:"/bitrix/templates/aspro-stroy/js/jquery.uniform.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/aspro-stroy/js/jqModal.min.js?15047769392622";s:6:"source";s:43:"/bitrix/templates/aspro-stroy/js/jqModal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(n){n.fn.jqm=function(t){var o=n.extend({},n.jqm.params,t);return this.each(function(){var t=n(this),e=n(this).data("jqm");e||(e={ID:m++}),t.data("jqm",n.extend(o,e)).addClass("jqm-init"),o.trigger&&n(this).jqmAddTrigger(o.trigger)})},n.fn.jqmAddTrigger=function(o){return this.each(function(){s(n(this),"jqmShow",o)||t("jqmAddTrigger must be called on initialized modals")})},n.fn.jqmAddClose=function(o){return this.each(function(){s(n(this),"jqmHide",o)||t("jqmAddClose must be called on initialized modals")})},n.fn.jqmShow=function(t){return this.each(function(){!this._jqmShown&&o(n(this),t)})},n.fn.jqmHide=function(t){return this.each(function(){this._jqmShown&&e(n(this),t)})};var t=function(n){window.console&&window.console.error&&window.console.error(n)},o=function(t,o){var e=t.data("jqm"),o=o||window.event,i=parseInt(t.css("z-index")),i=i>0?i:3e3,a=n("<div></div>").addClass(e.overlayClass).css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":i-1,opacity:e.overlay/100}),s={w:t,c:e,o:a,t:o};if(t.css("z-index",i),e.ajax){var d=e.target||t,c=e.ajax;d="string"==typeof d?n(d,t):n(d),"@"==c.substr(0,1)&&(c=n(o).attr(c.substring(1))),d.html(e.ajaxText).load(c,function(){e.onLoad&&e.onLoad.call(this,s),r(s)})}else r(s)},e=function(n,t){var o=n.data("jqm"),t=t||window.event,e={w:n,c:o,o:n.data("jqmv"),t:t};d(e)},i=function(t){return t.w[0]._jqmShown?!1:(t.c.overlay>0&&t.o.prependTo("body"),t.w.show(),n.jqm.focusFunc(t.w),!0)},a=function(n){return n.w.hide()&&n.o&&n.o.remove(),!0},s=function(t,o,e){return t.data("jqm")?n(e).each(function(){this[o]=this[o]||[],this[o].push(t)}).click(function(){var t=this;return n.each(this[o],function(n,e){e[o](t)}),!1}):!1},r=function(t){var o=t.w,e=t.o,i=t.c;i.onShow(t)!==!1&&(o[0]._jqmShown=!0,i.modal?(!h[0]&&c("bind"),h.push(o)):o.jqmAddClose(e),i.closeClass&&o.jqmAddClose(n("."+i.closeClass,o)),i.toTop&&e&&o.before('<span id="jqmP'+i.ID+'"></span>').insertAfter(e),o.data("jqmv",e))},d=function(t){var o=t.w,e=t.o,i=t.c;i.onHide(t)!==!1&&(o[0]._jqmShown=!1,i.modal&&(h.pop(),!h[0]&&c("unbind")),i.toTop&&e&&n("#jqmP"+i.ID).after(o).remove())},c=function(t){n(document)[t]("keypress keydown mousedown",u)},u=function(t){var o=n(t.target).data("jqm")||n(t.target).parents(".jqm-init:first").data("jqm"),e=h[h.length-1].data("jqm");return o&&o.ID==e.ID?!0:n.jqm.focusFunc(e)},m=0,h=[];n.jqm={params:{overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:!1,target:!1,ajaxText:"",modal:!1,toTop:!1,onShow:i,onHide:a,onLoad:!1},focusFunc:function(t){return n(":input:visible:first",t).focus(),!1}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro-stroy/js/detectmobilebrowser.js?14792895782203";s:6:"source";s:55:"/bitrix/templates/aspro-stroy/js/detectmobilebrowser.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/aspro-stroy/js/device.min.js?14792895782605";s:6:"source";s:46:"/bitrix/templates/aspro-stroy/js/device.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! device.js 0.1.57 */
(function(){var a,b,c,d,e,f,g,h,i;window.device={},b=window.document.documentElement,i=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return c("iphone")},device.ipod=function(){return c("ipod")},device.ipad=function(){return c("ipad")},device.android=function(){return c("android")},device.androidPhone=function(){return device.android()&&c("mobile")},device.androidTablet=function(){return device.android()&&!c("mobile")},device.blackberry=function(){return c("blackberry")||c("bb10")||c("rim")},device.blackberryPhone=function(){return device.blackberry()&&!c("tablet")},device.blackberryTablet=function(){return device.blackberry()&&c("tablet")},device.windows=function(){return c("windows")},device.windowsPhone=function(){return device.windows()&&c("phone")},device.windowsTablet=function(){return device.windows()&&c("touch")},device.fxos=function(){return c("(mobile; rv:")||c("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&c("mobile")},device.fxosTablet=function(){return device.fxos()&&c("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},c=function(a){return-1!==i.indexOf(a)},e=function(a){var c;return c=new RegExp(a,"i"),b.className.match(c)},a=function(a){return e(a)?void 0:b.className+=" "+a},g=function(a){return e(a)?b.className=b.className.replace(a,""):void 0},device.ios()?device.ipad()?a("ios ipad tablet"):device.iphone()?a("ios iphone mobile"):device.ipod()&&a("ios ipod mobile"):device.android()?device.androidTablet()?a("android tablet"):a("android mobile"):device.blackberry()?device.blackberryTablet()?a("blackberry tablet"):a("blackberry mobile"):device.windows()?device.windowsTablet()?a("windows tablet"):device.windowsPhone()?a("windows mobile"):a("desktop"):device.fxos()?device.fxosTablet()?a("fxos tablet"):a("fxos mobile"):a("desktop"),d=function(){return device.landscape()?(g("portrait"),a("landscape")):(g("landscape"),a("portrait"))},h="onorientationchange"in window,f=h?"orientationchange":"resize",window.addEventListener?window.addEventListener(f,d,!1):window.attachEvent?window.attachEvent(f,d):window[f]=d,d()}).call(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/aspro-stroy/js/blink.js?1479289578347";s:6:"source";s:41:"/bitrix/templates/aspro-stroy/js/blink.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function() {

	$.fn.blink		= function() {

		return this.each(function() {
			$(this).hover(function() {
				if ($(this).is(':animated'))
					return;

				$(this).animate({ opacity: 0.75 }, 150, function() {
					$(this).animate({ opacity: 1 }, 100, 'linear');
				});
			}, function() {

			});
		});

	};

	
})(jQuery);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/aspro-stroy/js/jquery.waypoints.min.js?14792895788044";s:6:"source";s:56:"/bitrix/templates/aspro-stroy/js/jquery.waypoints.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro-stroy/js/jquery.counterup.js?14792895781069";s:6:"source";s:52:"/bitrix/templates/aspro-stroy/js/jquery.counterup.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function(t){"use strict";t.fn.counterUp=function(e){var n=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),u=n,a=function(){var t=u.time/u.delay,n=e.attr("data-value"),a=[n],r=/[0-9]+,[0-9]+/.test(n);n=n.replace(/,/g,"");for(var o=(/^[0-9]+$/.test(n),/^[0-9]+\.[0-9]+$/.test(n)),c=o?(n.split(".")[1]||[]).length:0,d=t;d>=1;d--){var i=parseInt(n/t*d);if(o&&(i=parseFloat(n/t*d).toFixed(c)),r)for(;/(\d+)(\d{3})/.test(i.toString());)i=i.toString().replace(/(\d+)(\d{3})/,"$1,$2");a.unshift(i)}e.data("counterup-nums",a),e.text("0");var s=function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),u.delay):(delete e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))};e.data("counterup-func",s),setTimeout(e.data("counterup-func"),u.delay)};e.waypoint(a,{offset:"100%",triggerOnce:!0})})}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro-stroy/js/jquery.alphanumeric.js?14792895781972";s:6:"source";s:55:"/bitrix/templates/aspro-stroy/js/jquery.alphanumeric.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($) {
    $.fn.alphanumeric = function (p) {
        var input = $(this),
            az = "abcdefghijklmnopqrstuvwxyz",
            options = $.extend({
                ichars: '!@#$%^&*()+=[]\\\';,/{}|":<>?~`.- _',
                nchars: '',
                allow: ''
            }, p),
            s = options.allow.split(''),
            i = 0,
            ch,
            regex;

        for (i; i < s.length; i++) {
            if (options.ichars.indexOf(s[i]) != -1) {
                s[i] = '\\' + s[i];
            }
        }

        if (options.nocaps) {
            options.nchars += az.toUpperCase();
        }
        if (options.allcaps) {
            options.nchars += az;
        }

        options.allow = s.join('|');

        regex = new RegExp(options.allow, 'gi');
        ch = (options.ichars + options.nchars).replace(regex, '');

        input.keypress(function (e) {
            var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);

            if (ch.indexOf(key) != -1 && !e.ctrlKey) {
                e.preventDefault();
            }
        });

        input.blur(function () {
            var value = input.val(),
                j = 0;

            for (j; j < value.length; j++) {
                if (ch.indexOf(value[j]) != -1) {
                    input.val('');
                    return false;
                }
            }
            return false;
        });

        return input;
    };

    $.fn.numeric = function (p) {
        var az = 'abcdefghijklmnopqrstuvwxyz',
            aZ = az.toUpperCase();

        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: az + aZ }, p));
        });
    };

    $.fn.alpha = function (p) {
        var nm = '1234567890';
        return this.each(function () {
            $(this).alphanumeric($.extend({ nchars: nm }, p));
        });
    };
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/bitrix/templates/aspro-stroy/js/general.min.js?154764038927257";s:6:"source";s:43:"/bitrix/templates/aspro-stroy/js/general.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function onLoadjqm(o){var e=$(o.t).data("name"),t=($(window).height()>o.w.height()?Math.floor(($(window).height()-o.w.height())/2):0)+"px";$.each($(o.t).get(0).attributes,function(e,t){if(/^data\-autoload\-(.+)$/.test(t.nodeName)){var a=t.nodeName.match(/^data\-autoload\-(.+)$/)[1],i=$('input[name="'+a.toUpperCase()+'"]');i.val($(o.t).data("autoload-"+a)).attr("readonly","readonly"),i.attr("title",i.val())}}),$(o.t).data("autohide")&&$(o.w).data("autohide",$(o.t).data("autohide")),"order_product"==e&&$(o.t).data("product")&&$('input[name="PRODUCT"]').val($(o.t).data("product")).attr("readonly","readonly").attr("title",$('input[name="PRODUCT"]').val()),"question"==e&&$(o.t).data("product")&&$('input[name="NEED_PRODUCT"]').val($(o.t).data("product")).attr("readonly","readonly").attr("title",$('input[name="NEED_PRODUCT"]').val()),o.w.addClass("show").css({"margin-left":"-"+Math.floor(o.w.width()/2)+"px",top:t,opacity:1})}function onHide(hash){$(hash.w).data("autohide")&&eval($(hash.w).data("autohide")),hash.w.css("opacity",0).hide(),hash.w.empty(),hash.o.remove(),hash.w.removeClass("show")}CheckTopMenuDotted=function(){var e=$("nav.mega-menu"),t=e.find("td.js-dropdown");if("none"==e.parents(".collapse").css("display"))return!1;for(var a=e.closest("div").actual("width"),i=e.find("table").actual("outerWidth"),o=!1,n=h_block_top=0;a<i&&(menuItemOldSave=e.find("td").not(".nosave").last(),menuItemOldSave.length);)t.show(),n=39,menuItemOldSave.find(".wrap .dropdown-menu").length&&(h_block_top=menuItemOldSave.find(".wrap .dropdown-menu").actual("outerHeight"),h_block_top/=2),menuItemNewSave='<li class="'+(menuItemOldSave.hasClass("dropdown")?"dropdown-submenu ":"")+(menuItemOldSave.hasClass("active")?"active ":"")+'" data-hidewidth="'+i+'" style="height:'+n+'px"><div class="slide_wrapp" style="padding-bottom:'+h_block_top+'px">'+menuItemOldSave.find(".wrap").html()+"</div></li>",menuItemOldSave.remove(),t.find("> .wrap > .dropdown-menu").prepend(menuItemNewSave),i=e.find("table").actual("outerWidth"),o=!0;if(!o)do{var s=t.find(".dropdown-menu").find("li").length;if(menuItemOldSave=t.find(".dropdown-menu").find("li").first(),!menuItemOldSave.length){t.hide();break}if(a<menuItemOldSave.attr("data-hidewidth"))break;if(menuItemNewSave='<td class="'+(menuItemOldSave.hasClass("dropdown-submenu")?"dropdown ":"")+(menuItemOldSave.hasClass("active")?"active ":"")+'" data-hidewidth="'+a+'"><div class="wrap">'+menuItemOldSave.html()+"</div></td>",menuItemOldSave.remove(),$(menuItemNewSave).insertBefore(e.find("td.js-dropdown")),!s){t.hide();break}i=e.find("table").actual("outerWidth")}while(i<=a);return e.find("td").css("visibility","visible"),!1},CheckTopVisibleMenu=function(e){var t=$(".dropdown-menu:not(.fixed_menu_ext):visible").last();if(t.length){t.find("a").css("white-space",""),t.css("left",""),t.css("right",""),t.removeClass("toright");var a=t.offset().left;if(void 0!==a){var i=t.parents(".mega-menu"),o=i.outerWidth(),n=i.offset().left+o,s=0<t.parents(".toright").length,r=t.parents(".dropdown-menu:not(.fixed_menu_ext)"),l=0<r.length;if(l)var c=r.first().outerWidth()+r.first().offset().left;c+t.outerWidth()>n&&t.find("a").css("white-space","normal");var d=a+t.outerWidth();if(n<d||s){var h;if(h=n-d,l||s)t.css("left","auto"),t.css("right","100%"),t.addClass("toright");else{var p=parseInt(t.css("left"));t.css("left",p+h+"px")}}}}},CheckPopupTop=function(){var e=$(".jqmWindow.show");if(e.length){var t=$(document).scrollTop(),a=$(window).height(),i=parseInt(e.css("top")),o=e.height();o<=a?i=(a-o)/2:(documentScrollTopLast<t?i-=t-documentScrollTopLast:t<documentScrollTopLast&&(i+=documentScrollTopLast-t),i+o<a?i=a-o:0<i&&(i=0)),e.css("top",i+"px")}},CheckMainBannerSliderVText=function(e){if(e.parents(".banners-big").length){var i=e.height();e.find(".item").each(function(){var e=$(this).find(".text .inner");if(e.length){var t=e.actual("height"),a=i<=t?0:Math.floor((i-t)/2);e.css("padding-top",a+"px")}})}},CheckStickyFooter=function(){$(window).resize(function(){try{var e=$("footer").outerHeight(),t=0;ignoreResize.push(!0),$("footer").css("margin-top","-"+e+"px"),$(".body").css("margin-bottom","-"+e+"px"),$(".body").hasClass("index")||(t=25),$(".body").hasClass("detail_page")&&(t=0),$(".main").css("padding-bottom",e+t+"px"),ignoreResize.pop()}catch(e){}})},getGridSize=function(e){var t=parseInt($(".body_media").css("top")),a=1;return a=2==t?e[0]:1==t?e[1]:e[2],e[3]&&3==t&&(a=1),a},CheckFlexSlider=function(){$(".flexslider:not(.thmb)").each(function(){var e=$(this);e.resize();var t=e.data("flexslider").vars.counts;if(void 0!==t){var a=getGridSize(t);(a!=e.data("flexslider").vars.minItems||a!=e.data("flexslider").vars.maxItems||a!=e.data("flexslider").vars.move)&&(e.data("flexslider").vars.minItems=a,e.data("flexslider").vars.maxItems=a,e.data("flexslider").vars.move=a,e.flexslider(0),e.resize(),e.resize())}})},CheckHeaderFixed=function(){var o=$("header.canfixed");if(o.length){var n=o.find(".logo_and_menu-row");if(n.length){var s=!1,r=!0,l=n.actual("outerHeight"),c=l-53,d=$(".btn.btn-responsive-nav");$(window).scroll(function(){var e=$("#panel:visible").outerHeight(),t=$(window).scrollTop();if(s||(l=n.actual("outerHeight"),c=l-53),r=!d.is(":visible")&&!$(".dropdown-menu:not(.fixed_menu_ext):visible").length,s){if(s||!r){if(t<=c+e||!r)s=!1,o.removeClass("fixed"),(a=o.next()).length&&a.css("margin-top",""),CheckTopMenuDotted()}}else if(l+e<t&&r){var a;if(s=!0,(a=o.next()).length)var i=parseInt(a.css("margin-top"));o.css("top","-"+l+"px"),o.addClass("fixed"),a.length&&a.css("margin-top",l+i+"px"),o.delay(0).animate({top:"0"},300)}})}}},CheckObjectsSizes=function(){$(".container iframe,.container object,.container video").each(function(){var e=$(this).attr("height"),t=$(this).attr("width");e&&t&&$(this).css("height",$(this).outerWidth()*e/t)})},CheckFilterSeletSizes=function(){$(".bx_filter_select_block").each(function(){var e=$("#smartFilterDropDown"+$(this).data("id"));e.length&&e.css({width:$(this).css("width")})})},scrollToTop=function(){if("NONE"!==arStroyOptions.THEME.SCROLLTOTOP_TYPE){var t=!1;$("body").append($("<a />").addClass("scroll-to-top "+arStroyOptions.THEME.SCROLLTOTOP_TYPE+" "+arStroyOptions.THEME.SCROLLTOTOP_POSITION).attr({href:"#",id:"scrollToTop"})),$("#scrollToTop").click(function(e){return e.preventDefault(),$("body, html").animate({scrollTop:0},500),!1}),$(window).scroll(function(){if(!t){t=!0;var e=$(window).scrollTop();$(window).height(),$("footer").offset().top;150<e?$("#scrollToTop").stop(!0,!0).addClass("visible"):$("#scrollToTop").stop(!0,!0).removeClass("visible"),t=!1,CheckScrollToTop()}})}},CheckScrollToTop=function(){var e=$(window).scrollTop(),t=$(window).height(),a=$("footer").offset().top;a<e+t?$("#scrollToTop").css("bottom",23+e+t-a):23<parseInt($("#scrollToTop").css("bottom"))&&$("#scrollToTop").css("bottom",23)},$.fn.equalizeHeights=function(o,n,s){for(var e=this.map(function(e,t){var a=0,i=0;return!1!==n&&$(t).find(n).length&&(a=parseInt($(t).find(n).actual("outerHeight"))),a&&(a+=12),$(t).css("height",""),i=1==o?$(t).actual("outerHeight")-a:$(t).actual("height")-a,!1!==s&&(i<s&&(i+=s-i),window.matchMedia("(max-width: 520px)").matches&&(i=300),window.matchMedia("(max-width: 400px)").matches&&(i=200)),i}).get(),t=0,a=e.length;t<a;++t)e[t]%2&&--e[t];return this.height(Math.max.apply(this,e))},$.fn.sliceHeight=function(n){function t(e){if(e.each(function(){$(this).css("line-height",""),$(this).css("height","")}),void 0===n.autoslicecount||!1!==n.autoslicecount){var t=e.first().hasClass("item")?e.first().outerWidth():e.first().parents(".item").outerWidth(),a=e.first().parents(".items").outerWidth();a||(a=e.first().parents(".row").outerWidth()),a&&t&&(n.slice=Math.floor(a/t))}if(n.slice)for(var i=0;i<e.length;i+=n.slice)$(e.slice(i,i+n.slice)).equalizeHeights(n.outer,n.classNull,n.minHeight);if(n.lineheight){var o=parseInt(n.lineheight);isNaN(o)&&(o=0),e.each(function(){$(this).css("line-height",$(this).actual("height")+o+"px")})}}n=$.extend({slice:null,outer:!1,lineheight:!1,autoslicecount:!0,classNull:!1,minHeight:!1,options:!1},n);var a=$(this);t(a),BX.addCustomEvent("onWindowResize",function(e){ignoreResize.push(!0),t(a),"Y"==n.opacity&&a.each(function(){$(this).css("opacity","1")}),ignoreResize.pop()})},waitingExists=function(e,t,a){void 0!==a&&e.length&&0<t&&(t=(t=parseInt(t))<0?0:t,$(e).length?a():setTimeout(function(){waitingExists(e,t,a)},t))},waitingNotExists=function(e,t,a,i){void 0!==i&&e.length&&t.length&&0<a&&(a=(a=parseInt(a))<0?0:a,setTimeout(function(){e.length&&!$(t).length&&i()},a))},$.fn.jqmEx=function(){$(this).each(function(){var n=$(this),e=n.data("name");if(e.length){var t=arStroyOptions.SITE_DIR+"ajax/form.php",s="",r="",l={};$.each(n.get(0).attributes,function(e,t){var a=t.nodeName,i=n.attr(a);if(r+="["+a+'="'+i+'"]',l[a]=i,/^data\-param\-(.+)$/.test(a)){var o=a.match(/^data\-param\-(.+)$/)[1];s+=o+"="+i+"&"}}),"data-page-url"in l||(l["data-page-url"]=location.href);var a=JSON.stringify(l),i=encodeURIComponent(a);t+="?"+s+"data-trigger="+i,$("."+e+'_frame[data-trigger="'+i+'"]').length||"disabled"!=n.attr("disabled")&&($("body").find("."+e+'_frame[data-trigger="'+i+'"]').remove(),$("body").append('<div class="'+e+'_frame jqmWindow" style="width:500px" data-trigger="'+i+'"></div>'),$("."+e+'_frame[data-trigger="'+i+'"]').jqm({trigger:r,onLoad:function(e){onLoadjqm(e)},onHide:function(e){onHide(e)},ajax:t}))}})},InitFlexSlider=function(){$(".flexslider:not(.thmb):not(.flexslider-init)").each(function(){var e=$(this),t=$.extend({},{animationLoop:!1,controlNav:!1,directionNav:!0,animation:"slide"},void 0,e.data("plugin-options"));void 0!==t.counts&&"vertical"!==t.direction&&(t.maxItems=getGridSize(t.counts),t.minItems=getGridSize(t.counts),t.move=getGridSize(t.counts),t.itemWidth=200),t.after=t.start=function(e){var t={slider:e};BX.onCustomEvent("onSlide",[t])},t.end=function(e){var t={slider:e};BX.onCustomEvent("onSlideEnd",[t])},e.flexslider(t).addClass("flexslider-init"),t.controlNav&&e.addClass("flexslider-control-nav"),t.directionNav&&e.addClass("flexslider-direction-nav")})},touchBlock=function(e){$(e).each(function(){var t=$(this);t.on("touchend",function(e){t.parent().hasClass("touch_class")||(e.preventDefault(),e.stopPropagation(),t.parents().find(".touch_class").removeClass("touch_class"),t.parent().addClass("touch_class"))})})},clickTouchLink=function(e,t,a){e.on("click",function(e){var t=$(this);if(t.hasClass("move_link")){var a=t.find("a").attr("href");window.location.href=a}else e.preventDefault(),$(".move_link").removeClass("move_link"),t.addClass("move_link"),t.hover()})},$(document).ready(function(){(device.mobile()||device.tablet())&&(clickTouchLink($(".catalog.sections .item"),".catalog.sections",".item"),clickTouchLink($(".item-views.portfolio .item"),".item-views.portfolio",".item"),clickTouchLink($(".mega-menu table td>.wrap"),".mega-menu",">.wrap"),clickTouchLink($("ul.dropdown-menu>.dropdown-submenu>li"),".wrap",".dropdown-submenu>li")),scrollToTop(),CheckStickyFooter(),jQuery.browser.safari?setTimeout(function(){$(window).resize(),setTimeout(function(){CheckTopMenuDotted(),CheckHeaderFixed(),setTimeout(function(){$(window).scroll()},50)},50)},350):(setTimeout(function(){CheckTopMenuDotted()},250),CheckHeaderFixed(),setTimeout(function(){$(window).resize()},150),setTimeout(function(){$(window).scroll()},250)),$(".blink img").blink(),waitingNotExists("#bx-composite-banner .bx-composite-btn","#footer .col-sm-3.hidden-md.hidden-lg #bx-composite-banner .bx-composite-btn",500,function(){$("#footer .col-sm-3.hidden-md.hidden-lg #bx-composite-banner").html($("#bx-composite-banner .bx-composite-btn").parent().html())}),"Y"===arStroyOptions.THEME.USE_DEBUG_GOALS?$.cookie("_ym_debug",1,{path:"/"}):$.cookie("_ym_debug",null,{path:"/"}),$.extend($.validator.messages,{required:BX.message("JS_REQUIRED"),email:BX.message("JS_FORMAT"),equalTo:BX.message("JS_PASSWORD_COPY"),minlength:BX.message("JS_PASSWORD_LENGTH"),remote:BX.message("JS_ERROR")}),$.validator.addMethod("regexp",function(e,t,a){var i=new RegExp(a);return this.optional(t)||i.test(e)},BX.message("JS_FORMAT")),$.validator.addMethod("filesize",function(e,t,a){return this.optional(t)||t.files[0].size<=a},BX.message("JS_FILE_SIZE")),$.validator.addMethod("date",function(e,t,a){var i=!1;if(!e||e.length<=0)i=!1;else{var o=new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$").exec(e);if(o){var n=new Date(o[5],o[3]-1,o[1]);i=n.getMonth()==o[3]-1&&n.getDate()==o[1]&&n.getFullYear()==o[5]}}return i},BX.message("JS_DATE")),$.validator.addMethod("datetime",function(e,t,a){var i=!1;if(!e||e.length<=0)i=!1;else{var o=new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4}) ([0-9]{1,2}):([0-9]{1,2})$").exec(e);if(o){var n=new Date(o[5],o[3]-1,o[1],o[6],o[7]);i=n.getMonth()==o[3]-1&&n.getDate()==o[1]&&n.getFullYear()==o[5]&&n.getHours()==o[6]&&n.getMinutes()==o[7]}}return i},BX.message("JS_DATETIME")),$.validator.addMethod("extension",function(e,t,a){return a="string"==typeof a?a.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(t)||e.match(new RegExp(".("+a+")$","i"))},BX.message("JS_FILE_EXT")),$.validator.addMethod("captcha",function(e,t,a){return $.validator.methods.remote.call(this,e,t,{url:arStroyOptions.SITE_DIR+"ajax/check-captcha.php",type:"post",data:{captcha_word:e,captcha_sid:function(){return $(t).closest("form").find('input[name="captcha_sid"]').val()}}})},BX.message("JS_ERROR")),$("body").on("click",".refresh",function(e){e.preventDefault(),$.ajax({url:arStroyOptions.SITE_DIR+"ajax/captcha.php"}).done(function(e){$(".captcha_sid").val(e),$(".captcha_img").attr("src","/bitrix/tools/captcha.php?captcha_sid="+e)})}),$.validator.addMethod("recaptcha",function(e,t,a){var i=$(t).closest("form").find(".g-recaptcha").attr("data-widgetid");return void 0===i||""!=grecaptcha.getResponse(i)},BX.message("JS_RECAPTCHA_ERROR")),$.validator.addMethod("processing_approval",function(e,t,a){return $(t).is(":checked")},BX.message("JS_PROCESSING_ERROR")),$.validator.addClassRules({phone:{regexp:arStroyOptions.THEME.VALIDATE_PHONE_MASK},confirm_password:{equalTo:'input[name="REGISTER[PASSWORD]"]',minlength:6},password:{minlength:6},inputfile:{extension:arStroyOptions.THEME.VALIDATE_FILE_EXT,filesize:5e6},datetime:{datetime:""},captcha:{captcha:""},recaptcha:{recaptcha:""},processing_approval:{processing_approval:""}}),InitFlexSlider(),waitingNotExists(".detail .galery #slider",".detail .galery #slider .flex-viewport",1e3,function(){InitFlexSlider(),setTimeout(function(){$(window).resize()},350)}),jQuery.browser.mobile||device.tablet()?($(".style-switcher").addClass("hidden"),$(".hint span").remove(),$('*[data-event="jqm"]').live("click",function(e){e.preventDefault();var n=$(this),t=n.data("name");if(t.length){var a=arStroyOptions.SITE_DIR+"form/",s="",r={};$.each(n.get(0).attributes,function(e,t){var a=t.nodeName,i=n.attr(a);if(r[a]=i,/^data\-param\-(.+)$/.test(a)){var o=a.match(/^data\-param\-(.+)$/)[1];s+=o+"="+i+"&"}}),"data-page-url"in r||(r["data-page-url"]=location.href);var i=JSON.stringify(r),o=encodeURIComponent(i);a+="?name="+t+"&"+s+"data-trigger="+o,location.href=a}}),$(".footer_button").css("display","none")):$('*[data-event="jqm"]').live("click",function(e){e.preventDefault(),$(this).jqmEx(),$(this).trigger("click")}),document.addEventListener("touchend",function(e){$(e.target).closest(".menu_item_l1").length||$(".front .item").removeClass("touch_class")},!1),$("a.fancybox:has(img)").fancybox({tpl:{closeBtn:'<a title="'+BX.message("FANCY_CLOSE")+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="'+BX.message("FANCY_NEXT")+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="'+BX.message("FANCY_PREV")+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}}),$("a.fancybox_ext").fancybox({tpl:{closeBtn:'<a title="'+BX.message("FANCY_CLOSE")+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="'+BX.message("FANCY_NEXT")+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="'+BX.message("FANCY_PREV")+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}}),$(document).on("click",".fancy_gallery",function(e){e.preventDefault();var t=[];t.push({href:$(this).attr("href"),title:$(this).attr("title")}),$(this).closest(".image").find(".popup_gallery .img").each(function(){t.push({href:$(this).data("big"),title:$(this).data("title")})}),$.fancybox(t,{openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",tpl:{closeBtn:'<a title="'+BX.message("FANCY_CLOSE")+'" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="'+BX.message("FANCY_NEXT")+'" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="'+BX.message("FANCY_PREV")+'" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}})});var a=!1;$("#mainMenu li.dropdown > a, #mainMenu li.dropdown-submenu > a").on("click",function(e){var t=$(this);e.preventDefault(),a=t.parent().hasClass("resp-active"),t.closest(".dropdown-menu").length||$("#mainMenu").find(".resp-active").removeClass("resp-active"),a?t.closest("li").removeClass("resp-active"):t.closest("li").addClass("resp-active")}),$(".styled-block .row > div.col-md-3").length&&BX.addCustomEvent("onWindowResize",function(e){try{ignoreResize.push(!0),$(".styled-block .row > div.col-md-3").each(function(){if($(this).css({height:"","line-height":""}),0<parseInt($(".body_media").css("top"))){var e=$(this).parents(".row").first().actual("outerHeight");$(this).css({height:e+"px"})}})}catch(e){}finally{ignoreResize.pop()}}),$(".order-block").length&&BX.addCustomEvent("onWindowResize",function(e){try{ignoreResize.push(!0),$(".order-block").each(function(){var e=$(this).find(".row > div");if(e.length){var t=e.first(),a=e.last(),i=a.find(".text"),o=i.length,n=1===e.length&&o,s=t.find(".price").length,r=parseInt($(".body_media").css("top"));if(e.css({height:"","padding-top":"","padding-bottom":""}),i.css({height:"","padding-top":"","padding-bottom":""}),!s&&0<r||s&&1<r){if(!n){var l=t.outerHeight();l=83<=l?l:83}if(o){var c=a.outerHeight();c=83<=c?c:83}var d=o?n?c:l<=c?c:l:l;if(!n){var h=22+(d-t.outerHeight())/2;t.css({"padding-top":h+"px","padding-bottom":h+"px",height:d+"px"})}if(o){a.css({height:d+"px"});h=22+(d-i.outerHeight())/2;i.css({"padding-top":h+"px","padding-bottom":h+"px",height:d+"px"})}}}})}catch(e){}finally{ignoreResize.pop()}}),$(document).on("click",".mega-menu .dropdown-menu",function(e){e.stopPropagation()}),$(document).on("click",".mega-menu .dropdown-toggle.more-items",function(e){e.preventDefault()}),$(".table-menu .dropdown,.table-menu .dropdown-submenu,.table-menu .dropdown-toggle").live("mouseenter",function(){CheckTopVisibleMenu()});$(".flex-viewport .item").on("mouseenter",function(){$(this).closest(".flexslider").find(".flex-control-nav").toggleClass("noz"),$(this).closest(".flexslider").find(".flex-control-nav").css("z-index","0")}),$(".flex-viewport .item").on("mouseleave",function(){$(this).closest(".flexslider").find(".flex-control-nav").toggleClass("noz"),$(this).closest(".flexslider").find(".flex-control-nav").css("z-index","2")}),$(".mega-menu .search-item, .menu-row #title-search .fa-close").live("click",function(e){e.preventDefault(),$(".menu-row #title-search").toggleClass("hide")}),$(".logo_and_menu-row .logo-row .search-input-div input").live("keyup",function(e){var t=$(this).val();$(".menu-only .search input").val(t),$(".logo_and_menu-row .logo-row .search-input-div input").val(t),13==e.keyCode&&$(".menu-only .search form").submit()}),$(".menu-row .search input").live("keyup",function(e){var t=$(this).val();$(".menu-only .search input").val(t),$(".logo_and_menu-row .logo-row .search-input-div input").val(t),13==e.keyCode&&$(".menu-only .search form").submit()}),$(".logo_and_menu-row .search-button-div button").live("click",function(e){e.preventDefault();var t=$(this).parents().find("input").val();$(".menu-only .search input").val(t),$(".menu-only .search form").submit()}),$(".filter .calendar").live("click",function(){var e=$(this).next();e.hasClass("calendar-icon")&&e.trigger("click")});$("section.toggle > label").prepend($("<i />").addClass("fa fa-plus")),$("section.toggle > label").prepend($("<i />").addClass("fa fa-minus")),$("section.toggle.active > p").addClass("preview-active"),$("section.toggle.active > div.toggle-content").slideDown(350,function(){}),$("section.toggle > label").click(function(e){var t=$(this).parent(),a=$(this).parents("div.toogle"),i=!1;if(a.hasClass("toogle-accordion")&&void 0!==e.originalEvent&&a.find("section.toggle.active > label").trigger("click"),t.toggleClass("active"),t.find("> p").get(0)){var o=(i=t.find("> p")).css("height");i.css("height","auto");var n=i.css("height");i.css("height",o)}var s=t.find("> div.toggle-content");t.hasClass("active")?($(i).animate({height:n},350,function(){$(this).addClass("preview-active")}),s.slideDown(350,function(){})):($(i).animate({height:25},350,function(){$(this).removeClass("preview-active")}),s.slideUp(350,function(){}))}),$(".accordion-head").on("click",function(e){e.preventDefault(),$(this).next().hasClass("collapsing")||($(this).toggleClass("accordion-open"),$(this).toggleClass("accordion-close"))}),$("[data-appear-progress-animation]").each(function(){var t=$(this);t.appear(function(){var e=t.attr("data-appear-animation-delay")?t.attr("data-appear-animation-delay"):1;1<e&&t.css("animation-delay",e+"ms"),t.addClass(t.attr("data-appear-animation")),setTimeout(function(){t.animate({width:t.attr("data-appear-progress-animation")},1500,"easeOutQuad",function(){t.find(".progress-bar-tooltip").animate({opacity:1},500,"easeOutQuad")})},e)},{accX:0,accY:-50})}),$("a[rel=tooltip]").tooltip(),$("span[data-toggle=tooltip]").tooltip(),$("select.sort").live("change",function(){location.href=$(this).val()}),setTimeout(function(e){$(".catalog.group.list .item").each(function(){var e=$(this);0<(tmp=e.find(".image").outerHeight()-e.find(".text_info").outerHeight())&&e.find(".text_info .titles").height(e.find(".text_info .titles").outerHeight()+tmp)})},50),$(".thumbs .item a").live("click",function(e){e.preventDefault(),$(".thumbs .item").removeClass("current"),$(this).closest(".item").toggleClass("current"),$(".slides li"+$(this).attr("href")).addClass("current").siblings().removeClass("current")}),$("header.fixed .btn-responsive-nav").live("click",function(){$("html, body").animate({scrollTop:0},400)}),$(".more_block span").live("click",function(){var e=$(".detail .scroll_block").offset();$("html, body").animate({scrollTop:e.top-53},400)}),$("body").on("click",".form .refresh-page",function(){location.href=location.href}),$(".spincrement1").counterUp({delay:80,time:1e3}),$(".bx_filter_input_container input[type=text]").numeric({allow:"."}),$(".top_menu_fixed_js").appendTo($(".fixed_menu .menu_wr.mega-menu"))});var waitCounter=function(e,t,a){"object"==typeof window["yaCounter"+e]?"function"==typeof a&&a():setTimeout(function(){waitCounter(e,t,a)},t)},waitReCaptcha=function(e,t){"object"==typeof grecaptcha?"function"==typeof t&&t():setTimeout(function(){waitReCaptcha(e,t)},e)},reCaptchaRender=function(e){},reCaptchaVerify=function(e){$(".g-recaptcha.rendered").each(function(){var e=$(this).attr("data-widgetid");void 0!==e&&""!=grecaptcha.getResponse(e)&&$(this).closest("form").find(".recaptcha").valid()})},timerScroll=!1,ignoreScroll=[],documentScrollTopLast=$(document).scrollTop();$(window).scroll(function(){CheckPopupTop(),ignoreScroll.length||(timerScroll&&(clearTimeout(timerScroll),timerScroll=!1),timerScroll=setTimeout(function(){BX.onCustomEvent("onWindowScroll",!1)},100)),documentScrollTopLast=$(document).scrollTop()});var timerResize=!1,ignoreResize=[];$(window).resize(function(){CheckPopupTop(),CheckScrollToTop(),ignoreResize.length||(timerResize&&(clearTimeout(timerResize),timerResize=!1),timerResize=setTimeout(function(){BX.onCustomEvent("onWindowResize",!1)},100)),documentScrollTopLast=$(document).scrollTop()}),BX.addCustomEvent("onWindowScroll",function(e){try{ignoreScroll.push(!0)}catch(e){}finally{ignoreScroll.pop()}}),BX.addCustomEvent("onWindowResize",function(e){try{ignoreResize.push(!0),CheckTopMenuDotted(),CheckTopVisibleMenu(),CheckFlexSlider(),CheckMainBannerSliderVText($(".banners-big .flexslider")),CheckObjectsSizes(),CheckFilterSeletSizes(),$(".table.catalog.front").length&&($(".table.catalog.front .flexslider").find(".flex-direction-nav .flex-disabled").length?$(".table.catalog.front").find(".white.transparent").addClass("to-right"):$(".table.catalog.front").find(".white.transparent").removeClass("to-right"))}catch(e){}finally{ignoreResize.pop()}}),BX.addCustomEvent("onSlide",function(e){try{if(ignoreResize.push(!0),e){var t=e.slider,a="";if(t){(a=t.closest(".catalog.front")).length&&(t.find(".flex-direction-nav .flex-disabled").length?a.find(".white.transparent").addClass("to-right"):a.find(".white.transparent").removeClass("to-right")),t.find(".item").removeClass("current");var i=t.find(".item.flex-active-slide"),o=i.attr("id");i.addClass("current"),i.hasClass("shown")&&t.find(".item.clone[id="+o+"_clone]").addClass("shown"),i.addClass("shown"),t.resize(),CheckMainBannerSliderVText(t)}}}catch(e){}finally{ignoreResize.pop()}}),BX.addCustomEvent("onSlideEnd",function(e){try{if(ignoreResize.push(!0),e)e.slider}catch(e){}finally{ignoreResize.pop()}}),BX.addCustomEvent("onCounterGoals",function(t){if("Y"===arStroyOptions.THEME.USE_YA_COUNTER){var a=arStroyOptions.THEME.YA_COUNTER_ID;if(a=parseInt(a),"object"!=typeof t&&(t={goal:"undefined"}),"string"!=typeof t.goal&&(t.goal="undefined"),a)try{waitCounter(a,50,function(){var e=window["yaCounter"+a];"object"==typeof e&&e.reachGoal(t.goal)})}catch(e){console.error(e)}else console.info("Bad counter id!",a)}});var onCaptchaVerifyinvisible=function(e){$(".g-recaptcha:last").each(function(){void 0!==$(this).attr("data-widgetid")&&e&&($(this).closest("form").find(".g-recaptcha-response").val()||$(this).closest("form").find(".g-recaptcha-response").val(e),$("iframe[src*=recaptcha]").length&&$("iframe[src*=recaptcha]").each(function(){var e=$(this).parent().parent();e.hasClass("grecaptcha-badge")||e.css("width","100%")}),"form_comment"==$(this).closest("form").attr("name")?BX.submit(BX("form_comment")):$(this).closest("form").submit())})},onCaptchaVerifynormal=function(e){$(".g-recaptcha").each(function(){var e=$(this).attr("data-widgetid");void 0!==e&&""!=grecaptcha.getResponse(e)&&$(this).closest("form").find(".recaptcha").valid()})};BX.addCustomEvent("onSubmitForm",function(e){try{if(!window.renderRecaptchaById||!window.asproRecaptcha||!window.asproRecaptcha.key)return e.form.submit(),$(e.form).closest(".form").addClass("sending"),!0;if("invisible"==window.asproRecaptcha.params.recaptchaSize&&"undefined"!=typeof grecaptcha){if(!$(e.form).find(".g-recaptcha-response").val())return grecaptcha.execute($(e.form).find(".g-recaptcha").data("widgetid")),!1;e.form.submit(),$(e.form).closest(".form").addClass("sending")}else e.form.submit(),$(e.form).closest(".form").addClass("sending");return!0}catch(e){return console.error(e),!0}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/aspro-stroy/js/custom.js?147928957841";s:6:"source";s:42:"/bitrix/templates/aspro-stroy/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Add here all your JS customizations */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/aspro-stroy/js/spectrum.min.js?150477693928168";s:6:"source";s:44:"/bitrix/templates/aspro-stroy/js/spectrum.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t:t(jQuery)}(function(t,e){"use strict";function r(e,r,n,a){for(var i=[],s=0;s<e.length;s++){var o=e[s];if(o){var l=tinycolor(o),c=l.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=tinycolor.equals(r,o)?" sp-thumb-active":"";var f=l.toString(a.preferredFormat||"rgb"),u=b?"background-color:"+l.toRgbString():"filter:"+l.toFilter();i.push('<span title="'+f+'" data-color="'+l.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+u+';" /></span>')}else{var h="sp-clear-display";i.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="'+h+'"></span>').attr("title",a.noColorSelectedText)).html())}}return"<div class='sp-cf "+n+"'>"+i.join("")+"</div>"}function n(){for(var t=0;t<p.length;t++)p[t]&&p[t].hide()}function a(e,r){var n=t.extend({},d,e);return n.callbacks={move:c(n.move,r),change:c(n.change,r),show:c(n.show,r),hide:c(n.hide,r),beforeShow:c(n.beforeShow,r)},n}function i(i,o){function c(){if(W.showPaletteOnly&&(W.showPalette=!0),Dt.text(W.showPaletteOnly?W.togglePaletteMoreText:W.togglePaletteLessText),W.palette){dt=W.palette.slice(0),pt=t.isArray(dt[0])?dt:[dt],gt={};for(var e=0;e<pt.length;e++)for(var r=0;r<pt[e].length;r++){var n=tinycolor(pt[e][r]).toRgbString();gt[n]=!0}}kt.toggleClass("sp-flat",X),kt.toggleClass("sp-input-disabled",!W.showInput),kt.toggleClass("sp-alpha-enabled",W.showAlpha),kt.toggleClass("sp-clear-enabled",Jt),kt.toggleClass("sp-buttons-disabled",!W.showButtons),kt.toggleClass("sp-palette-buttons-disabled",!W.togglePaletteOnly),kt.toggleClass("sp-palette-disabled",!W.showPalette),kt.toggleClass("sp-palette-only",W.showPaletteOnly),kt.toggleClass("sp-initial-disabled",!W.showInitial),kt.addClass(W.className).addClass(W.containerClassName),z()}function d(){function e(e){return e.data&&e.data.ignore?(O(t(e.target).closest(".sp-thumb-el").data("color")),j()):(O(t(e.target).closest(".sp-thumb-el").data("color")),j(),I(!0),W.hideAfterPaletteSelect&&T()),!1}if(g&&kt.find("*:not(input)").attr("unselectable","on"),c(),Bt&&_t.after(Lt).hide(),Jt||jt.hide(),X)_t.after(kt).hide();else{var r="parent"===W.appendTo?_t.parent():t(W.appendTo);1!==r.length&&(r=t("body")),r.append(kt)}y(),Kt.bind("click.spectrum touchstart.spectrum",function(e){xt||A(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(_t.is(":disabled")||W.disabled===!0)&&V(),kt.click(l),Ft.change(P),Ft.bind("paste",function(){setTimeout(P,1)}),Ft.keydown(function(t){13==t.keyCode&&P()}),Et.text(W.cancelText),Et.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),F(),T()}),jt.attr("title",W.clearText),jt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),Qt=!0,j(),X&&I(!0)}),qt.text(W.chooseText),qt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),g&&Ft.is(":focus")&&Ft.trigger("change"),E()&&(I(!0),T())}),Dt.text(W.showPaletteOnly?W.togglePaletteMoreText:W.togglePaletteLessText),Dt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),W.showPaletteOnly=!W.showPaletteOnly,W.showPaletteOnly||X||kt.css("left","-="+(St.outerWidth(!0)+5)),c()}),f(Ht,function(t,e,r){ht=t/st,Qt=!1,r.shiftKey&&(ht=Math.round(10*ht)/10),j()},S,C),f(At,function(t,e){ct=parseFloat(e/at),Qt=!1,W.showAlpha||(ht=1),j()},S,C),f(Ct,function(t,e,r){if(r.shiftKey){if(!yt){var n=ft*et,a=rt-ut*rt,i=Math.abs(t-n)>Math.abs(e-a);yt=i?"x":"y"}}else yt=null;var s=!yt||"x"===yt,o=!yt||"y"===yt;s&&(ft=parseFloat(t/et)),o&&(ut=parseFloat((rt-e)/rt)),Qt=!1,W.showAlpha||(ht=1),j()},S,C),$t?(O($t),q(),Yt=Xt||tinycolor($t).format,w($t)):q(),X&&M();var n=g?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Ot.delegate(".sp-thumb-el",n,e),Nt.delegate(".sp-thumb-el:nth-child(1)",n,{ignore:!0},e)}function y(){if(G&&window.localStorage){try{var e=window.localStorage[G].split(",#");e.length>1&&(delete window.localStorage[G],t.each(e,function(t,e){w(e)}))}catch(r){}try{bt=window.localStorage[G].split(";")}catch(r){}}}function w(e){if(Y){var r=tinycolor(e).toRgbString();if(!gt[r]&&-1===t.inArray(r,bt))for(bt.push(r);bt.length>vt;)bt.shift();if(G&&window.localStorage)try{window.localStorage[G]=bt.join(";")}catch(n){}}}function _(){var t=[];if(W.showPalette)for(var e=0;e<bt.length;e++){var r=tinycolor(bt[e]).toRgbString();gt[r]||t.push(bt[e])}return t.reverse().slice(0,W.maxSelectionSize)}function x(){var e=N(),n=t.map(pt,function(t,n){return r(t,e,"sp-palette-row sp-palette-row-"+n,W)});y(),bt&&n.push(r(_(),e,"sp-palette-row sp-palette-row-selection",W)),Ot.html(n.join(""))}function k(){if(W.showInitial){var t=Wt,e=N();Nt.html(r([t,e],e,"sp-palette-row-initial",W))}}function S(){(0>=rt||0>=et||0>=at)&&z(),tt=!0,kt.addClass(mt),yt=null,_t.trigger("dragstart.spectrum",[N()])}function C(){tt=!1,kt.removeClass(mt),_t.trigger("dragstop.spectrum",[N()])}function P(){var t=Ft.val();if(null!==t&&""!==t||!Jt){var e=tinycolor(t);e.isValid()?(O(e),I(!0)):Ft.addClass("sp-validation-error")}else O(null),I(!0)}function A(){Z?T():M()}function M(){var e=t.Event("beforeShow.spectrum");return Z?void z():(_t.trigger(e,[N()]),void(J.beforeShow(N())===!1||e.isDefaultPrevented()||(n(),Z=!0,t(wt).bind("keydown.spectrum",R),t(wt).bind("click.spectrum",H),t(window).bind("resize.spectrum",U),Lt.addClass("sp-active"),kt.removeClass("sp-hidden"),z(),q(),Wt=N(),k(),J.show(Wt),_t.trigger("show.spectrum",[Wt]))))}function R(t){27===t.keyCode&&T()}function H(t){2!=t.button&&(tt||(Gt?I(!0):F(),T()))}function T(){Z&&!X&&(Z=!1,t(wt).unbind("keydown.spectrum",R),t(wt).unbind("click.spectrum",H),t(window).unbind("resize.spectrum",U),Lt.removeClass("sp-active"),kt.addClass("sp-hidden"),J.hide(N()),_t.trigger("hide.spectrum",[N()]))}function F(){O(Wt,!0)}function O(t,e){if(tinycolor.equals(t,N()))return void q();var r,n;!t&&Jt?Qt=!0:(Qt=!1,r=tinycolor(t),n=r.toHsv(),ct=n.h%360/360,ft=n.s,ut=n.v,ht=n.a),q(),r&&r.isValid()&&!e&&(Yt=Xt||r.getFormat())}function N(t){return t=t||{},Jt&&Qt?null:tinycolor.fromRatio({h:ct,s:ft,v:ut,a:Math.round(100*ht)/100},{format:t.format||Yt})}function E(){return!Ft.hasClass("sp-validation-error")}function j(){q(),J.move(N()),_t.trigger("move.spectrum",[N()])}function q(){Ft.removeClass("sp-validation-error"),D();var t=tinycolor.fromRatio({h:ct,s:1,v:1});Ct.css("background-color",t.toHexString());var e=Yt;1>ht&&(0!==ht||"name"!==e)&&("hex"===e||"hex3"===e||"hex6"===e||"name"===e)&&(e="rgb");var r=N({format:e}),n="";if(Vt.removeClass("sp-clear-display"),Vt.css("background-color","transparent"),!r&&Jt)Vt.addClass("sp-clear-display");else{var a=r.toHexString(),i=r.toRgbString();if(b||1===r.alpha?Vt.css("background-color",i):(Vt.css("background-color","transparent"),Vt.css("filter",r.toFilter())),W.showAlpha){var s=r.toRgb();s.a=0;var o=tinycolor(s).toRgbString(),l="linear-gradient(left, "+o+", "+a+")";g?Rt.css("filter",tinycolor(o).toFilter({gradientType:1},a)):(Rt.css("background","-webkit-"+l),Rt.css("background","-moz-"+l),Rt.css("background","-ms-"+l),Rt.css("background","linear-gradient(to right, "+o+", "+a+")"))}n=r.toString(e)}W.showInput&&Ft.val(n),W.showPalette&&x(),k()}function D(){var t=ft,e=ut;if(Jt&&Qt)Tt.hide(),Mt.hide(),Pt.hide();else{Tt.show(),Mt.show(),Pt.show();var r=t*et,n=rt-e*rt;r=Math.max(-nt,Math.min(et-nt,r-nt)),n=Math.max(-nt,Math.min(rt-nt,n-nt)),Pt.css({top:n+"px",left:r+"px"});var a=ht*st;Tt.css({left:a-ot/2+"px"});var i=ct*at;Mt.css({top:i-lt+"px"})}}function I(t){var e=N(),r="",n=!tinycolor.equals(e,Wt);e&&(r=e.toString(Yt),w(e)),It&&_t.val(r),t&&n&&(J.change(e),_t.trigger("change",[e]))}function z(){et=Ct.width(),rt=Ct.height(),nt=Pt.height(),it=At.width(),at=At.height(),lt=Mt.height(),st=Ht.width(),ot=Tt.width(),X||(kt.css("position","absolute"),W.offset?kt.offset(W.offset):kt.offset(s(kt,Kt))),D(),W.showPalette&&x(),_t.trigger("reflow.spectrum")}function B(){_t.show(),Kt.unbind("click.spectrum touchstart.spectrum"),kt.remove(),Lt.remove(),p[Ut.id]=null}function L(r,n){return r===e?t.extend({},W):n===e?W[r]:(W[r]=n,void c())}function K(){xt=!1,_t.attr("disabled",!1),Kt.removeClass("sp-disabled")}function V(){T(),xt=!0,_t.attr("disabled",!0),Kt.addClass("sp-disabled")}function $(t){W.offset=t,z()}var W=a(o,i),X=W.flat,Y=W.showSelectionPalette,G=W.localStorageKey,Q=W.theme,J=W.callbacks,U=u(z,10),Z=!1,tt=!1,et=0,rt=0,nt=0,at=0,it=0,st=0,ot=0,lt=0,ct=0,ft=0,ut=0,ht=1,dt=[],pt=[],gt={},bt=W.selectionPalette.slice(0),vt=W.maxSelectionSize,mt="sp-dragging",yt=null,wt=i.ownerDocument,_t=(wt.body,t(i)),xt=!1,kt=t(m,wt).addClass(Q),St=kt.find(".sp-picker-container"),Ct=kt.find(".sp-color"),Pt=kt.find(".sp-dragger"),At=kt.find(".sp-hue"),Mt=kt.find(".sp-slider"),Rt=kt.find(".sp-alpha-inner"),Ht=kt.find(".sp-alpha"),Tt=kt.find(".sp-alpha-handle"),Ft=kt.find(".sp-input"),Ot=kt.find(".sp-palette"),Nt=kt.find(".sp-initial"),Et=kt.find(".sp-cancel"),jt=kt.find(".sp-clear"),qt=kt.find(".sp-choose"),Dt=kt.find(".sp-palette-toggle"),It=_t.is("input"),zt=It&&"color"===_t.attr("type")&&h(),Bt=It&&!X,Lt=Bt?t(v).addClass(Q).addClass(W.className).addClass(W.replacerClassName):t([]),Kt=Bt?Lt:_t,Vt=Lt.find(".sp-preview-inner"),$t=W.color||It&&_t.val(),Wt=!1,Xt=W.preferredFormat,Yt=Xt,Gt=!W.showButtons||W.clickoutFiresChange,Qt=!$t,Jt=W.allowEmpty&&!zt;d();var Ut={show:M,hide:T,toggle:A,reflow:z,option:L,enable:K,disable:V,offset:$,set:function(t){O(t),I()},get:N,destroy:B,container:kt};return Ut.id=p.push(Ut)-1,Ut}function s(e,r){var n=0,a=e.outerWidth(),i=e.outerHeight(),s=r.outerHeight(),o=e[0].ownerDocument,l=o.documentElement,c=l.clientWidth+t(o).scrollLeft(),f=l.clientHeight+t(o).scrollTop(),u=r.offset();return u.top+=s,u.left-=Math.min(u.left,u.left+a>c&&c>a?Math.abs(u.left+a-c):0),u.top-=Math.min(u.top,u.top+i>f&&f>i?Math.abs(i+s-n):n),u}function o(){}function l(t){t.stopPropagation()}function c(t,e){var r=Array.prototype.slice,n=r.call(arguments,2);return function(){return t.apply(e,n.concat(r.call(arguments)))}}function f(e,r,n,a){function i(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function s(t){if(f){if(g&&c.documentMode<9&&!t.button)return l();var n=t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches[0],a=n&&n.pageX||t.pageX,s=n&&n.pageY||t.pageY,o=Math.max(0,Math.min(a-u.left,d)),b=Math.max(0,Math.min(s-u.top,h));p&&i(t),r.apply(e,[o,b,t])}}function o(r){var a=r.which?3==r.which:2==r.button;a||f||n.apply(e,arguments)!==!1&&(f=!0,h=t(e).height(),d=t(e).width(),u=t(e).offset(),t(c).bind(b),t(c.body).addClass("sp-dragging"),s(r),i(r))}function l(){f&&(t(c).unbind(b),t(c.body).removeClass("sp-dragging"),setTimeout(function(){a.apply(e,arguments)},0)),f=!1}r=r||function(){},n=n||function(){},a=a||function(){};var c=document,f=!1,u={},h=0,d=0,p="ontouchstart"in window,b={};b.selectstart=i,b.dragstart=i,b["touchmove mousemove"]=s,b["touchend mouseup"]=l,t(e).bind("touchstart mousedown",o)}function u(t,e,r){var n;return function(){var a=this,i=arguments,s=function(){n=null,t.apply(a,i)};r&&clearTimeout(n),(r||!n)&&(n=setTimeout(s,e))}}function h(){return t.fn.spectrum.inputTypeColorSupport()}var d={beforeShow:o,move:o,change:o,show:o,hide:o,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},p=[],g=!!/msie/i.exec(window.navigator.userAgent),b=function(){function t(t,e){return!!~(""+t).indexOf(e)}var e=document.createElement("div"),r=e.style;return r.cssText="background-color:rgba(0,0,0,.5)",t(r.backgroundColor,"rgba")||t(r.backgroundColor,"hsla")}(),v=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),m=function(){var t="";if(g)for(var e=1;6>=e;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),y="spectrum.id";t.fn.spectrum=function(e,r){if("string"==typeof e){var n=this,a=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=p[t(this).data(y)];if(r){var i=r[e];if(!i)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?n=r.get():"container"==e?n=r.container:"option"==e?n=r.option.apply(r,a):"destroy"==e?(r.destroy(),t(this).removeData(y)):i.apply(r,a)}}),n}return this.spectrum("destroy").each(function(){var r=t.extend({},e,t(this).data()),n=i(this,r);t(this).data(y,n.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=f,t.fn.spectrum.defaults=d,t.fn.spectrum.inputTypeColorSupport=function w(){if("undefined"==typeof w._cachedResult){var e=t("<input type='color' value='!' />")[0];w._cachedResult="color"===e.type&&"!"!==e.value}return w._cachedResult},t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("input[type=color]");e.length&&!h()&&e.spectrum({preferredFormat:"hex6"})},function(){function t(t){var r={r:0,g:0,b:0},a=1,s=!1,o=!1;return"string"==typeof t&&(t=F(t)),"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(r=e(t.r,t.g,t.b),s=!0,o="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=R(t.s),t.v=R(t.v),r=i(t.h,t.s,t.v),s=!0,o="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=R(t.s),t.l=R(t.l),r=n(t.h,t.s,t.l),s=!0,o="hsl"),t.hasOwnProperty("a")&&(a=t.a)),a=x(a),{ok:s,format:t.format||o,r:D(255,I(r.r,0)),g:D(255,I(r.g,0)),b:D(255,I(r.b,0)),a:a}}function e(t,e,r){return{r:255*k(t,255),g:255*k(e,255),b:255*k(r,255)}}function r(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var n,a,i=I(t,e,r),s=D(t,e,r),o=(i+s)/2;if(i==s)n=a=0;else{var l=i-s;switch(a=o>.5?l/(2-i-s):l/(i+s),i){case t:n=(e-r)/l+(r>e?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:a,l:o}}function n(t,e,r){function n(t,e,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?t+6*(e-t)*r:.5>r?e:2/3>r?t+(e-t)*(2/3-r)*6:t}var a,i,s;if(t=k(t,360),e=k(e,100),r=k(r,100),0===e)a=i=s=r;else{var o=.5>r?r*(1+e):r+e-r*e,l=2*r-o;a=n(l,o,t+1/3),i=n(l,o,t),s=n(l,o,t-1/3)}return{r:255*a,g:255*i,b:255*s}}function a(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var n,a,i=I(t,e,r),s=D(t,e,r),o=i,l=i-s;if(a=0===i?0:l/i,i==s)n=0;else{switch(i){case t:n=(e-r)/l+(r>e?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:a,v:o}}function i(t,e,r){t=6*k(t,360),e=k(e,100),r=k(r,100);var n=j.floor(t),a=t-n,i=r*(1-e),s=r*(1-a*e),o=r*(1-(1-a)*e),l=n%6,c=[r,s,i,i,o,r][l],f=[o,r,r,s,i,i][l],u=[i,i,o,r,r,s][l];return{r:255*c,g:255*f,b:255*u}}function s(t,e,r,n){var a=[M(q(t).toString(16)),M(q(e).toString(16)),M(q(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function o(t,e,r,n){var a=[M(H(n)),M(q(t).toString(16)),M(q(e).toString(16)),M(q(r).toString(16))];return a.join("")}function l(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s-=e/100,r.s=S(r.s),B(r)}function c(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s+=e/100,r.s=S(r.s),B(r)}function f(t){return B(t).desaturate(100)}function u(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l+=e/100,r.l=S(r.l),B(r)}function h(t,e){e=0===e?0:e||10;var r=B(t).toRgb();return r.r=I(0,D(255,r.r-q(255*-(e/100)))),r.g=I(0,D(255,r.g-q(255*-(e/100)))),r.b=I(0,D(255,r.b-q(255*-(e/100)))),B(r)}function d(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l-=e/100,r.l=S(r.l),B(r)}function p(t,e){var r=B(t).toHsl(),n=(q(r.h)+e)%360;return r.h=0>n?360+n:n,B(r)}function g(t){var e=B(t).toHsl();return e.h=(e.h+180)%360,B(e)}function b(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+120)%360,s:e.s,l:e.l}),B({h:(r+240)%360,s:e.s,l:e.l})]}function v(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+90)%360,s:e.s,l:e.l}),B({h:(r+180)%360,s:e.s,l:e.l}),B({h:(r+270)%360,s:e.s,l:e.l})]}function m(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+72)%360,s:e.s,l:e.l}),B({h:(r+216)%360,s:e.s,l:e.l})]}function y(t,e,r){e=e||6,r=r||30;var n=B(t).toHsl(),a=360/r,i=[B(t)];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(B(n));return i}function w(t,e){e=e||6;for(var r=B(t).toHsv(),n=r.h,a=r.s,i=r.v,s=[],o=1/e;e--;)s.push(B({h:n,s:a,v:i})),i=(i+o)%1;return s}function _(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function x(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function k(t,e){P(t)&&(t="100%");var r=A(t);return t=D(e,I(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),j.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function S(t){return D(1,I(0,t))}function C(t){return parseInt(t,16)}function P(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function A(t){return"string"==typeof t&&-1!=t.indexOf("%")}function M(t){return 1==t.length?"0"+t:""+t}function R(t){return 1>=t&&(t=100*t+"%"),t}function H(t){return Math.round(255*parseFloat(t)).toString(16)}function T(t){return C(t)/255}function F(t){t=t.replace(O,"").replace(N,"").toLowerCase();var e=!1;if(L[t])t=L[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=V.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=V.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=V.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=V.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=V.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=V.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=V.hex8.exec(t))?{a:T(r[1]),r:C(r[2]),g:C(r[3]),b:C(r[4]),format:e?"name":"hex8"}:(r=V.hex6.exec(t))?{r:C(r[1]),g:C(r[2]),b:C(r[3]),format:e?"name":"hex"}:(r=V.hex3.exec(t))?{r:C(r[1]+""+r[1]),g:C(r[2]+""+r[2]),b:C(r[3]+""+r[3]),format:e?"name":"hex"}:!1}var O=/^[\s,#]+/,N=/\s+$/,E=0,j=Math,q=j.round,D=j.min,I=j.max,z=j.random,B=function(e,r){if(e=e?e:"",r=r||{},e instanceof B)return e;if(!(this instanceof B))return new B(e,r);var n=t(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=q(100*this._a)/100,this._format=r.format||n.format,this._gradientType=r.gradientType,this._r<1&&(this._r=q(this._r)),this._g<1&&(this._g=q(this._g)),this._b<1&&(this._b=q(this._b)),this._ok=n.ok,this._tc_id=E++};B.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=x(t),this._roundA=q(100*this._a)/100,this},toHsv:function(){var t=a(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=a(this._r,this._g,this._b),e=q(360*t.h),r=q(100*t.s),n=q(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=r(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=r(this._r,this._g,this._b),e=q(360*t.h),n=q(100*t.s),a=q(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+a+"%)":"hsla("+e+", "+n+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return s(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return o(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:q(this._r),g:q(this._g),b:q(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+q(this._r)+", "+q(this._g)+", "+q(this._b)+")":"rgba("+q(this._r)+", "+q(this._g)+", "+q(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:q(100*k(this._r,255))+"%",g:q(100*k(this._g,255))+"%",b:q(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+q(100*k(this._r,255))+"%, "+q(100*k(this._g,255))+"%, "+q(100*k(this._b,255))+"%)":"rgba("+q(100*k(this._r,255))+"%, "+q(100*k(this._g,255))+"%, "+q(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:K[s(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var e="#"+o(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var a=B(t);r=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,a=!e&&n&&("hex"===t||"hex6"===t||"hex3"===t||"name"===t);return a?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(u,arguments)},brighten:function(){return this._applyModification(h,arguments)},darken:function(){return this._applyModification(d,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(f,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(g,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(m,arguments)},triad:function(){return this._applyCombination(b,arguments)},tetrad:function(){return this._applyCombination(v,arguments)}},B.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&("a"===n?r[n]=t[n]:r[n]=R(t[n]));t=r}return B(t,e)},B.equals=function(t,e){return t&&e?B(t).toRgbString()==B(e).toRgbString():!1},B.random=function(){return B.fromRatio({r:z(),g:z(),b:z()})},B.mix=function(t,e,r){r=0===r?0:r||50;var n,a=B(t).toRgb(),i=B(e).toRgb(),s=r/100,o=2*s-1,l=i.a-a.a;n=o*l==-1?o:(o+l)/(1+o*l),n=(n+1)/2;var c=1-n,f={r:i.r*n+a.r*c,g:i.g*n+a.g*c,b:i.b*n+a.b*c,a:i.a*s+a.a*(1-s)};return B(f)},B.readability=function(t,e){var r=B(t),n=B(e),a=r.toRgb(),i=n.toRgb(),s=r.getBrightness(),o=n.getBrightness(),l=Math.max(a.r,i.r)-Math.min(a.r,i.r)+Math.max(a.g,i.g)-Math.min(a.g,i.g)+Math.max(a.b,i.b)-Math.min(a.b,i.b);return{brightness:Math.abs(s-o),color:l}},B.isReadable=function(t,e){var r=B.readability(t,e);return r.brightness>125&&r.color>500},B.mostReadable=function(t,e){for(var r=null,n=0,a=!1,i=0;i<e.length;i++){var s=B.readability(t,e[i]),o=s.brightness>125&&s.color>500,l=3*(s.brightness/125)+s.color/500;(o&&!a||o&&a&&l>n||!o&&!a&&l>n)&&(a=o,n=l,r=B(e[i]))}return r};var L=B.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=B.hexNames=_(L),V=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+a),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();window.tinycolor=B}(),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15622393316443";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)};if(t.WAIT_IMAGE)this.arParams.WAIT_IMAGE=t.WAIT_IMAGE;if(t.MIN_QUERY_LEN<=0)t.MIN_QUERY_LEN=1;this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.runningCall=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML!==""?"block":"none";var s=e.adjustResultNode();var i;var n;var l=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(l){n=BX.findChild(l,{tag:"th"},true)}if(n){var r=BX.pos(l);r.width=r.right-r.left;var a=BX.pos(n);a.width=a.right-a.left;n.style.width=a.width+"px";e.RESULT.style.width=s.width+a.width+"px";e.RESULT.style.left=s.left-a.width-1+"px";if(r.width-a.width>s.width)e.RESULT.style.width=s.width+a.width-1+"px";r=BX.pos(l);i=BX.pos(e.RESULT);if(i.right>r.right){e.RESULT.style.width=r.right-r.left+"px"}}var o;if(l)o=BX.findChild(e.RESULT,{class:"title-search-fader"},true);if(o&&n){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(!s)return false;var i;var n=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var l=-1;for(i=0;i<n;i++){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(l==-1)l=i;if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==n&&e.currentRow!=i)e.currentRow=l;s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var r=-1;for(i=n-1;i>=0;i--){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(r==-1)r=i;if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i)e.currentRow=r;s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<n;i++){if(e.currentRow==i){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){var a=BX.findChild(s.rows[i],{tag:"a"},true);if(a){window.location=a.href;return true}}}}}return false}return false};this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})};this.onChange=function(t){if(e.running){e.runningCall=true;return}e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT)e.WAIT.style.display="none";if(!!t)t();e.running=false;if(e.runningCall){e.runningCall=false;e.onChange()}});return}else{e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t)t();e.running=false};this.onScroll=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)t.rows[i].className=""}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)if(!BX.findChild(t.rows[i],{class:"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}};this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length)e.ShowResult()};this.onKeyDown=function(t){if(!t)t=window.event;if(e.RESULT.style.display=="block"){if(e.onKeyPress(t.keyCode))return BX.PreventDefault(t)}};this.adjustResultNode=function(){if(!(BX.type.isElementNode(e.RESULT)&&BX.type.isElementNode(e.CONTAINER))){return{top:0,right:0,bottom:0,left:0,width:0,height:0}}var t=BX.pos(e.CONTAINER);e.RESULT.style.position="absolute";e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this._onContainerLayoutChange=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",function(){e.onFocusGain()});BX.bind(this.INPUT,"blur",function(){e.onFocusLost()});this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE())this.WAIT.style.backgroundRepeat="none";this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",function(){e.onChange()});var t=BX.findParent(this.CONTAINER,BX.is_fixed);if(BX.type.isElementNode(t)){BX.bind(window,"scroll",BX.throttle(this.onScroll,100,this))}};BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:100:"/bitrix/templates/aspro-stroy/components/bitrix/catalog.smart.filter/front/script.js?147928957723218";s:6:"source";s:84:"/bitrix/templates/aspro-stroy/components/bitrix/catalog.smart.filter/front/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCSmartFilter(ajaxURL, viewMode, params)
{
	this.ajaxURL = ajaxURL;
	this.form = null;
	this.timer = null;
	this.cacheKey = '';
	this.cache = [];
	this.viewMode = viewMode;
	this.sef = true;
	if (params && params.SEF_SET_FILTER_URL)
	{
		this.bindUrlToButton('set_filter', params.SEF_SET_FILTER_URL);
		this.sef = true;
	}
	if (params && params.SEF_DEL_FILTER_URL)
	{
		this.bindUrlToButton('del_filter', params.SEF_DEL_FILTER_URL);
	}
}

JCSmartFilter.prototype.keyup = function(input)
{
	if(!!this.timer)
	{
		clearTimeout(this.timer);
	}
	this.timer = setTimeout(BX.delegate(function(){
		this.reload(input);
	}, this), 500);
};

JCSmartFilter.prototype.click = function(checkbox)
{
	if(!!this.timer)
	{
		clearTimeout(this.timer);
	}

	this.timer = setTimeout(BX.delegate(function(){
		this.reload(checkbox);
	}, this), 500);
};

JCSmartFilter.prototype.reload = function(input)
{
	if (this.cacheKey !== '')
	{
		//Postprone backend query
		if(!!this.timer)
		{
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(BX.delegate(function(){
			this.reload(input);
		}, this), 1000);
		return;
	}
	this.cacheKey = '|';

	this.position = BX.pos(input, true);
	this.form = BX.findParent(input, {'tag':'form'});
	if (this.form)
	{
		var values = [];
		values[0] = {name: 'ajax', value: 'y'};
		this.gatherInputsValues(values, BX.findChildren(this.form, {'tag': new RegExp('^(input|select)$', 'i')}, true));

		for (var i = 0; i < values.length; i++)
			this.cacheKey += values[i].name + ':' + values[i].value + '|';

		if (this.cache[this.cacheKey])
		{
			this.curFilterinput = input;
			this.postHandler(this.cache[this.cacheKey], true);
		}
		else
		{
			if (this.sef)
			{
				var set_filter = BX('set_filter');
				set_filter.disabled = true;
			}

			this.curFilterinput = input;
			BX.ajax.loadJSON(
				this.ajaxURL,
				this.values2post(values),
				BX.delegate(this.postHandler, this)
			);
		}
	}
};

JCSmartFilter.prototype.updateItem = function (PID, arItem)
{
	if (arItem.PROPERTY_TYPE === 'N' || arItem.PRICE)
	{
		var trackBar = window['trackBar' + PID];
		if (!trackBar && arItem.ENCODED_ID)
			trackBar = window['trackBar' + arItem.ENCODED_ID];

		if (trackBar && arItem.VALUES)
		{
			if (arItem.VALUES.MIN)
			{
				if (arItem.VALUES.MIN.FILTERED_VALUE)
					trackBar.setMinFilteredValue(arItem.VALUES.MIN.FILTERED_VALUE);
				else
					trackBar.setMinFilteredValue(arItem.VALUES.MIN.VALUE);
			}

			if (arItem.VALUES.MAX)
			{
				if (arItem.VALUES.MAX.FILTERED_VALUE)
					trackBar.setMaxFilteredValue(arItem.VALUES.MAX.FILTERED_VALUE);
				else
					trackBar.setMaxFilteredValue(arItem.VALUES.MAX.VALUE);
			}
		}
	}
	else if (arItem.VALUES)
	{
		for (var i in arItem.VALUES)
		{
			if (arItem.VALUES.hasOwnProperty(i))
			{
				var value = arItem.VALUES[i];
				var control = BX(value.CONTROL_ID);

				if (!!control)
				{
					var label = document.querySelector('[data-role="label_'+value.CONTROL_ID+'"]');
						input = document.querySelector('[name="'+value.CONTROL_ID+'"]');
					if (value.DISABLED)
					{
						if (label){
							BX.addClass(label, 'disabled');
							if(input){
								input.setAttribute('disabled','disabled');
								BX.addClass(input, 'disabled');
							}
						}else{
							BX.addClass(control.parentNode, 'disabled');
						}
						
						
					}
					else
					{
						if (label){
							BX.removeClass(label, 'disabled');
							if(input){
								input.removeAttribute('disabled');
								BX.removeClass(input, 'disabled');
							}
						}else
							BX.removeClass(control.parentNode, 'disabled');
					}

					if (value.hasOwnProperty('ELEMENT_COUNT'))
					{
						label = document.querySelector('[data-role="count_'+value.CONTROL_ID+'"]');
						if (label)
							label.innerHTML = value.ELEMENT_COUNT;
					}
				}
			}
		}
	}
};

JCSmartFilter.prototype.postHandler = function (result, fromCache)
{
	var hrefFILTER, url, curProp;
	var modef = BX('modef');
	var modef_num = BX('modef_num');

	if (!!result && !!result.ITEMS)
	{
		for(var PID in result.ITEMS)
		{
			if (result.ITEMS.hasOwnProperty(PID))
			{
				this.updateItem(PID, result.ITEMS[PID]);
			}
		}

		if (!!modef && !!modef_num)
		{
			modef_num.innerHTML = result.ELEMENT_COUNT;
			hrefFILTER = BX.findChildren(modef, {tag: 'A'}, true);

			if (result.FILTER_URL && hrefFILTER)
			{
				hrefFILTER[0].href = BX.util.htmlspecialcharsback(result.FILTER_URL);
			}

			if (result.FILTER_AJAX_URL && result.COMPONENT_CONTAINER_ID)
			{
				BX.unbindAll(hrefFILTER[0]);
				BX.bind(hrefFILTER[0], 'click', function(e)
				{
					url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
					BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
					return BX.PreventDefault(e);
				});
			}

			if (result.INSTANT_RELOAD && result.COMPONENT_CONTAINER_ID)
			{
				url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
				BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
			}
			else
			{
				if (modef.style.display === 'none')
				{
					// modef.style.display = 'inline-block';
				}
				if (this.viewMode == "vertical")
			{
					curProp = BX.findChild(BX.findParent(this.curFilterinput, {'class':'bx_filter_parameters_box'}), {'class':'bx_filter_container_modef'}, true, false);
					curProp.appendChild(modef);
				}

				if (result.SEF_SET_FILTER_URL)
				{
					this.bindUrlToButton('set_filter', result.SEF_SET_FILTER_URL);
				}
			}
		}
	}

	if (this.sef)
	{
		var set_filter = BX('set_filter');
		set_filter.disabled = false;
	}

	if (!fromCache && this.cacheKey !== '')
	{
		this.cache[this.cacheKey] = result;
	}
	this.cacheKey = '';
};

JCSmartFilter.prototype.bindUrlToButton = function (buttonId, url)
{
	var button = BX(buttonId);
	if (button)
	{
		var proxy = function(j, func)
		{
			return function()
			{
				return func(j);
			}
		};

		if (button.type == 'submit')
			button.type = 'button';

		BX.bind(button, 'click', proxy(url, function(url)
		{
			window.location.href = url;
			return false;
		}));
	}
};

JCSmartFilter.prototype.gatherInputsValues = function (values, elements)
{
	if(elements)
	{
		for(var i = 0; i < elements.length; i++)
		{
			var el = elements[i];
			if (el.disabled || !el.type)
				continue;

			switch(el.type.toLowerCase())
			{
				case 'text':
				case 'textarea':
				case 'password':
				case 'hidden':
				case 'select-one':
					if(el.value.length)
						values[values.length] = {name : el.name, value : el.value};
					break;
				case 'radio':
				case 'checkbox':
					if(el.checked)
						values[values.length] = {name : el.name, value : el.value};
					break;
				case 'select-multiple':
					for (var j = 0; j < el.options.length; j++)
					{
						if (el.options[j].selected)
							values[values.length] = {name : el.name, value : el.options[j].value};
					}
					break;
				default:
					break;
			}
		}
	}
};

JCSmartFilter.prototype.values2post = function (values)
{
	var post = [];
	var current = post;
	var i = 0;

	while(i < values.length)
	{
		var p = values[i].name.indexOf('[');
		if(p == -1)
		{
			current[values[i].name] = values[i].value;
			current = post;
			i++;
		}
		else
		{
			var name = values[i].name.substring(0, p);
			var rest = values[i].name.substring(p+1);
			if(!current[name])
				current[name] = [];

			var pp = rest.indexOf(']');
			if(pp == -1)
			{
				//Error - not balanced brackets
				current = post;
				i++;
			}
			else if(pp == 0)
			{
				//No index specified - so take the next integer
				current = current[name];
				values[i].name = '' + current.length;
			}
			else
			{
				//Now index name becomes and name and we go deeper into the array
				current = current[name];
				values[i].name = rest.substring(0, pp) + rest.substring(pp+1);
			}
		}
	}
	return post;
};

JCSmartFilter.prototype.hideFilterProps = function(element)
{
	var obj = element.parentNode,
		filterBlock = obj.querySelector("[data-role='bx_filter_block']"),
		propAngle = obj.querySelector("[data-role='prop_angle']");

	if(BX.hasClass(obj, "bx-active"))
	{
		new BX.easing({
			duration : 300,
			start : { opacity: 1,  height: filterBlock.offsetHeight },
			finish : { opacity: 0, height:0 },
			transition : BX.easing.transitions.quart,
			step : function(state){
				filterBlock.style.opacity = state.opacity;
				filterBlock.style.height = state.height + "px";
			},
			complete : function() {
				filterBlock.setAttribute("style", "");
				BX.removeClass(obj, "bx-active");
			}
		}).animate();

		BX.addClass(propAngle, "fa-angle-down");
		BX.removeClass(propAngle, "fa-angle-up");
	}
	else
	{
		filterBlock.style.display = "block";
		filterBlock.style.opacity = 0;
		filterBlock.style.height = "auto";

		var obj_children_height = filterBlock.offsetHeight;
		filterBlock.style.height = 0;

		new BX.easing({
			duration : 300,
			start : { opacity: 0,  height: 0 },
			finish : { opacity: 1, height: obj_children_height },
			transition : BX.easing.transitions.quart,
			step : function(state){
				filterBlock.style.opacity = state.opacity;
				filterBlock.style.height = state.height + "px";
			},
			complete : function() {
			}
		}).animate();

		BX.addClass(obj, "bx-active");
		BX.removeClass(propAngle, "fa-angle-down");
		BX.addClass(propAngle, "fa-angle-up");
	}
};

JCSmartFilter.prototype.showDropDownPopup = function(element, popupId)
{
	var contentNode = element.querySelector('[data-role="dropdownContent"]');
	BX.PopupWindowManager.create("smartFilterDropDown"+popupId, element, {
		autoHide: true,
		offsetLeft: 0,
		offsetTop: 0,
		overlay : false,
		draggable: {restrict:true},
		closeByEsc: true,
		content: contentNode
	}).show();
	var popup=$('#smartFilterDropDown'+popupId);
	popup.css({'width':$(element).css('width')});
	// console.log($('#'+BX.PopupWindowManager.getCurrentPopup()));
};

JCSmartFilter.prototype.selectDropDownItem = function(element, controlId)
{
	if(!BX.hasClass(element,'disabled')){
		this.keyup(BX(controlId));

		var wrapContainer = BX.findParent(BX(controlId), {className:"bx_filter_select_container"}, false);

		var currentOption = wrapContainer.querySelector('[data-role="currentOption"]');
	
		currentOption.innerHTML = element.innerHTML;
		$(element).closest('.bx_filter_select_popup').find('label').removeClass('selected');
		BX.addClass(element, "selected");
		BX.PopupWindowManager.getCurrentPopup().close();
	}
};

BX.namespace("BX.Iblock.SmartFilter");
BX.Iblock.SmartFilter = (function()
{
	var SmartFilter = function(arParams)
	{
		if (typeof arParams === 'object')
		{
			this.leftSlider = BX(arParams.leftSlider);
			this.rightSlider = BX(arParams.rightSlider);
			this.tracker = BX(arParams.tracker);
			this.trackerWrap = BX(arParams.trackerWrap);

			this.minInput = BX(arParams.minInputId);
			this.maxInput = BX(arParams.maxInputId);

			this.minPrice = parseFloat(arParams.minPrice);
			this.maxPrice = parseFloat(arParams.maxPrice);

			this.curMinPrice = parseFloat(arParams.curMinPrice);
			this.curMaxPrice = parseFloat(arParams.curMaxPrice);

			this.fltMinPrice = arParams.fltMinPrice ? parseFloat(arParams.fltMinPrice) : parseFloat(arParams.curMinPrice);
			this.fltMaxPrice = arParams.fltMaxPrice ? parseFloat(arParams.fltMaxPrice) : parseFloat(arParams.curMaxPrice);

			this.precision = arParams.precision || 0;

			this.priceDiff = this.maxPrice - this.minPrice;

			this.leftPercent = 0;
			this.rightPercent = 0;

			this.fltMinPercent = 0;
			this.fltMaxPercent = 0;

			this.colorUnavailableActive = BX(arParams.colorUnavailableActive);//gray
			this.colorAvailableActive = BX(arParams.colorAvailableActive);//blue
			this.colorAvailableInactive = BX(arParams.colorAvailableInactive);//light blue

			this.isTouch = false;

			this.init();

			if ('ontouchstart' in document.documentElement)
			{
				this.isTouch = true;

				BX.bind(this.leftSlider, "touchstart", BX.proxy(function(event){
					this.onMoveLeftSlider(event)
				}, this));

				BX.bind(this.rightSlider, "touchstart", BX.proxy(function(event){
					this.onMoveRightSlider(event)
				}, this));
			}
			else
			{
				BX.bind(this.leftSlider, "mousedown", BX.proxy(function(event){
					this.onMoveLeftSlider(event)
				}, this));

				BX.bind(this.rightSlider, "mousedown", BX.proxy(function(event){
					this.onMoveRightSlider(event)
				}, this));
			}
			
			BX.bind(this.colorAvailableActive, "mousedown", BX.proxy(function(event){
				this.onChangeLeftSlider(event);
			}, this));
			BX.bind(this.colorUnavailableActive, "mousedown", BX.proxy(function(event){
				this.onChangeLeftSlider(event);
			}, this));

			BX.bind(this.minInput, "keyup", BX.proxy(function(event){
				this.onInputChange();
			}, this));

			BX.bind(this.maxInput, "keyup", BX.proxy(function(event){
				this.onInputChange();
			}, this));
		}
	};

	SmartFilter.prototype.init = function()
	{
		var priceDiff;

		if (this.curMinPrice > this.minPrice)
		{
			priceDiff = this.curMinPrice - this.minPrice;
			this.leftPercent = (priceDiff*100)/this.priceDiff;

			this.leftSlider.style.left = this.leftPercent + "%";
			this.colorUnavailableActive.style.left = this.leftPercent + "%";
		}

		this.setMinFilteredValue(this.fltMinPrice);

		if (this.curMaxPrice < this.maxPrice)
		{
			priceDiff = this.maxPrice - this.curMaxPrice;
			this.rightPercent = (priceDiff*100)/this.priceDiff;

			this.rightSlider.style.right = this.rightPercent + "%";
			this.colorUnavailableActive.style.right = this.rightPercent + "%";
		}

		this.setMaxFilteredValue(this.fltMaxPrice);
	};

	SmartFilter.prototype.setMinFilteredValue = function (fltMinPrice)
	{
		this.fltMinPrice = parseFloat(fltMinPrice);
		if (this.fltMinPrice >= this.minPrice)
		{
			var priceDiff = this.fltMinPrice - this.minPrice;
			this.fltMinPercent = (priceDiff*100)/this.priceDiff;

			if (this.leftPercent > this.fltMinPercent)
				this.colorAvailableActive.style.left = this.leftPercent + "%";
			else
				this.colorAvailableActive.style.left = this.fltMinPercent + "%";

			this.colorAvailableInactive.style.left = this.fltMinPercent + "%";
		}
		else
		{
			this.colorAvailableActive.style.left = "0%";
			this.colorAvailableInactive.style.left = "0%";
		}
	};

	SmartFilter.prototype.setMaxFilteredValue = function (fltMaxPrice)
	{
		this.fltMaxPrice = parseFloat(fltMaxPrice);
		if (this.fltMaxPrice <= this.maxPrice)
		{
			var priceDiff = this.maxPrice - this.fltMaxPrice;
			this.fltMaxPercent = (priceDiff*100)/this.priceDiff;

			if (this.rightPercent > this.fltMaxPercent)
				this.colorAvailableActive.style.right = this.rightPercent + "%";
			else
				this.colorAvailableActive.style.right = this.fltMaxPercent + "%";

			this.colorAvailableInactive.style.right = this.fltMaxPercent + "%";
		}
		else
		{
			this.colorAvailableActive.style.right = "0%";
			this.colorAvailableInactive.style.right = "0%";
		}
	};

	SmartFilter.prototype.getXCoord = function(elem)
	{
		var box = elem.getBoundingClientRect();
		var body = document.body;
		var docElem = document.documentElement;

		var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
		var clientLeft = docElem.clientLeft || body.clientLeft || 0;
		var left = box.left + scrollLeft - clientLeft;

		return Math.round(left);
	};

	SmartFilter.prototype.getPageX = function(e)
	{
		e = e || window.event;
		var pageX = null;

		if (this.isTouch && event.targetTouches[0] != null)
		{
			pageX = e.targetTouches[0].pageX;
		}
		else if (e.pageX != null)
		{
			pageX = e.pageX;
		}
		else if (e.clientX != null)
		{
			var html = document.documentElement;
			var body = document.body;

			pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
			pageX -= html.clientLeft || 0;
		}

		return pageX;
	};

	SmartFilter.prototype.recountMinPrice = function()
	{
		var newMinPrice = (this.priceDiff*this.leftPercent)/100;
		newMinPrice = (this.minPrice + newMinPrice).toFixed(this.precision);

		if (newMinPrice != this.minPrice)
			this.minInput.value = newMinPrice;
		else
			this.minInput.value = "";
		smartFilter.keyup(this.minInput);
	};

	SmartFilter.prototype.recountMaxPrice = function()
	{
		var newMaxPrice = (this.priceDiff*this.rightPercent)/100;
		newMaxPrice = (this.maxPrice - newMaxPrice).toFixed(this.precision);

		if (newMaxPrice != this.maxPrice)
			this.maxInput.value = newMaxPrice;
		else
			this.maxInput.value = "";
		smartFilter.keyup(this.maxInput);
	};

	SmartFilter.prototype.onInputChange = function ()
	{
		var priceDiff;
		if (this.minInput.value)
		{
			var leftInputValue = this.minInput.value;
			if (leftInputValue < this.minPrice)
				leftInputValue = this.minPrice;

			if (leftInputValue > this.maxPrice)
				leftInputValue = this.maxPrice;

			priceDiff = leftInputValue - this.minPrice;
			this.leftPercent = (priceDiff*100)/this.priceDiff;

			this.makeLeftSliderMove(false);
		}

		if (this.maxInput.value)
		{
			var rightInputValue = this.maxInput.value;
			if (rightInputValue < this.minPrice)
				rightInputValue = this.minPrice;

			if (rightInputValue > this.maxPrice)
				rightInputValue = this.maxPrice;

			priceDiff = this.maxPrice - rightInputValue;
			this.rightPercent = (priceDiff*100)/this.priceDiff;

			this.makeRightSliderMove(false);
		}
	};

	SmartFilter.prototype.makeLeftSliderMove = function(recountPrice)
	{
		recountPrice = (recountPrice !== false);

		this.leftSlider.style.left = this.leftPercent + "%";
		this.colorUnavailableActive.style.left = this.leftPercent + "%";

		var areBothSlidersMoving = false;
		if (this.leftPercent + this.rightPercent >= 100)
		{
			areBothSlidersMoving = true;
			this.rightPercent = 100 - this.leftPercent;
			this.rightSlider.style.right = this.rightPercent + "%";
			this.colorUnavailableActive.style.right = this.rightPercent + "%";
		}

		if (this.leftPercent >= this.fltMinPercent && this.leftPercent <= (100-this.fltMaxPercent))
		{
			this.colorAvailableActive.style.left = this.leftPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.right = 100 - this.leftPercent + "%";
			}
		}
		else if(this.leftPercent <= this.fltMinPercent)
		{
			this.colorAvailableActive.style.left = this.fltMinPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.right = 100 - this.fltMinPercent + "%";
			}
		}
		else if(this.leftPercent >= this.fltMaxPercent)
		{
			this.colorAvailableActive.style.left = 100-this.fltMaxPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
			}
		}

		if (recountPrice)
		{
			this.recountMinPrice();
			if (areBothSlidersMoving)
				this.recountMaxPrice();
		}
	};

	SmartFilter.prototype.countNewLeft = function(event)
	{
		var pageX = this.getPageX(event);

		var trackerXCoord = this.getXCoord(this.trackerWrap);
		var rightEdge = this.trackerWrap.offsetWidth;

		var newLeft = pageX - trackerXCoord;

		if (newLeft < 0)
			newLeft = 0;
		else if (newLeft > rightEdge)
			newLeft = rightEdge;

		return newLeft;
	};

	SmartFilter.prototype.onMoveLeftSlider = function(e)
	{
		if (!this.isTouch)
		{
			this.leftSlider.ondragstart = function() {
				return false;
			};
		}

		if (!this.isTouch)
		{
			document.onmousemove = BX.proxy(function(event) {
				this.leftPercent = ((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
				this.makeLeftSliderMove();
			}, this);

			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
		}
		else
		{
			document.ontouchmove = BX.proxy(function(event) {
				this.leftPercent = ((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
				this.makeLeftSliderMove();
			}, this);

			document.ontouchend = function() {
				document.ontouchmove = document.touchend = null;
			};
		}

		return false;
	};

	SmartFilter.prototype.makeRightSliderMove = function(recountPrice)
	{
		recountPrice = (recountPrice !== false);

		this.rightSlider.style.right = this.rightPercent + "%";
		this.colorUnavailableActive.style.right = this.rightPercent + "%";

		var areBothSlidersMoving = false;
		if (this.leftPercent + this.rightPercent >= 100)
		{
			areBothSlidersMoving = true;
			this.leftPercent = 100 - this.rightPercent;
			this.leftSlider.style.left = this.leftPercent + "%";
			this.colorUnavailableActive.style.left = this.leftPercent + "%";
		}

		if ((100-this.rightPercent) >= this.fltMinPercent && this.rightPercent >= this.fltMaxPercent)
		{
			this.colorAvailableActive.style.right = this.rightPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.left = 100 - this.rightPercent + "%";
			}
		}
		else if(this.rightPercent <= this.fltMaxPercent)
		{
			this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.left = 100 - this.fltMaxPercent + "%";
			}
		}
		else if((100-this.rightPercent) <= this.fltMinPercent)
		{
			this.colorAvailableActive.style.right = 100-this.fltMinPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.left = this.fltMinPercent + "%";
			}
		}

		if (recountPrice)
		{
			this.recountMaxPrice();
			if (areBothSlidersMoving)
				this.recountMinPrice();
		}
	};

	SmartFilter.prototype.onMoveRightSlider = function(e)
	{
		if (!this.isTouch)
		{
			this.rightSlider.ondragstart = function() {
				return false;
			};
		}

		if (!this.isTouch)
		{
			document.onmousemove = BX.proxy(function(event) {
				this.rightPercent = 100-(((this.countNewLeft(event))*100)/(this.trackerWrap.offsetWidth));
				this.makeRightSliderMove();
			}, this);

			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
		}
		else
		{
			document.ontouchmove = BX.proxy(function(event) {
				this.rightPercent = 100-(((this.countNewLeft(event))*100)/(this.trackerWrap.offsetWidth));
				this.makeRightSliderMove();
			}, this);

			document.ontouchend = function() {
				document.ontouchmove = document.ontouchend = null;
			};
		}

		return false;
	};
	
	SmartFilter.prototype.onChangeLeftSlider = function(e)
	{
		if (!this.isTouch)
		{
			this.leftSlider.ondragstart = function() {
				//return false;
			};
		}

		if (!this.isTouch)
		{
			document.onmousedown = BX.proxy(function(event) {
				var percent=((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
				if($(event.target).is(".bx_ui_slider_handle") || !$(event.target).is("[class^=bx_ui_slider]"))
					return;
				if(percent<50){
					this.leftPercent = percent+1;
					this.makeLeftSliderMove();
				}else{
					this.rightPercent = 100-percent;
					this.makeRightSliderMove();
				}
			}, this);

			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
		}
		else
		{
			document.ontouchend = BX.proxy(function(event) {
				var percent=((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
				if($(event.target).is(".bx_ui_slider_handle"))
					return;
				if(percent<50){
					this.leftPercent = percent;
					this.makeLeftSliderMove();
				}else{
					this.rightPercent = 100-percent;
					this.makeRightSliderMove();
				}
			}, this);

			document.ontouchend = function() {
				document.ontouchmove = document.touchend = null;
			};
		}

		return false;
	};

	return SmartFilter;
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/bitrix/templates/aspro-stroy/js/jquery.inputmask.bundle.min.js?152699302270933";s:6:"source";s:63:"/bitrix/templates/aspro-stroy/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(2)],void 0!==(r="function"==typeof(n=function(e){return e})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(0),i(5),i(6)],void 0!==(r="function"==typeof(n=function(e,t,i,n){function a(t,i,o){if(!(this instanceof a))return new a(t,i,o);this.el=n,this.events={},this.maskset=n,this.refreshValue=!1,!0!==o&&(e.isPlainObject(t)?i=t:(i=i||{},t&&(i.alias=t)),this.opts=e.extend(!0,{},this.defaults,i),this.noMasksCache=i&&i.definitions!==n,this.userOptions=i||{},this.isRTL=this.opts.numericInput,r(this.opts.alias,i,this.opts))}function r(t,i,o){var s=a.prototype.aliases[t];return s?(s.alias&&r(s.alias,n,o),e.extend(!0,o,s),e.extend(!0,o,i),!0):(null===o.mask&&(o.mask=t),!1)}function s(t,i){function r(t,r,o){var s=!1;if(null!==t&&""!==t||((s=null!==o.regex)?t=(t=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,t=".*")),1===t.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),o.repeat>0||"*"===o.repeat||"+"===o.repeat){var l="*"===o.repeat?0:"+"===o.repeat?1:o.repeat;t=o.groupmarker[0]+t+o.groupmarker[1]+o.quantifiermarker[0]+l+","+o.repeat+o.quantifiermarker[1]}var u,c=s?"regex_"+o.regex:o.numericInput?t.split("").reverse().join(""):t;return a.prototype.masksCache[c]===n||!0===i?(u={mask:t,maskToken:a.prototype.analyseMask(t,s,o),validPositions:{},_buffer:n,buffer:n,tests:{},excludes:{},metadata:r,maskLength:n},!0!==i&&(a.prototype.masksCache[c]=u,u=e.extend(!0,{},a.prototype.masksCache[c]))):u=e.extend(!0,{},a.prototype.masksCache[c]),u}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var o=0;o<t.mask.length;o++)if(t.mask[o].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var s=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(i,a){s.length>1&&(s+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===n||e.isFunction(a.mask)?s+=a:s+=a.mask}),r(s+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==n&&!e.isFunction(t.mask.mask)?r(t.mask.mask,t.mask,t):r(t.mask,t.mask,t)}function l(e){var t=i.createElement("input"),n="on"+e,a=n in t;return a||(t.setAttribute(n,"return;"),a="function"==typeof t[n]),t=null,a}function u(r,s,c){function d(e,t,i){t=t||0;var a,r,o,s=[],l=0,u=v();do{!0===e&&h().validPositions[l]?(r=(o=h().validPositions[l]).match,a=o.locator.slice(),s.push(!0===i?o.input:!1===i?r.nativeDef:N(l,r))):(r=(o=P(l,a,l-1)).match,a=o.locator.slice(),(!1===c.jitMasking||l<u||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>l)&&s.push(!1===i?r.nativeDef:N(l,r))),"auto"===c.keepStatic&&r.newBlockMarker&&null!==r.fn&&(c.keepStatic=l-1),l++}while(($===n||l<$)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),!1===i&&h().maskLength!==n||(h().maskLength=l-1),s}function h(){return s}function g(e){var t=h();t.buffer=n,!0!==e&&(t.validPositions={},t.p=0)}function v(e,t,i){var a=-1,r=-1,o=i||h().validPositions;e===n&&(e=-1);for(var s in o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1!==a&&e-a>1||r<e?a:r}function k(t,i,a,r){var o,s=t,l=e.extend(!0,{},h().validPositions),u=!1;for(h().p=t,o=i-1;o>=s;o--)h().validPositions[o]!==n&&(!0!==a&&(!h().validPositions[o].match.optionality&&function(e){var t=h().validPositions[e];if(t!==n&&null===t.match.fn){var i=h().validPositions[e-1],a=h().validPositions[e+1];return i!==n&&a!==n}return!1}(o)||!1===c.canClearPosition(h(),o,v(n,!0),r,c))||delete h().validPositions[o]);for(g(!0),o=s+1;o<=v();){for(;h().validPositions[s]!==n;)s++;if(o<s&&(o=s+1),h().validPositions[o]===n&&j(o))o++;else{var p=P(o);!1===u&&l[s]&&l[s].match.def===p.match.def?(h().validPositions[s]=e.extend(!0,{},l[s]),h().validPositions[s].input=p.input,delete h().validPositions[o],o++):A(s,p.match.def)?!1!==_(s,p.input||N(o),!0)&&(delete h().validPositions[o],o++,u=!0):j(o)||(o++,s--),s++}}if(!0!==r)for(o=v(-1,!0);h().validPositions[o]&&!0===h().validPositions[o].generatedInput;)delete h().validPositions[o--];g(!0)}function y(e,t,i){for(var a,r=S(e=e>0?e-1:0),o=r.alternation!==n?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(c.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===n||r.alternation!==a.alternation||a.locator[r.alternation]!==n&&D(a.locator[r.alternation].toString().split(","),o)))||!0===i&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function b(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==n?t.toString():""}function x(e,t){for(var i=(e.alternation!=n?e.mloc[b(e)]:e.locator).join("");i.length<t;)i+="0";return i}function P(e,t,i){return h().validPositions[e]||y(e,C(e,t?t.slice():t,i))}function S(e){return h().validPositions[e]?h().validPositions[e]:C(e)[0]}function A(e,t){for(var i=!1,n=C(e),a=0;a<n.length;a++)if(n[a].match&&n[a].match.def===t){i=!0;break}return i}function C(t,i,a){function r(i,a,s,l){function u(s,l,p){function m(t,i){var n=0===e.inArray(t,i.matches);return n||e.each(i.matches,function(e,a){if(!0===a.isQuantifier&&(n=m(t,i.matches[e-1])))return!1}),n}function k(t,i,a){var r,o;if((h().tests[t]||h().validPositions[t])&&e.each(h().tests[t]||[h().validPositions[t]],function(e,t){if(t.mloc[i])return r=t,!1;var s=a!==n?a:t.alternation,l=t.locator[s]!==n?t.locator[s].toString().indexOf(i):-1;(o===n||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[i]||r.mloc[s]||r.locator).slice((a!==n?a:r.alternation)+1)}return a!==n?k(t,i):n}function y(e,t){function i(e){for(var t,i,n=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(i=e.charCodeAt(a+1);++t<i;)n.push(String.fromCharCode(t));else t=e.charCodeAt(a),n.push(e.charAt(a));return n.join("")}return c.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==i(t.match.def.replace(/[\[\]]/g,"")).indexOf(i(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function b(e,t){if(t===n||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var i=e.locator[e.alternation];if(i!==n){if("string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===n&&(e.mloc[i]=e.locator.slice()),t!==n){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===n&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=n}return!1}if(f>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+h().mask;if(f===t&&s.matches===n)return d.push({match:s,locator:l.reverse(),cd:v,mloc:{}}),!0;if(s.matches!==n){if(s.isGroup&&p!==s){if(s=u(i.matches[e.inArray(s,i.matches)+1],l))return!0}else if(s.isOptional){var x=s;if(s=r(s,a,l,p)){if(!m(o=d[d.length-1].match,x))return!0;g=!0,f=t}}else if(s.isAlternator){var P,S=s,A=[],C=d.slice(),M=l.length,E=a.length>0?a.shift():-1;if(-1===E||"string"==typeof E){var w,D=f,O=a.slice(),_=[];if("string"==typeof E)_=E.split(",");else for(w=0;w<S.matches.length;w++)_.push(w.toString());if(h().excludes[t]){for(var j=_.slice(),F=0,T=h().excludes[t].length;F<T;F++)_.splice(_.indexOf(h().excludes[t][F].toString()),1);0===_.length&&(h().excludes[t]=n,_=j)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(_=_.slice(0,1));for(var R=0;R<_.length;R++){w=parseInt(_[R]),d=[],a=k(f,w,M)||O.slice(),S.matches[w]&&u(S.matches[w],[w].concat(l),p)&&(s=!0),P=d.slice(),f=D,d=[];for(var N=0;N<P.length;N++){var G=P[N],B=!1;G.alternation=G.alternation||M,b(G);for(var I=0;I<A.length;I++){var L=A[I];if("string"!=typeof E||G.alternation!==n&&-1!==e.inArray(G.locator[G.alternation].toString(),_)){if(G.match.nativeDef===L.match.nativeDef){B=!0,b(L,G);break}if(y(G,L)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}if(y(L,G)){b(L,G);break}if(z=L,null===(U=G).match.fn&&null!==z.match.fn&&z.match.fn.test(U.match.def,h(),t,!1,c,!1)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}}}B||A.push(G)}}d=C.concat(A),f=t,g=d.length>0,s=A.length>0,a=O.slice()}else s=u(S.matches[E]||i.matches[E],[E].concat(l),p);if(s)return!0}else if(s.isQuantifier&&p!==i.matches[e.inArray(s,i.matches)-1])for(var H=s,V=a.length>0?a.shift():0;V<(isNaN(H.quantifier.max)?V+1:H.quantifier.max)&&f<=t;V++){var K=i.matches[e.inArray(H,i.matches)-1];if(s=u(K,[V].concat(l),K)){if((o=d[d.length-1].match).optionalQuantifier=V>H.quantifier.min-1,m(o,K)){if(V>H.quantifier.min-1){g=!0,f=t;break}return!0}return!0}}else if(s=r(s,a,l,p))return!0}else f++;var U,z}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var m=u(i.matches[p],[p].concat(s),l);if(m&&f===t)return m;if(f>t)break}}var o,s,l,u,p=h().maskToken,f=i?a:0,m=i?i.slice():[0],d=[],g=!1,v=i?i.join(""):"";if(t>-1){if(i===n){for(var k,b=t-1;(k=h().validPositions[b]||h().tests[b])===n&&b>-1;)b--;k!==n&&b>-1&&(s=b,l=k,u=[],e.isArray(l)||(l=[l]),l.length>0&&(l[0].alternation===n?0===(u=y(s,l.slice()).locator.slice()).length&&(u=l[0].locator.slice()):e.each(l,function(e,t){if(""!==t.def)if(0===u.length)u=t.locator.slice();else for(var i=0;i<u.length;i++)t.locator[i]&&-1===u[i].toString().indexOf(t.locator[i])&&(u[i]+=","+t.locator[i])})),v=(m=u).join(""),f=b)}if(h().tests[t]&&h().tests[t][0].cd===v)return h().tests[t];for(var x=m.shift();x<p.length&&!(r(p[x],m,[x])&&f===t||f>t);x++);}return(0===d.length||g)&&d.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:v}),i!==n&&h().tests[t]?e.extend(!0,[],d):(h().tests[t]=e.extend(!0,[],d),h().tests[t])}function M(){return h()._buffer===n&&(h()._buffer=d(!1,1),h().buffer===n&&(h().buffer=h()._buffer.slice())),h()._buffer}function E(e){return h().buffer!==n&&!0!==e||(h().buffer=d(!0,v(),!0)),h().buffer}function w(e,t,i){var a,r;if(!0===e)g(),e=0,t=i.length;else for(a=e;a<t;a++)delete h().validPositions[a];for(r=e,a=e;a<t;a++)if(g(!0),i[a]!==c.skipOptionalPartCharacter){var o=_(r,i[a],!0,!0);!1!==o&&(g(!0),r=o.caret!==n?o.caret:o.pos+1)}}function D(t,i,a){for(var r,o=c.greedy?i:i.slice(0,1),s=!1,l=a!==n?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var p=0;p<t.length;p++)if(-1!==e.inArray(t[p],o)){s=!0;break}return s}function O(t,i,a,r,o){var s,l,u,p,f,m,d,k=e.extend(!0,{},h().validPositions),y=!1,x=o!==n?o:v();if(-1===x&&o===n)l=(p=S(s=0)).alternation;else for(;x>=0;x--)if((u=h().validPositions[x])&&u.alternation!==n){if(p&&p.locator[u.alternation]!==u.locator[u.alternation])break;s=x,l=h().validPositions[s].alternation,p=u}if(l!==n){d=parseInt(s),h().excludes[d]=h().excludes[d]||[],!0!==t&&h().excludes[d].push(b(p));var P=[],A=0;for(f=d;f<v(n,!0)+1;f++)(m=h().validPositions[f])&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?P.push(m.input):f<t&&A++,delete h().validPositions[f];for(;h().excludes[d]&&h().excludes[d].length<10;){var C=-1*A,M=P.slice();for(h().tests[d]=n,g(!0),y=!0;M.length>0;){var E=M.shift();if(E!==c.skipOptionalPartCharacter&&!(y=_(v(n,!0)+1,E,!1,r,!0)))break}if(y&&i!==n){var w=v(t)+1;for(f=d;f<v()+1;f++)((m=h().validPositions[f])===n||null==m.match.fn)&&f<t+C&&C++;y=_((t+=C)>w?w:t,i,a,r,!0)}if(y)break;if(g(),p=S(d),h().validPositions=e.extend(!0,{},k),!h().excludes[d]){y=O(t,i,a,r,d-1);break}var D=b(p);if(-1!==h().excludes[d].indexOf(D)){y=O(t,i,a,r,d-1);break}for(h().excludes[d].push(D),f=d;f<v(n,!0)+1;f++)delete h().validPositions[f]}}return h().excludes[d]=n,y}function _(t,i,r,o,s,l){function u(e){return X?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}function p(i,r,s){var l=!1;return e.each(C(i),function(p,f){var d=f.match;if(E(!0),!1!==(l=null!=d.fn?d.fn.test(r,h(),i,s,c,u(t)):(r===d.def||r===c.skipOptionalPartCharacter)&&""!==d.def&&{c:N(i,d,!0)||d.def,pos:i})){var y=l.c!==n?l.c:r;y=y===c.skipOptionalPartCharacter&&null===d.fn?N(i,d,!0)||d.def:y;var b=i,x=E();if(l.remove!==n&&(e.isArray(l.remove)||(l.remove=[l.remove]),e.each(l.remove.sort(function(e,t){return t-e}),function(e,t){k(t,t+1,!0)})),l.insert!==n&&(e.isArray(l.insert)||(l.insert=[l.insert]),e.each(l.insert.sort(function(e,t){return e-t}),function(e,t){_(t.pos,t.c,!0,o)})),l.refreshFromBuffer){var P=l.refreshFromBuffer;if(w(!0===P?P:P.start,P.end,x),l.pos===n&&l.c===n)return l.pos=v(),!1;if((b=l.pos!==n?l.pos:i)!==i)return l=e.extend(l,_(b,y,!0,o)),!1}else if(!0!==l&&l.pos!==n&&l.pos!==i&&(b=l.pos,w(i,b,E().slice()),b!==i))return l=e.extend(l,_(b,y,!0)),!1;return(!0===l||l.pos!==n||l.c!==n)&&(p>0&&g(!0),m(b,e.extend({},f,{input:function(t,i,n){switch(c.casing||i.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var r=h().validPositions[n-1];t=0===n||r&&r.input===String.fromCharCode(a.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(c.casing)){var o=Array.prototype.slice.call(arguments);o.push(h().validPositions),t=c.casing.apply(this,o)}}return t}(y,d,b)}),o,u(t))||(l=!1),!1)}}),l}function f(t,i,a){var r;if(t===n)for(t=i-1;t>0&&!h().validPositions[t];t--);for(var o=t;o<i;o++)if(h().validPositions[o]===n&&!j(o,!0)){var s=0==o?S(o):h().validPositions[o-1];if(s){var l,u=x(s),c=C(o).slice(),p=n,f=S(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=x(t,u.length);var i=Math.abs(l-u);(p===n||i<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=i,f=t)}),(f=e.extend({},f,{input:N(o,f.match,!0)||f.match.def})).generatedInput=!0,m(o,f,!0),!0!==a){var d=h().validPositions[i].input;h().validPositions[i]=n,r=_(i,d,!0,!0)}}}return r}function m(t,i,a,r){if(r||c.insertMode&&h().validPositions[t]!==n&&a===n){var o,s=e.extend(!0,{},h().validPositions),l=v(n,!0);for(o=t;o<=l;o++)delete h().validPositions[o];h().validPositions[t]=e.extend(!0,{},i);var u,p=!0,m=h().validPositions,d=!1;for(o=u=t;o<=l;o++){var k=s[o];if(k!==n)for(var y=u;""!==S(y).match.def&&(null===k.match.fn&&m[o]&&(!0===m[o].match.optionalQuantifier||!0===m[o].match.optionality)||null!=k.match.fn);){if(y++,!1===d&&s[y]&&s[y].match.def===k.match.def)h().validPositions[y]=e.extend(!0,{},s[y]),h().validPositions[y].input=k.input,f(n,y,!0),u=y,p=!0;else if(A(y,k.match.def)){var b=_(y,k.input,!0,!0);p=!1!==b,u=b.caret||b.insert?v():y,d=!0}else if(!(p=!0===k.generatedInput)&&""===S(y).match.def)break;if(p)break}if(!p)break}if(!p)return h().validPositions=e.extend(!0,{},s),g(!0),!1}else h().validPositions[t]=e.extend(!0,{},i);return g(!0),!0}r=!0===r;var d=t;t.begin!==n&&(d=X&&!u(t)?t.end:t.begin);var y=!0,b=e.extend(!0,{},h().validPositions);if(e.isFunction(c.preValidation)&&!r&&!0!==o&&!0!==l&&(y=c.preValidation(E(),d,i,u(t),c)),!0===y){if(f(n,d,!0),u(t)&&(K(0,a.keyCode.DELETE,t,!0,!0),d=h().p),($===n||d<$)&&(y=p(d,i,r),(!r||!0===o)&&!1===y&&!0!==l)){var P=h().validPositions[d];if(!P||null!==P.match.fn||P.match.def!==i&&i!==c.skipOptionalPartCharacter){if((c.insertMode||h().validPositions[F(d)]===n)&&!j(d,!0))for(var M=d+1,D=F(d);M<=D;M++)if(!1!==(y=p(M,i,r))){y=f(d,y.pos!==n?y.pos:M)||y,d=M;break}}else y={caret:F(d)}}!1!==y||null===c.keepStatic||!1===c.keepStatic||r||!0===s||(y=O(d,i,r,o)),!0===y&&(y={pos:d})}if(e.isFunction(c.postValidation)&&!1!==y&&!r&&!0!==o&&!0!==l){var T=c.postValidation(E(!0),y,c);if(T!==n){if(T.refreshFromBuffer&&T.buffer){var R=T.refreshFromBuffer;w(!0===R?R:R.start,R.end,T.buffer)}y=!0===T?y:T}}return y&&y.pos===n&&(y.pos=d),!1!==y&&!0!==l||(g(!0),h().validPositions=e.extend(!0,{},b)),y}function j(e,t){var i=P(e).match;if(""===i.def&&(i=S(e).match),null!=i.fn)return i.fn;if(!0!==t&&e>-1){var n=C(e);return n.length>1+(""===n[n.length-1].match.def?1:0)}return!1}function F(e,t){for(var i=e+1;""!==S(i).match.def&&(!0===t&&(!0!==S(i).match.newBlockMarker||!j(i))||!0!==t&&!j(i));)i++;return i}function T(e,t){var i,n=e;if(n<=0)return 0;for(;--n>0&&(!0===t&&!0!==S(n).match.newBlockMarker||!0!==t&&!j(n)&&((i=C(n)).length<2||2===i.length&&""===i[1].match.def)););return n}function R(t,i,a,r,o){if(r&&e.isFunction(c.onBeforeWrite)){var s=c.onBeforeWrite.call(J,r,i,a,c);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;w(!0===l?l:l.start,l.end,s.buffer||i),i=E(!0)}a!==n&&(a=s.caret!==n?s.caret:a)}}t!==n&&(t.inputmask._valueSet(i.join("")),a===n||r!==n&&"blur"===r.type?z(t,a,0===i.length):I(t,a),!0===o&&(te=!0,e(t).trigger("input")))}function N(t,i,a){if((i=i||S(t).match).placeholder!==n||!0===a)return e.isFunction(i.placeholder)?i.placeholder(c):i.placeholder;if(null===i.fn){if(t>-1&&h().validPositions[t]===n){var r,o=C(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===n||!1!==o[l].match.fn.test(r.match.def,h(),t,!0,c))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return c.placeholder.charAt(t%c.placeholder.length)}return i.def}return c.placeholder.charAt(t%c.placeholder.length)}function G(t,i,r,o,s){var l=o.slice(),u="",p=-1,f=n;if(g(),r||!0===c.autoUnmask)p=F(p);else{var m=M().slice(0,F(-1)).join(""),k=l.join("").match(new RegExp("^"+a.escapeRegex(m),"g"));k&&k.length>0&&(l.splice(0,k.length*m.length),p=F(p))}-1===p?(h().p=F(p),p=0):h().p=p,e.each(l,function(i,a){if(a!==n)if(h().validPositions[i]===n&&l[i]===N(i)&&j(i,!0)&&!1===_(i,l[i],!0,n,n,!0))h().p++;else{var o=new e.Event("_checkval");o.which=a.charCodeAt(0),u+=a;var s=v(n,!0),m=S(s),g=P(s+1,m?m.locator.slice():n,s);if(y=p,b=u,-1===d(!0,0,!1).slice(y,F(y)).join("").indexOf(b)||j(y)||S(y).match.nativeDef!==b.charAt(0)&&(" "!==S(y).match.nativeDef||S(y+1).match.nativeDef!==b.charAt(0))||r||c.autoUnmask){var k=r?i:null==g.match.fn&&g.match.optionality&&s+1<h().p?s+1:h().p;(f=oe.keypressEvent.call(t,o,!0,!1,r,k))&&(p=k+1,u="")}else f=oe.keypressEvent.call(t,o,!0,!1,!0,s+1);R(n,E(),f.forwardPosition,o,!1)}var y,b}),i&&R(t,E(),f?f.forwardPosition:n,s||new e.Event("checkval"),s&&"input"===s.type)}function B(t){if(t){if(t.inputmask===n)return t.value;t.inputmask&&t.inputmask.refreshValue&&oe.setValueEvent.call(t)}var i=[],a=h().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&i.push(a[r].input);var o=0===i.length?"":(X?i.reverse():i).join("");if(e.isFunction(c.onUnMask)){var s=(X?E().slice().reverse():E()).join("");o=c.onUnMask.call(J,s,o,c)}return o}function I(a,r,o,s){function l(e){return!0===s||!X||"number"!=typeof e||c.greedy&&""===c.placeholder||(e=a.inputmask.__valueGet.call(a).length-e),e}var u;if(r===n)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):i.selection&&i.selection.createRange&&(o=(r=0-(u=i.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:l(r),end:l(o)};if(e.isArray(r)&&(o=X?r[0]:r[1],r=X?r[1]:r[0]),r.begin!==n&&(o=X?r.begin:r.end,r=X?r.end:r.begin),"number"==typeof r){r=l(r),o="number"==typeof(o=l(o))?o:r;var p=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=p>a.scrollWidth?p:0,!1===c.insertMode&&r===o&&o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=i.createRange(),a.firstChild===n||null===a.firstChild){var f=i.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());z(a,{begin:r,end:o})}}function L(t){var i,a,r=E(),o=r.length,s=v(),l={},u=h().validPositions[s],c=u!==n?u.locator.slice():n;for(i=s+1;i<r.length;i++)c=(a=P(i,c,i-1)).locator.slice(),l[i]=e.extend(!0,{},a);var p=u&&u.alternation!==n?u.locator[u.alternation]:n;for(i=o-1;i>s&&((a=l[i]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[i].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&D(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==C(i)[0].def))&&r[i]===N(i,a.match);i--)o--;return t?{l:o,def:l[o]?l[o].match:n}:o}function H(e){for(var t,i=L(),a=e.length,r=h().validPositions[v()];i<a&&!j(i,!0)&&(t=r!==n?P(i,r.locator.slice(""),r):S(i))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||i+1===a&&""===(r!==n?P(i+1,r.locator.slice(""),r):S(i+1)).match.def);)i++;for(;(t=h().validPositions[i-1])&&t&&t.match.optionality&&t.input===c.skipOptionalPartCharacter;)i--;return e.splice(i),e}function V(t){if(e.isFunction(c.isComplete))return c.isComplete(t,c);if("*"===c.repeat)return n;var i=!1,a=L(!0),r=T(a.l);if(a.def===n||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=r;o++){var s=P(o).match;if(null!==s.fn&&h().validPositions[o]===n&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==N(o,s)){i=!1;break}}}return i}function K(e,t,i,r,o){if((c.numericInput||X)&&(t===a.keyCode.BACKSPACE?t=a.keyCode.DELETE:t===a.keyCode.DELETE&&(t=a.keyCode.BACKSPACE),X)){var s=i.end;i.end=i.begin,i.begin=s}if(t===a.keyCode.BACKSPACE&&(i.end-i.begin<1||!1===c.insertMode)?(i.begin=T(i.begin),h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.begin--):t===a.keyCode.DELETE&&i.begin===i.end&&(i.end=j(i.end,!0)&&h().validPositions[i.end]&&h().validPositions[i.end].input!==c.radixPoint?i.end+1:F(i.end)+1,h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.end++),k(i.begin,i.end,!1,r),!0!==r&&null!==c.keepStatic&&!1!==c.keepStatic){var l=O(!0);l&&(i.begin=l.caret!==n?l.caret:l.pos?F(l.pos.begin?l.pos.begin:l.pos):v(-1,!0))}var u=v(i.begin,!0);if(u<i.begin||-1===i.begin)h().p=F(u);else if(!0!==r&&(h().p=i.begin,!0!==o))for(;h().p<u&&h().validPositions[h().p]===n;)h().p++}function U(n){var a=(n.ownerDocument.defaultView||t).getComputedStyle(n,null),r=i.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,q=i.createElement("div"),n.inputmask.colorMask=q,q.className="im-colormask",n.parentNode.insertBefore(q,n),n.parentNode.removeChild(n),q.appendChild(r),q.appendChild(n),n.style.left=r.offsetLeft+"px",e(n).on("click",function(e){return I(n,function(e){var t,r=i.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",i.body.appendChild(r);var s,l=n.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return i.body.removeChild(r),t}(e.clientX)),oe.clickEvent.call(n,[e])}),e(n).on("keydown",function(e){e.shiftKey||!1===c.insertMode||setTimeout(function(){z(n)},0)})}function z(e,t,a){function r(e){if(e===n&&(e=""),p||null!==o.fn&&s.input!==n)if(p&&(null!==o.fn&&s.input!==n||""===o.def)){p=!1;var t=u.length;u[t-1]=u[t-1]+"</span>",u.push(e)}else u.push(e);else p=!0,u.push("<span class='im-static'>"+e)}var o,s,l,u=[],p=!1,f=0;if(q!==n){var m=E();if(t===n?t=I(e):t.begin===n&&(t={begin:t,end:t}),!0!==a){var d=v();do{h().validPositions[f]?(s=h().validPositions[f],o=s.match,l=s.locator.slice(),r(m[f])):(s=P(f,l,f-1),o=s.match,l=s.locator.slice(),(!1===c.jitMasking||f<d||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>f)&&r(N(f,o))),f++}while(($===n||f<$)&&(null!==o.fn||""!==o.def)||d>f||p);p&&r(),i.activeElement===e&&(u.splice(t.begin,0,t.begin===t.end?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),u.splice(t.end+1,0,"</mark>"))}var g=q.getElementsByTagName("div")[0];g.innerHTML=u.join(""),e.inputmask.positionColorMask(e,g)}}s=s||this.maskset,c=c||this.opts;var Q,W,$,q,Z,J=this,Y=this.el,X=this.isRTL,ee=!1,te=!1,ie=!1,ne=!1,ae=!1,re={on:function(t,i,r){var o=function(t){var i=this;if(i.inputmask===n&&"FORM"!==this.nodeName){var o=e.data(i,"_inputmask_opts");o?new a(o).mask(i):re.off(i)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(i.disabled||i.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===c.tabThrough&&t.keyCode===a.keyCode.TAB))){switch(t.type){case"input":if(!0===te)return te=!1,t.preventDefault();p&&(ae=!0);break;case"keydown":ee=!1,te=!1;break;case"keypress":if(!0===ee)return t.preventDefault();ee=!0;break;case"click":if(f||m){var s=arguments;return setTimeout(function(){r.apply(i,s)},0),!1}}var l=r.apply(i,arguments);return ae&&(ae=!1,setTimeout(function(){I(i,i.inputmask.caretPos,n,!0)})),!1===l&&(t.preventDefault(),t.stopPropagation()),l}t.preventDefault()}};t.inputmask.events[i]=t.inputmask.events[i]||[],t.inputmask.events[i].push(o),-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).on(i,o):e(t).on(i,o)},off:function(t,i){var n;t.inputmask&&t.inputmask.events&&(i?(n=[])[i]=t.inputmask.events[i]:n=t.inputmask.events,e.each(n,function(i,n){for(;n.length>0;){var a=n.pop();-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).off(i,a):e(t).off(i,a)}delete t.inputmask.events[i]}))}},oe={keydownEvent:function(t){var i=this,n=e(i),r=t.keyCode,o=I(i);if(r===a.keyCode.BACKSPACE||r===a.keyCode.DELETE||m&&r===a.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&r===a.keyCode.X&&!l("cut"))t.preventDefault(),K(0,r,o),R(i,E(!0),h().p,t,i.inputmask._valueGet()!==E().join("")),i.inputmask._valueGet()===M().join("")?n.trigger("cleared"):!0===V(E())&&n.trigger("complete");else if(r===a.keyCode.END||r===a.keyCode.PAGE_DOWN){t.preventDefault();var s=F(v());c.insertMode||s!==h().maskLength||t.shiftKey||s--,I(i,t.shiftKey?o.begin:s,s,!0)}else r===a.keyCode.HOME&&!t.shiftKey||r===a.keyCode.PAGE_UP?(t.preventDefault(),I(i,0,t.shiftKey?o.begin:0,!0)):(c.undoOnEscape&&r===a.keyCode.ESCAPE||90===r&&t.ctrlKey)&&!0!==t.altKey?(G(i,!0,!1,Q.split("")),n.trigger("click")):r!==a.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===c.tabThrough&&r===a.keyCode.TAB?(!0===t.shiftKey?(null===S(o.begin).match.fn&&(o.begin=F(o.begin)),o.end=T(o.begin,!0),o.begin=T(o.end,!0)):(o.begin=F(o.begin,!0),o.end=F(o.begin,!0),o.end<h().maskLength&&o.end--),o.begin<h().maskLength&&(t.preventDefault(),I(i,o.begin,o.end))):t.shiftKey||!1===c.insertMode&&(r===a.keyCode.RIGHT?setTimeout(function(){var e=I(i);I(i,e.begin)},0):r===a.keyCode.LEFT&&setTimeout(function(){var e=I(i);I(i,X?e.begin+1:e.begin-1)},0)):(c.insertMode=!c.insertMode,I(i,c.insertMode||o.begin!==h().maskLength?o.begin:o.begin-1));c.onKeyDown.call(this,t,E(),I(i).begin,c),ie=-1!==e.inArray(r,c.ignorables)},keypressEvent:function(t,i,r,o,s){var l=this,u=e(l),p=t.which||t.charCode||t.keyCode;if(!(!0===i||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ie))return p===a.keyCode.ENTER&&Q!==E().join("")&&(Q=E().join(""),setTimeout(function(){u.trigger("change")},0)),!0;if(p){46===p&&!1===t.shiftKey&&""!==c.radixPoint&&(p=c.radixPoint.charCodeAt(0));var f,m=i?{begin:s,end:s}:I(l),d=String.fromCharCode(p);h().writeOutBuffer=!0;var v=_(m,d,o);if(!1!==v&&(g(!0),f=v.caret!==n?v.caret:F(v.pos.begin?v.pos.begin:v.pos),h().p=f),f=c.numericInput&&v.caret===n?T(f):f,!1!==r&&(setTimeout(function(){c.onKeyValidation.call(l,p,v,c)},0),h().writeOutBuffer&&!1!==v)){var k=E();R(l,k,f,t,!0!==i),!0!==i&&setTimeout(function(){!0===V(k)&&u.trigger("complete")},0)}if(t.preventDefault(),i)return!1!==v&&(v.forwardPosition=f),v}},pasteEvent:function(i){var n,a=this,r=i.originalEvent||i,o=e(a),s=a.inputmask._valueGet(!0),l=I(a);X&&(n=l.end,l.end=l.begin,l.begin=n);var u=s.substr(0,l.begin),p=s.substr(l.end,s.length);if(u===(X?M().reverse():M()).slice(0,l.begin).join("")&&(u=""),p===(X?M().reverse():M()).slice(l.end).join("")&&(p=""),X&&(n=u,u=p,p=n),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+p;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+p}var f=s;if(e.isFunction(c.onBeforePaste)){if(!1===(f=c.onBeforePaste.call(J,s,c)))return i.preventDefault();f||(f=s)}return G(a,!1,!1,X?f.split("").reverse():f.toString().split("")),R(a,E(),F(v()),i,Q!==E().join("")),!0===V(E())&&o.trigger("complete"),i.preventDefault()},inputFallBackEvent:function(t){var i,n,r=this,o=r.inputmask._valueGet();if(E().join("")!==o){var s=I(r);if(n=s,"."===(i=o).charAt(n.begin-1)&&""!==c.radixPoint&&((i=i.split(""))[n.begin-1]=c.radixPoint.charAt(0),i=i.join("")),o=function(e,t,i){if(f){var n=t.replace(E().join(""),"");if(1===n.length){var a=t.split("");a.splice(i.begin,0,n),t=a.join("")}}return t}(0,o=i,s),E().join("")!==o){var l=E().join(""),u=o.length>l.length?-1:0,p=o.substr(0,s.begin),m=o.substr(s.begin),d=l.substr(0,s.begin+u),h=l.substr(s.begin+u),g=s,v="",k=!1;if(p!==d){for(var y=(k=p.length>=d.length)?p.length:d.length,b=0;p.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===u&&(g.begin=b),v+=p.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===c.radixPoint||""!==m||p.charAt(g.begin+u-1)!==c.radixPoint||(g.begin--,v=c.radixPoint))),R(r,E(),{begin:g.begin+u,end:g.end+u}),v.length>0)e.each(v.split(""),function(t,i){var n=new e.Event("keypress");n.which=i.charCodeAt(0),ie=!1,oe.keypressEvent.call(r,n)});else{g.begin===g.end-1&&(g.begin=T(g.begin+1),g.begin===g.end-1?I(r,g.begin):I(r,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=a.keyCode.DELETE,oe.keydownEvent.call(r,x),!1===c.insertMode&&I(r,I(r).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var i=this.inputmask._valueGet(!0);e.isFunction(c.onBeforeMask)&&(i=c.onBeforeMask.call(J,i,c)||i),i=i.split(""),G(this,!0,!1,X?i.reverse():i),Q=E().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&this.inputmask._valueGet()===M().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==E().join("")?R(t,E(),F(v())):!1===ne&&I(t,F(v()))),!0===c.positionCaretOnTab&&!1===ne&&oe.clickEvent.apply(t,[e,!0]),Q=E().join("")},mouseleaveEvent:function(e){if(ne=!1,c.clearMaskOnLostFocus&&i.activeElement!==this){var t=E().slice(),n=this.inputmask._valueGet();n!==this.getAttribute("placeholder")&&""!==n&&(-1===v()&&n===M().join("")?t=[]:H(t),R(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(i.activeElement===r){var t=I(r);if(a&&(X?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(c.positionCaretOnClick){case"none":break;case"select":I(r,0,E().length);break;case"radixFocus":if(function(t){if(""!==c.radixPoint){var i=h().validPositions;if(i[t]===n||i[t].input===N(t)){if(t<F(-1))return!0;var a=e.inArray(c.radixPoint,E());if(-1!==a){for(var r in i)if(a<r&&i[r].input!==N(r))return!1;return!0}}}return!1}(t.begin)){var o=E().join("").indexOf(c.radixPoint);I(r,c.numericInput?F(o):o);break}default:var s=t.begin,l=v(s,!0),u=F(l);if(s<u)I(r,j(s,!0)||j(s-1,!0)?s:F(s));else{var p=h().validPositions[l],f=P(u,p?p.match.locator:n,p),m=N(u,f.match);if(""!==m&&E()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!j(u,!0)&&f.match.def===m){var d=F(u);(s>=d||s===u)&&(u=d)}I(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){I(t,0,F(v()))},0)},cutEvent:function(n){var r=e(this),o=I(this),s=n.originalEvent||n,l=t.clipboardData||s.clipboardData,u=X?E().slice(o.end,o.begin):E().slice(o.begin,o.end);l.setData("text",X?u.reverse().join(""):u.join("")),i.execCommand&&i.execCommand("copy"),K(0,a.keyCode.DELETE,o),R(this,E(),h().p,n,Q!==E().join("")),this.inputmask._valueGet()===M().join("")&&r.trigger("cleared")},blurEvent:function(t){var i=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=E().slice();""===a&&q===n||(c.clearMaskOnLostFocus&&(-1===v()&&a===M().join("")?r=[]:H(r)),!1===V(r)&&(setTimeout(function(){i.trigger("incomplete")},0),c.clearIncomplete&&(g(),r=c.clearMaskOnLostFocus?[]:M().slice())),R(this,r,n,t)),Q!==E().join("")&&(Q=r.join(""),i.trigger("change"))}},mouseenterEvent:function(e){ne=!0,i.activeElement!==this&&c.showMaskOnHover&&this.inputmask._valueGet()!==E().join("")&&R(this,E())},submitEvent:function(e){Q!==E().join("")&&W.trigger("change"),c.clearMaskOnLostFocus&&-1===v()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===M().join("")&&Y.inputmask._valueSet(""),c.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){R(Y,E())},0))},resetEvent:function(e){Y.inputmask.refreshValue=!0,setTimeout(function(){W.trigger("setvalue")},0)}};if(a.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},r!==n)switch(r.action){case"isComplete":return Y=r.el,V(E());case"unmaskedvalue":return Y!==n&&r.value===n||(Z=r.value,Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Z,c)||Z).split(""),G(n,!1,!1,X?Z.reverse():Z),e.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(J,n,E(),0,c)),B(Y);case"mask":!function(t){re.off(t);var a=function(t,a){var r=t.getAttribute("type"),s="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!s)if("INPUT"===t.tagName){var l=i.createElement("input");l.setAttribute("type",r),s="text"===l.type,l=null}else s="partial";return!1!==s?function(t){function r(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==v()||!0!==a.nullable?i.activeElement===this&&a.clearMaskOnLostFocus?(X?H(E().slice()).reverse():H(E().slice())).join(""):l.call(this):"":l.call(this)}function s(t){u.call(this,t),this.inputmask&&e(this).trigger("setvalue")}var l,u,c;if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===o("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):n;p&&p.get&&p.set?(l=p.get,u=p.set,Object.defineProperty(t,"value",{get:r,set:s,configurable:!0})):"INPUT"!==t.tagName&&(l=function(){return this.textContent},u=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:r,set:s,configurable:!0}))}else i.__lookupGetter__&&t.__lookupGetter__("value")&&(l=t.__lookupGetter__("value"),u=t.__lookupSetter__("value"),t.__defineGetter__("value",r),t.__defineSetter__("value",s));t.inputmask.__valueGet=l,t.inputmask.__valueSet=u}t.inputmask._valueGet=function(e){return X&&!0!==e?l.call(this.el).split("").reverse().join(""):l.call(this.el)},t.inputmask._valueSet=function(e,t){u.call(this.el,null===e||e===n?"":!0!==t&&X?e.split("").reverse().join(""):e)},l===n&&(l=function(){return this.value},u=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===n||!0!==e.valHooks[t].inputmaskpatch)){var i=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=i(e);return-1!==v(n,n,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return i(e)},set:function(t,i){var n,a=e(t);return n=r(t,i),t.inputmask&&a.trigger("setvalue"),n},inputmaskpatch:!0}}}(t.type),c=t,re.on(c,"mouseenter",function(t){var i=e(this);this.inputmask._valueGet()!==E().join("")&&i.trigger("setvalue")}))}}(t):t.inputmask=n,s}(t,c);if(!1!==a&&(W=e(Y=t),-1===($=Y!==n?Y.maxLength:n)&&($=n),!0===c.colorMask&&U(Y),p&&("inputmode"in Y&&(Y.inputmode=c.inputmode,Y.setAttribute("inputmode",c.inputmode)),!0===c.disablePredictiveText&&("autocorrect"in Y?Y.autocorrect=!1:(!0!==c.colorMask&&U(Y),Y.type="password"))),!0===a&&(re.on(Y,"submit",oe.submitEvent),re.on(Y,"reset",oe.resetEvent),re.on(Y,"mouseenter",oe.mouseenterEvent),re.on(Y,"blur",oe.blurEvent),re.on(Y,"focus",oe.focusEvent),re.on(Y,"mouseleave",oe.mouseleaveEvent),!0!==c.colorMask&&re.on(Y,"click",oe.clickEvent),re.on(Y,"dblclick",oe.dblclickEvent),re.on(Y,"paste",oe.pasteEvent),re.on(Y,"dragdrop",oe.pasteEvent),re.on(Y,"drop",oe.pasteEvent),re.on(Y,"cut",oe.cutEvent),re.on(Y,"complete",c.oncomplete),re.on(Y,"incomplete",c.onincomplete),re.on(Y,"cleared",c.oncleared),p||!0===c.inputEventOnly?Y.removeAttribute("maxLength"):(re.on(Y,"keydown",oe.keydownEvent),re.on(Y,"keypress",oe.keypressEvent)),re.on(Y,"compositionstart",e.noop),re.on(Y,"compositionupdate",e.noop),re.on(Y,"compositionend",e.noop),re.on(Y,"keyup",e.noop),re.on(Y,"input",oe.inputFallBackEvent),re.on(Y,"beforeinput",e.noop)),re.on(Y,"setvalue",oe.setValueEvent),Q=M().join(""),""!==Y.inputmask._valueGet(!0)||!1===c.clearMaskOnLostFocus||i.activeElement===Y)){var r=e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Y.inputmask._valueGet(!0),c)||Y.inputmask._valueGet(!0);""!==r&&G(Y,!0,!1,X?r.split("").reverse():r.split(""));var s=E().slice();Q=s.join(""),!1===V(s)&&c.clearIncomplete&&g(),c.clearMaskOnLostFocus&&i.activeElement!==Y&&(-1===v()?s=[]:H(s)),R(Y,s),i.activeElement===Y&&I(Y,F(v()))}}(Y);break;case"format":return Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,r.value,c)||r.value).split(""),G(n,!0,!1,X?Z.reverse():Z),r.metadata?{value:X?E().slice().reverse().join(""):E().join(""),metadata:u.call(this,{action:"getmetadata"},s,c)}:X?E().slice().reverse().join(""):E().join("");case"isValid":r.value?(Z=r.value.split(""),G(n,!0,!0,X?Z.reverse():Z)):r.value=E().join("");for(var se=E(),le=L(),ue=se.length-1;ue>le&&!j(ue);ue--);return se.splice(le,ue+1-le),V(se)&&r.value===E().join("");case"getemptymask":return M().join("");case"remove":return Y&&Y.inputmask&&(W=e(Y),Y.inputmask._valueSet(c.autoUnmask?B(Y):Y.inputmask._valueGet(!0)),re.off(Y),Y.inputmask.colorMask&&((q=Y.inputmask.colorMask).removeChild(Y),q.parentNode.insertBefore(Y,q),q.parentNode.removeChild(q)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):i.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=n),Y;case"getmetadata":if(e.isArray(s.metadata)){var ce=d(!0,0,!1).join("");return e.each(s.metadata,function(e,t){if(t.mask===ce)return ce=t,!1}),ce}return s.metadata}}var c=navigator.userAgent,p=l("touchstart"),f=/iemobile/i.test(c),m=/iphone/i.test(c)&&!f;return a.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask.call(this,t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:n,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:e.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:n,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-91-9]",definitionSymbol:"*"},a:{validator:"[A-Za-z�-���A-y�]",definitionSymbol:"*"},"*":{validator:"[0-91-9A-Za-z�-���A-y�]"}},aliases:{},masksCache:{},mask:function(o){var l=this;return"string"==typeof o&&(o=i.getElementById(o)||i.querySelectorAll(o)),o=o.nodeName?[o]:o,e.each(o,function(i,o){var c=e.extend(!0,{},l.opts);if(function(i,a,o,s){if(!0===a.importDataAttributes){var l,u,c,p,f=function(e,a){null!==(a=a!==n?a:i.getAttribute(s+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),o[e]=a)},m=i.getAttribute(s);if(m&&""!==m&&(m=m.replace(/'/g,'"'),u=JSON.parse("{"+m+"}")),u){c=n;for(p in u)if("alias"===p.toLowerCase()){c=u[p];break}}f("alias",c),o.alias&&r(o.alias,o,a);for(l in a){if(u){c=n;for(p in u)if(p.toLowerCase()===l.toLowerCase()){c=u[p];break}}f(l,c)}}return e.extend(!0,a,o),("rtl"===i.dir||a.rightAlign)&&(i.style.textAlign="right"),("rtl"===i.dir||a.numericInput)&&(i.dir="ltr",i.removeAttribute("dir"),a.isRTL=!0),Object.keys(o).length}(o,c,e.extend(!0,{},l.userOptions),l.dataAttribute)){var p=s(c,l.noMasksCache);p!==n&&(o.inputmask!==n&&(o.inputmask.opts.autoUnmask=!0,o.inputmask.remove()),o.inputmask=new a(n,n,!0),o.inputmask.opts=c,o.inputmask.noMasksCache=l.noMasksCache,o.inputmask.userOptions=e.extend(!0,{},l.userOptions),o.inputmask.isRTL=c.isRTL||c.numericInput,o.inputmask.el=o,o.inputmask.maskset=p,e.data(o,"_inputmask_opts",c),u.call(o.inputmask,{action:"mask"}))}}),o&&o[0]&&o[0].inputmask||this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":o(t))?(e.extend(this.userOptions,t),this.el&&!0!==i&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return u.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i,r){function o(e,t,i,n){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=n||!1,this.quantifier={min:1,max:1}}function s(t,o,s){s=s!==n?s:t.matches.length;var l=t.matches[s-1];if(i)0===o.indexOf("[")||k&&/\\d|\\s|\\w]/i.test(o)||"."===o?t.matches.splice(s++,0,{fn:new RegExp(o,r.casing?"i":""),optionality:t.isOptional,newBlockMarker:l===n||l.def!==o,casing:null,def:o,placeholder:n,nativeDef:o}):(k&&(o=o[o.length-1]),e.each(o.split(""),function(e,i){l=t.matches[s-1],t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==i&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||i,placeholder:r.staticDefinitionSymbol!==n?i:n,nativeDef:i})})),k=!1;else{var u=(r.definitions?r.definitions[o]:n)||a.prototype.definitions[o];u&&!k?t.matches.splice(s++,0,{fn:u.validator?"string"==typeof u.validator?new RegExp(u.validator,r.casing?"i":""):new function(){this.test=u.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:l===n||l.def!==(u.definitionSymbol||o),casing:u.casing,def:u.definitionSymbol||o,placeholder:u.placeholder,nativeDef:o}):(t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==o&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||o,placeholder:r.staticDefinitionSymbol!==n?o:n,nativeDef:o}),k=!1)}}function l(){if(b.length>0){if(s(f=b[b.length-1],c),f.isAlternator){m=b.pop();for(var e=0;e<m.matches.length;e++)m.matches[e].isGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else s(y,c)}var u,c,p,f,m,d,h,g=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,k=!1,y=new o,b=[],x=[];for(i&&(r.optionalmarker[0]=n,r.optionalmarker[1]=n);u=i?v.exec(t):g.exec(t);){if(c=u[0],i)switch(c.charAt(0)){case"?":c="{0,1}";break;case"+":case"*":c="{"+c+"}"}if(k)l();else switch(c.charAt(0)){case r.escapeChar:k=!0,i&&l();break;case r.optionalmarker[1]:case r.groupmarker[1]:if((p=b.pop()).openGroup=!1,p!==n)if(b.length>0){if((f=b[b.length-1]).matches.push(p),f.isAlternator){m=b.pop();for(var P=0;P<m.matches.length;P++)m.matches[P].isGroup=!1,m.matches[P].alternatorGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else y.matches.push(p);else l();break;case r.optionalmarker[0]:b.push(new o(!1,!0));break;case r.groupmarker[0]:b.push(new o(!0));break;case r.quantifiermarker[0]:var S=new o(!1,!1,!0),A=(c=c.replace(/[{}]/g,"")).split(","),C=isNaN(A[0])?A[0]:parseInt(A[0]),M=1===A.length?C:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==M&&"+"!==M||(C="*"===M?0:1),S.quantifier={min:C,max:M},b.length>0){var E=b[b.length-1].matches;(u=E.pop()).isGroup||((h=new o(!0)).matches.push(u),u=h),E.push(u),E.push(S)}else(u=y.matches.pop()).isGroup||(i&&null===u.fn&&"."===u.def&&(u.fn=new RegExp(u.def,r.casing?"i":"")),(h=new o(!0)).matches.push(u),u=h),y.matches.push(u),y.matches.push(S);break;case r.alternatormarker:if(b.length>0){var w=(f=b[b.length-1]).matches[f.matches.length-1];d=f.openGroup&&(w.matches===n||!1===w.isGroup&&!1===w.isAlternator)?b.pop():f.matches.pop()}else d=y.matches.pop();if(d.isAlternator)b.push(d);else if(d.alternatorGroup?(m=b.pop(),d.alternatorGroup=!1):m=new o(!1,!1,!1,!0),m.matches.push(d),b.push(m),d.openGroup){d.openGroup=!1;var D=new o(!0);D.alternatorGroup=!0,b.push(D)}break;default:l()}}for(;b.length>0;)p=b.pop(),y.matches.push(p);return y.matches.length>0&&(function t(a){a&&a.matches&&e.each(a.matches,function(e,o){var l=a.matches[e+1];(l===n||l.matches===n||!1===l.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,i||(s(o,r.groupmarker[0],0),!0!==o.openGroup&&s(o,r.groupmarker[1]))),t(o)})}(y),x.push(y)),(r.numericInput||r.isRTL)&&function e(t){t.matches=t.matches.reverse();for(var i in t.matches)if(t.matches.hasOwnProperty(i)){var a=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[a+1]&&t.matches[a+1].isGroup){var o=t.matches[i];t.matches.splice(i,1),t.matches.splice(a+1,0,o)}t.matches[i].matches!==n?t.matches[i]=e(t.matches[i]):t.matches[i]=function(e){return e===r.optionalmarker[0]?e=r.optionalmarker[1]:e===r.optionalmarker[1]?e=r.optionalmarker[0]:e===r.groupmarker[0]?e=r.groupmarker[1]:e===r.groupmarker[1]&&(e=r.groupmarker[0]),e}(t.matches[i])}return t}(x[0]),x}},a.extendDefaults=function(t){e.extend(!0,a.prototype.defaults,t)},a.extendDefinitions=function(t){e.extend(!0,a.prototype.definitions,t)},a.extendAliases=function(t){e.extend(!0,a.prototype.aliases,t)},a.format=function(e,t,i){return a(t).format(e,i)},a.unmask=function(e,t){return a(t).unmaskedvalue(e)},a.isValid=function(e,t){return a(t).isValid(e)},a.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},a.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},a.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},a})?n.apply(t,a):n)&&(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}i(4),i(7),i(8),i(9);var a=n(i(1)),r=n(i(0)),o=n(i(2));r.default===o.default&&i(10),window.Inputmask=a.default},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e){if(!e.tokenizer){var t=[];for(var i in o)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function n(e,n,a){for(var r,s="";r=i(a).exec(e);)void 0===n?s+=o[r[0]]?"("+o[r[0]][0]+")":t.escapeRegex(r[0]):o[r[0]]?s+=o[r[0]][3].call(n.date):s+=r[0];return s}function a(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function r(e,t,n){var a,r,s,l,u,c,p,f,m={date:new Date(1,0,1)},d=e;if("string"==typeof d){for(;r=i(n).exec(t);){var h=d.slice(0,r[0].length);o.hasOwnProperty(r[0])&&(a=o[r[0]][2],s=o[r[0]][1],l=m,u=h,c=n,p=void 0,f=void 0,"year"===a?(l[a]=(f=4===(p=u).length?p:(new Date).getFullYear().toString().substr(0,4-p.length)+p,n.min&&n.min.year&&n.max&&n.max.year?(f=f.replace(/[^0-9]/g,""),f=p.charAt(0)===n.max.year.charAt(0)?p.replace(/[^0-9]/g,"0"):f+n.min.year.substr(f.length)):f=f.replace(/[^0-9]/g,"0"),f),l["raw"+a]=u):l[a]=c.min&&u.match(/[^0-9]/)?c.min[a]:u,void 0!==s&&s.call(l.date,"month"==a?parseInt(l[a])-1:l[a])),d=d.slice(h.length)}return m}}var o={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return a(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return a(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return a(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return a(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),2)}],t:[""],tt:[""],T:[""],TT:[""],Z:[""],o:[""],S:[""]},s={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};return t.extendAliases({datetime:{mask:function(e){return e.inputFormat=s[e.inputFormat]||e.inputFormat,e.displayFormat=s[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=s[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=e.placeholder!==t.prototype.defaults.placeholder?e.placeholder:e.inputFormat,e.min=r(e.min,e.inputFormat,e),e.max=r(e.max,e.inputFormat,e),e.regex=n(e.inputFormat,void 0,e),null},inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},postValidation:function(e,t,i){var n,a,o,s,l,u=t,c=r(e.join(""),i.inputFormat,i);return u&&c.date.getTime()==c.date.getTime()&&(s=c,l=u,u=(u=(!isFinite(s.day)||"29"==s.day&&!isFinite(s.rawyear)||new Date(s.date.getFullYear(),isFinite(s.month)?s.month:s.date.getMonth()+1,0).getDate()>=s.day)&&l)&&(n=c.date,o=!0,(a=i).min&&a.min.date.getTime()==a.min.date.getTime()&&(o=o&&a.min.date.getTime()<=n.getTime()),a.max&&a.max.date.getTime()==a.max.date.getTime()&&(o=o&&a.max.date.getTime()>=n.getTime()),o)),u},onKeyDown:function(n,r,o,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=i(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=a(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=a(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=a(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,i){return n(i.outputFormat,r(e,i.inputFormat,i),i)},insertMode:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return window}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return document}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-z�-���A-y�]",casing:"upper"},"&":{validator:"[0-9A-Za-z�-���A-y�]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,n,a){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",casing:"lower"},"-":{validator:"[0-9A-Za-z-]",casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t,i){function n(e,i){for(var n="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||i.definitions[e.charAt(a)]||i.optionalmarker.start===e.charAt(a)||i.optionalmarker.end===e.charAt(a)||i.quantifiermarker.start===e.charAt(a)||i.quantifiermarker.end===e.charAt(a)||i.groupmarker.start===e.charAt(a)||i.groupmarker.end===e.charAt(a)||i.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=i),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=n(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==i){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=n(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,n,a,r,o){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===i||!o.isNegative,""===t.join("")||{caret:n,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==i&&(isNaN(o.digits)||parseInt(o.digits)>0)){var s=e.inArray(o.radixPoint,t);if(-1!==s)return!0===o.numericInput?n===s:{caret:s+1}}return!0},postValidation:function(n,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===i&&a.caret!==i&&!0!==a.dopost)return a;var l=a.caret!==i?a.caret:a.pos,u=n.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==i&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==i&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==i&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===i&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var i="";if(i+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var n=e.join("").split(t.radixPoint);n[1]&&(i+=t.radixPoint+"*{"+n[1].match(/^\d*\??\d*/)[0].length+"}")}return i}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==i)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===i||a.pos!==i?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||n.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(n,a,r,o){if(n)switch(n.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===i&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),i,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,i){return i?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,n,a,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&n.validPositions[a]!==i&&"~"===n.validPositions[a].match.def&&!s){var u=n.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);c.length>1&&(c[1]=c[1].replace(/0/g,o.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,o.placeholder.charAt(0))),u=c[0]+o.radixPoint+c[1]||"";var p=n._buffer.join("");for(u===o.radixPoint&&(u=p);null===u.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(u=(u=u.replace(p,"")).split(""))[a]===i?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||n.validPositions[a-1]!==i||(n.buffer[a]="0",l={pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,i,n,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,n,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,i,n,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&i.validPositions[n]&&i.validPositions[n].match.placeholder===r.radixPoint&&(s={caret:n+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,n){if(""===i&&!0===n.nullable)return i;var a=e.replace(n.prefix,"");return a=(a=a.replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(a=a.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==a.indexOf(n.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,n.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,i){var n=e.join("");if(e.slice().join("")!==n)return!1;var a=n.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator)+"([0-9]{3})","g"),"$1"),","===i.radixPoint&&(a=a.replace(t.escapeRegex(i.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,n){if(n.isNegative=i,e=e.toString().charAt(e.length-1)===n.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==n.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==n.groupSeparator?parseInt(n.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",n.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",n.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",n.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),0===n.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==n.radixPoint&&isFinite(n.digits)&&-1!==e.indexOf(n.radixPoint)){var l=e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(n.digits)<l.toString().length){var u=Math.pow(10,parseInt(n.digits));e=e.replace(t.escapeRegex(n.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",n.radixPoint)}}return e},canClearPosition:function(e,t,i,n,a){var r=e.validPositions[t],o=r.input!==a.radixPoint||null!==e.validPositions[t].match.fn&&!1===a.decimalProtect||r.input===a.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===i||r.input===a.groupSeparator||r.input===a.negationSymbol.front||r.input===a.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(a.isNegative=!1),o},onKeyDown:function(i,n,a,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),n=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return i.localeCompare(n)}var n=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(i,n,a){n=n||"",a=a||r,""!==n&&(a[n]={});for(var o="",s=a[n]||a,l=i.length-1;l>=0;l--)s[o=(t=i[l].mask||i[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),i.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(i){var n="",r=[];for(var o in i)e.isArray(i[o])?1===i[o].length?r.push(o+i[o]):r.push(o+a.groupmarker[0]+i[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(i[o]));return 1===r.length?n+=r[0]:n+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],n}(r)),t=t.replace(/9/g,"\\9")),n.call(this,t,i,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(i)},onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||-1===i.indexOf(t.countrycode))&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(2),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,n){var a,r=this[0];if(void 0===n&&(n={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(n),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof n)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n)});if(r&&void 0!==r.inputmask)return r.inputmask.option(n);break;default:return n.alias=i,a=new t(n),this.each(function(){a.mask(this)})}else{if("object"==(void 0===i?"undefined":o(i)))return a=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===i)return this.each(function(){(a=new t(n)).mask(this)})}}),e.fn.inputmask})?n.apply(t,a):n)&&(e.exports=r)}]);
/* End */
;; /* /bitrix/templates/aspro-stroy/js/jquery.actual.min.js?14792895781101*/
; /* /bitrix/templates/aspro-stroy/js/jquery.fancybox.min.js?150477693921528*/
; /* /bitrix/templates/aspro-stroy/vendor/jquery.easing.js?14792895788097*/
; /* /bitrix/templates/aspro-stroy/vendor/jquery.appear.js?14792895783188*/
; /* /bitrix/templates/aspro-stroy/vendor/jquery.cookie.js?14792895782247*/
; /* /bitrix/templates/aspro-stroy/vendor/bootstrap.js?147928957827908*/
; /* /bitrix/templates/aspro-stroy/vendor/flexslider/jquery.flexslider-min.js?147928957821817*/
; /* /bitrix/templates/aspro-stroy/vendor/jquery.validate.min.js?147928957822254*/
; /* /bitrix/templates/aspro-stroy/js/jquery.uniform.min.js?14792895788308*/
; /* /bitrix/templates/aspro-stroy/js/jqModal.min.js?15047769392622*/
; /* /bitrix/templates/aspro-stroy/js/detectmobilebrowser.js?14792895782203*/
; /* /bitrix/templates/aspro-stroy/js/device.min.js?14792895782605*/
; /* /bitrix/templates/aspro-stroy/js/blink.js?1479289578347*/
; /* /bitrix/templates/aspro-stroy/js/jquery.waypoints.min.js?14792895788044*/
; /* /bitrix/templates/aspro-stroy/js/jquery.counterup.js?14792895781069*/
; /* /bitrix/templates/aspro-stroy/js/jquery.alphanumeric.js?14792895781972*/
; /* /bitrix/templates/aspro-stroy/js/general.min.js?154764038927257*/
; /* /bitrix/templates/aspro-stroy/js/custom.js?147928957841*/
; /* /bitrix/templates/aspro-stroy/js/spectrum.min.js?150477693928168*/
; /* /bitrix/components/bitrix/search.title/script.min.js?15622393316443*/
; /* /bitrix/templates/aspro-stroy/components/bitrix/catalog.smart.filter/front/script.js?147928957723218*/
; /* /bitrix/templates/aspro-stroy/js/jquery.inputmask.bundle.min.js?152699302270933*/

//# sourceMappingURL=template_a00a6cbc40508c31a2414d383f2882e4.map.js